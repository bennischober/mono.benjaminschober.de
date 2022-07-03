import { useEffect } from "react";
import { Bar, QuickSortProps } from "../../../types/interfaces";

export function QuickSort({
    bars,
    speed,
    setBars,
    task,
    done,
}: QuickSortProps) {
    useEffect(() => {
        quicksort();
    }, []);

    const quicksort = async () => {
        if (!bars) {
            console.log("bars are empty!");
            return;
        }

        let currentArr = bars;

        const start = performance.now();
        await sort(currentArr, 0, currentArr.length - 1);
        const end = performance.now();
        done(
            "quick sort is finished! Execution time: " +
                Math.floor((end - start) / 1000) +
                " seconds"
        );
    };

    const sort = async (A: Bar[], p: number, r: number) => {
        if (p < r) {
            let q = await partition(A, p, r);
            await task(speed);
            setBars([...A]);
            await sort(A, p, q - 1);
            await sort(A, q + 1, r);
        }
    };

    const partition = async (
        A: Bar[],
        p: number,
        r: number
    ): Promise<number> => {
        let x = A[r];
        let i = p - 1;
        for (let j = p; j < r; j++) {
            if (A[j].key <= x.key) {
                i++;
                [A[i], A[j]] = [A[j], A[i]];
                setBars([...A]);
                await task(speed);
            }
        }
        await task(speed);
        [A[i + 1], A[r]] = [A[r], A[i + 1]];
        setBars([...A]);
        return i + 1;
    };

    return <></>;
}
