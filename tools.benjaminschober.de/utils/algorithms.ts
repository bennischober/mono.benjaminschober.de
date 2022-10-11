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
        code: `
        async function merge(arr: number[], l: number, r: number) {
            if (l >= r) {
                return;
            }
            let m = Math.floor(l + (r - l) / 2);
            await sort(arr, l, m);
            await sort(arr, m + 1, r);
            await merge(arr, l, m, r);
        }
    
        async function merge(arr: number[], l: number, m: number, r: number) {
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
                if (L[i].key <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
    
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
    
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
        `,
        sources: []
    },
    {
        value: "INSERTIONSORT",
        label: "Insertion Sort",
        timeComplexity: { best: "", average: "", worst: "" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `
        async function sort(A: number[]){
            for (let j = 1; j < A.length; j++) {
                let key = A[j];
                let i = j - 1;
                while (i >= 0 && A[i] && A[i] > key) {
                    A[i + 1] = A[i];
                    i--;
                }
                A[i + 1] = key;
            }
        }
        `,
        sources: []
    },
    {
        value: "QUICKSORT",
        label: "Quick Sort",
        timeComplexity: { best: "", average: "O(n log(n))", worst: "O(n^2)" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `
        async function sort(A: number[], p: number, r: number) {
            if (p < r) {
                let q = await partition(A, p, r);
                await sort(A, p, q - 1);
                await sort(A, q + 1, r);
            }
        }
    
        async function partition(A: number[], p: number, r: number): Promise<number> {
            let x = A[r];
            let i = p - 1;
            for (let j = p; j < r; j++) {
                if (A[j] <= x) {
                    i++;
                    [A[i], A[j]] = [A[j], A[i]];
                }
            }
            [A[i + 1], A[r]] = [A[r], A[i + 1]];
            return i + 1;
        }
        `,
        sources: []
    },
    {
        value: "BUBBLESORT",
        label: "Bubble Sort",
        timeComplexity: { best: "", average: "", worst: "" },
        spaceComplexity: { best: "", average: "", worst: "" },
        description: "",
        code: `
        async function sort(A: number[]) {
            for (let i = 0; i < A.length; i++) {
                for (let j = 0; j < A.length - i - 1; j++) {
                    if (A[j] > A[j + 1]) {
                        [A[j], A[j + 1]] = [A[j + 1], A[j]];
                    }
                }
            }
        }
        `,
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
