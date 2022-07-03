import { AlgoData } from "../types/interfaces";

// normal shuffle algorithm, based on Fisher-Yates
export function Shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


// function that checks, if numbers in array are in ascending order
export function isSortedASC(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}



const ALGO_DATA: AlgoData[] = [
    {
        value: "MERGESORT",
        label: "Merge Sort",
        timeComplexity: { best: "", average: "", worst: "" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `import { Button } from '@mantine/core';

        function Demo() {
          return <Button>Hello</Button>
        }`,
        sources: []
    },
    {
        value: "INSERTIONSORT",
        label: "Insertion Sort",
        timeComplexity: { best: "", average: "", worst: "" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `for(let j = 1; j < A.length; j++) {
            let key = A[j];
            let i = j - 1;
            while(i >= 0 && A[i] && A[i] > key) {
                A[i + 1] = A[i];
                i--;
            }
            A[i + 1] = key;
        }`,
        sources: []
    },
    {
        value: "QUICKSORT",
        label: "Quick Sort",
        timeComplexity: { best: "", average: "O(n log(n))", worst: "O(n^2)" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: "",
        sources: []
    },
    {
        value: "BUBBLESORT",
        label: "Bubble Sort",
        timeComplexity: { best: "", average: "", worst: "" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `for (let i = 0; i < A.length; i++) {
                for (let j = 0; j < A.length - i - 1; j++) {
                    if (A[j] > A[j + 1]) {
                        [A[j], A[j + 1]] = [A[j + 1], A[j]];
                    }
                }
            }`,
        sources: []
    },
];

export function getAlgoSelect() {
    return ALGO_DATA.map(val => {
        return { label: val.label, value: val.value };
    });
}

export function getAlgoData(value: string) {
    return ALGO_DATA.find(val => val.value === value);
}
