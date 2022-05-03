/**
 * Function that calculates a REM number by a given PX number.
 * @param px PX value to convert to REM
 * @param base Base of the font size. Normally 16px
 * @returns REM value of PX
 */
export function getREMFromPX(px: number, base: number = 16) : number {
    return px / base;
}

/**
 * Function that calculates a Pixel number by a given REM number.
 * @param rem REM value to convert to px
 * @param base Base of the font size. Normally 16px
 * @returns Pixel value of REM
 */
export function getPXFromREM(rem: number, base: number = 16) : number {
    return rem * base;
}