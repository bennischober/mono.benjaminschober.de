import { useEffect, useState } from "react";
import { Button, Group, Paper, Select, useMantineTheme } from "@mantine/core";
import { Shuffle } from "../../../utils/algorithms";
import { Bar } from "../../../types/interfaces";
import { v4 } from "uuid";
import { MergeSort } from "../MergeSort";

const algos = [
    {
        value: "MERGESORT",
        label: "Merge Sort",
        timeComplexity: { best: "", average: "", worst: "" },
    },
    {
        value: "INSERTIONSORT",
        label: "Insertion Sort",
        timeComplexity: { best: "", average: "", worst: "" },
    },
    {
        value: "QUICKSORT",
        label: "Quick Sort",
        timeComplexity: { best: "", average: "", worst: "" },
    },
    {
        value: "BUBBLESORT",
        label: "Bubble Sort",
        timeComplexity: { best: "", average: "", worst: "" },
    },
];

export function SearchAlgorithms() {
    const theme = useMantineTheme();
    const [bars, setBars] = useState<Bar[]>();
    const [speed, setSpeed] = useState(20);
    const [algo, setAlgo] = useState<JSX.Element>();

    useEffect(() => {
        if (typeof window === "undefined") return;
        console.log("constructed bars");
        createBars();
    }, []);

    useEffect(() => {
        console.log("dosenbier saufen!");
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

    const handleAlgoExecute = () => {
        if (!bars) return;
        setAlgo(
            <MergeSort
                bars={bars}
                speed={speed}
                setBars={handleSetBars}
                task={task}
            />
        );
    };

    const sleep = (milliSeconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliSeconds));
    };

    const task = async (i: number) => {
        await sleep(i);
    };

    return (
        <div>
            <h1>Search Algorithms</h1>
            <Button onClick={() => handleReShuffle()}>Reset</Button>
            {bars ? (
                <Group align={"flex-end"}>
                    <Select
                        label="Choose a sorting algorithm"
                        data={algos}
                    ></Select>
                    <Button onClick={() => handleAlgoExecute()}>
                        Execute Sorting
                    </Button>
                </Group>
            ) : null}
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
