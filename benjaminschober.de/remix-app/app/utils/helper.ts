export function getAge() {
    const born = new Date(1998, 4, 21);
    const diff = Date.now() - born.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // const today = new Date();
    // const age = today.getFullYear() - born.getFullYear();
    // const m = today.getMonth() - born.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < born.getDate())) {
    //     return age - 1;
    // }
    // return age;
}

export function parseJSONString(keys: string[], json: string, replace: string[]) {
    if (keys.length !== replace.length) return;

    keys.forEach((key, index) => {
        json.indexOf(key) !== -1 && (json = json.replace(key, replace[index]));
    });

    return json;
}

export function hexToRGBA(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// function that goes through all keys in JSON and returns the values as an array
export function getValuesFromJSON(json: any) {
    const values = [];

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            values.push(json[key]);
        }
    }

    return values;
}

