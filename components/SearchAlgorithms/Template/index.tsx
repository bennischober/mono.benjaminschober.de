import { useEffect, useState } from "react";
import {
    Button,
    Group,
    NumberInput,
    Paper,
    Select,
    Space,
    Text,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { v4 } from "uuid";
import {
    getAlgoData,
    getAlgoSelect,
    isSortedASC,
    Shuffle,
} from "../../../utils/algorithms";
import { MergeSort } from "../MergeSort";
import { QuickSort } from "../QuickSort";
import { InsertionSort } from "../InsertionSort";
import { BubbleSort } from "../BubbleSort";
import { AlgoData, Bar } from "../../../types/interfaces";

export function SearchAlgorithms() {
    const theme = useMantineTheme();
    const [bars, setBars] = useState<Bar[]>();
    const [speed, setSpeed] = useState(20);
    const [algo, setAlgo] = useState<JSX.Element>();
    const [algoInfo, setAlgoInfo] = useState<AlgoData>();
    const [selectValue, setSelectValue] = useState<string>("");
    const [isAlgoRunning, setIsAlgoRunning] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        createBars();
        handleSelectValue(getAlgoSelect()[0].value);
    }, []);

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

    const handleDone = (m?: string, o?: any) => {
        // enable reset button
        setIsAlgoRunning(false);

        const b = bars ? bars.map((val) => val.key) : [];
        console.log(m ? m : "done", b, isSortedASC(b), o);
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
        // also reset bars?
    };

    const handleAlgoExecute = () => {
        if (!bars) return;
        setAlgoInfo(getAlgoData(selectValue));
        setIsAlgoRunning(true);

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
            case "INSERTIONSORT":
                setAlgo(
                    <InsertionSort
                        bars={bars}
                        speed={speed}
                        setBars={handleSetBars}
                        task={task}
                        done={handleDone}
                    />
                );
                break;
            case "BUBBLESORT":
                setAlgo(
                    <BubbleSort
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
            <Paper withBorder shadow="md" p={30} mt={30} radius="xs">
                <Title order={3}>{algoInfo ? algoInfo.label : null}</Title>
                <Space mt={15} />
                {bars ? (
                    <Group align={"flex-end"}>
                        <Select
                            label="Choose a sorting algorithm"
                            data={getAlgoSelect()}
                            onChange={(e) => handleSelectValue(e!)}
                            value={selectValue}
                        />
                        <NumberInput
                            label="Animation Speed"
                            value={speed}
                            onChange={(e) => setSpeed(e!)}
                        />
                        <Button onClick={() => handleAlgoExecute()}>
                            Execute
                        </Button>
                        <Button onClick={() => handleReShuffle()} loading={isAlgoRunning}>Reset</Button>
                    </Group>
                ) : null}
                {algoInfo ? (
                    <>
                        <Space mt={30} />
                        <Text>{algoInfo.description}</Text>
                        <Text>{algoInfo.timeComplexity.average}</Text>
                        <Title order={4}>Code</Title>
                        <Prism withLineNumbers language="tsx">
                            {algoInfo.code}
                        </Prism>
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
