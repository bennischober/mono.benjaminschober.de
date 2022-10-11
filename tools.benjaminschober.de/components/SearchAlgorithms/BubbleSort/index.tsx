import { Bar, BubbleSortProps } from "../../../types/interfaces";

export function BubbleSort({
    bars,
    speed,
    setBars,
    task,
    done,
}: BubbleSortProps) {
    const bubblesort = async () => {
        if (!bars) {
            console.log("bars are empty!");
            return;
        }
        let currentArr = bars;
        const start = performance.now();
        await sort(currentArr);
        const end = performance.now();
        done(
            "bubble sort is finished! Execution time: " +
                Math.floor((end - start) / 1000) +
                " seconds"
        );
    }

    const sort = async (A: Bar[]) => {
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A.length - i - 1; j++) {
                if (A[j].key > A[j + 1].key) {
                    [A[j], A[j + 1]] = [A[j + 1], A[j]];
                    setBars([...A]);
                    await task(speed);
                }
            }
        }
    }

    bubblesort();

    // render noting
    return <></>;
}