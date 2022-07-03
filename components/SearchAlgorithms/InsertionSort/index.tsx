import { Bar, InsertionSortProps } from "../../../types/interfaces";

export function InsertionSort({
    bars,
    speed,
    setBars,
    task,
    done,
}: InsertionSortProps) {
    const insertionsort = async () => {
        if (!bars) {
            console.log("bars are empty!");
            return;
        }
        let currentArr = bars;
        await sort(currentArr);
        done("insertion sort is finished", currentArr);
    }

    const sort = async (A: Bar[]) => {
        for(let j = 1; j < A.length; j++) {
            let key = A[j];
            let i = j - 1;
            while(i >= 0 && A[i] && A[i].key > key.key) {
                A[i + 1] = A[i];
                setBars([...A]);
                await task(speed);
                i--;
            }
            A[i + 1] = key;
            setBars([...A]);
        }
    }

    insertionsort();

    // render noting
    return <></>;
}
