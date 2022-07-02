import { useEffect, useState } from "react";
import { Button, Group, Paper, Select, useMantineTheme } from "@mantine/core";
import {
    getAlgoData,
    getAlgoSelect,
    isSortedASC,
    Shuffle,
} from "../../../utils/algorithms";
import { AlgoData, Bar } from "../../../types/interfaces";
import { v4 } from "uuid";
import { MergeSort } from "../MergeSort";
import { QuickSort } from "../QuickSort";

export function SearchAlgorithms() {
    const theme = useMantineTheme();
    const [bars, setBars] = useState<Bar[]>();
    const [speed, setSpeed] = useState(5);
    const [algo, setAlgo] = useState<JSX.Element>();
    const [algoInfo, setAlgoInfo] = useState<AlgoData>();
    const [selectValue, setSelectValue] = useState<string>("");

    useEffect(() => {
        if (typeof window === "undefined") return;
        createBars();
    }, []);

    useEffect(() => {
    }, [speed]);

    const createBars = () => {
        // get colors => 14 colors
        const colors = Object.keys(theme.colors).map(
            (colors) => theme.colors[colors]
        );

        // create bars
        const prebars: Bar[] = [];
        let it = 0;
        // skip black and grey colors
        for (let i = 2; i < colors.length - 1; i++) {
            // skip very light colors
            for (let j = 3; j < 10; j++) {
                it += i + (j - 2);
                prebars.push({
                    key: it,
                    height: it,
                    color: colors[i][j],
                });
            }
        }

        // shuffle bars and set state
        const shuffled = Shuffle(prebars);
        setBars(shuffled);
    };

    const handleReShuffle = () => {
        createBars();
        // reset used algorithm
        setAlgo(<></>);
    };

    const handleSetBars = (b: Bar[]) => {
        setBars([...b]);
    };

    const handleDone = (m?: string) => {
        // const b = bars ? bars.map((val) => val.key) : [];
        // console.log(m ? m : "done", b, isSortedASC(b));
    };

    const sleep = (milliSeconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliSeconds));
    };

    const task = async (i: number) => {
        await sleep(i);
    };

    const handleSelectValue = (e: string) => {
        setSelectValue(e);
        setAlgoInfo(getAlgoData(e));
    };

    const handleAlgoExecute = () => {
        if (!bars) return;
        setAlgoInfo(getAlgoData(selectValue));

        // Note: Disable react strict mode for better debug of search algorithms! => next.config.js! => enable when finished
        switch (selectValue) {
            case "MERGESORT":
                setAlgo(
                    <MergeSort
                        bars={bars}
                        speed={speed}
                        setBars={handleSetBars}
                        task={task}
                        done={handleDone}
                    />
                );
                break;
            case "QUICKSORT":
                setAlgo(
                    <QuickSort
                        bars={bars}
                        speed={speed}
                        setBars={handleSetBars}
                        task={task}
                        done={handleDone}
                    />
                );
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h1>Search Algorithms</h1>
            <Button onClick={() => handleReShuffle()}>Reset</Button>
            {bars ? (
                <Group align={"flex-end"}>
                    <Select
                        label="Choose a sorting algorithm"
                        data={getAlgoSelect()}
                        onChange={(e) => handleSelectValue(e!)}
                        value={selectValue}
                    />
                    <Button onClick={() => handleAlgoExecute()}>
                        Execute Sorting
                    </Button>
                </Group>
            ) : null}
            <Paper withBorder shadow="md" p={30} mt={30} radius="xs">
                {algoInfo ? (
                    <>
                        <h3>{algoInfo.label}</h3>
                        <p>{algoInfo.description}</p>
                        <p>{algoInfo.timeComplexity.average}</p>
                    </>
                ) : null}
            </Paper>
            <Paper withBorder shadow="md" p={30} mt={30} radius="xs">
                <Group style={{ width: 1500 }} spacing="xs" align={"flex-end"}>
                    {bars?.map((bar) => (
                        <div
                            id={v4()}
                            key={v4()}
                            style={{
                                width: 9,
                                height: bar.height,
                                backgroundColor: bar.color,
                            }}
                        />
                    ))}
                </Group>
            </Paper>
            {algo}
        </div>
    );
}
