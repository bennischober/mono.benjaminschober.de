import { AspectRatio, ResolutionProps } from '../types/interfaces';

/**
 * Function that calculates a REM number by a given PX number.
 * @param px PX value to convert to REM
 * @param base Base of the font size. Normally 16px
 * @returns REM value of PX
 */
export function getREMFromPX(px: number, base: number = 16): number {
    return px / base;
}

/**
 * Function that calculates a Pixel number by a given REM number.
 * @param rem REM value to convert to px
 * @param base Base of the font size. Normally 16px
 * @returns Pixel value of REM
 */
export function getPXFromREM(rem: number, base: number = 16): number {
    return rem * base;
}


export function getGCD(a: number, b: number): number {
    return b ? getGCD(b, a % b) : a;
}

export function getAspectRatio(width: number, height: number): AspectRatio {
    const gcd = getGCD(width, height);
    console.log("gcd: " + gcd);
    return {
        width: width / gcd,
        height: height / gcd
    };
}

export function getResolution(ratio: ResolutionProps): AspectRatio {
    // if width and height are equal to the ratio, return the ratio
    if (ratio.width % ratio.aspectLeft === 0 && ratio.height % ratio.aspectRight === 0) {
        return {
            width: ratio.width,
            height: ratio.height
        };
    }

    // try to calculate new width and height
    return {
        width: Math.floor(ratio.width / ratio.aspectLeft) * ratio.aspectLeft,
        height: Math.floor(ratio.height / ratio.aspectRight) * ratio.aspectRight
    }
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNumberBiggerThanX(num: number, x: number): number {
    return num > x ? num : Math.abs(num);
}
