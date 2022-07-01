import { useEffect } from "react";
import { Bar, MergeSortProps } from "../../../types/interfaces";

export function MergeSort({ bars, speed, setBars, task }: MergeSortProps) {
    useEffect(() => {
        mergesort();
    }, []);

    // algo partly by: https://www.geeksforgeeks.org/merge-sort/

    const mergesort = async () => {
        if (!bars) {
            console.log("bars are empty!");
            return;
        }
        let currentArr = bars;
        await sort(currentArr, 0, currentArr.length - 1);
    };

    const sort = async (arr: Bar[], l: number, r: number) => {
        if (l >= r) {
            return;
        }
        let m = Math.floor(l + (r - l) / 2);
        await sort(arr, l, m);
        await sort(arr, m + 1, r);
        await merge(arr, l, m, r);
    };

    const merge = async (arr: Bar[], l: number, m: number, r: number) => {
        let n1 = m - l + 1,
            n2 = r - m;

        let L = new Array(n1),
            R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

        let i = 0,
            j = 0,
            k = l;

        while (i < n1 && j < n2) {
            await task(speed);
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
            setBars([...arr]);
        }

        while (i < n1) {
            await task(speed);
            arr[k] = L[i];
            i++;
            k++;
            setBars([...arr]);
        }

        while (j < n2) {
            await task(speed);
            arr[k] = R[j];
            j++;
            k++;
            setBars([...arr]);
        }
    };

    return <></>;
}
