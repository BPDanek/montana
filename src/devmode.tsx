
const DEVMODE_COLOR_DEBUG = true;

export const montana_grey = '#F0F0F0'
/*
    returns a new color if we are debugging colors
*/
export function getDebugColor(): string | undefined {
    return DEVMODE_COLOR_DEBUG ? getColor() : undefined;
}

/*  
    Get a color in hexadecimal as a string, doesn't check for dev mode
*/
let global_red = 255;
let global_green = 255;
let global_blue = 0;
function getColor(): string {

    if (global_red > 5) {
        global_red = global_red - 25;
    }
    else {
        if (global_green > 5) {
            global_green = global_green - 25;
        }
        else {
            if (global_blue > 5) {
                global_blue = global_blue - 25;
            }
        }
    }

    return '#' + makeValidHex(global_red) + makeValidHex(global_green) + makeValidHex(global_blue);

}

/* 
    make a number in base 10 a two digit string in hexadecimal 
    (helper function for getColor())
*/
function makeValidHex(baseTen: number): string {
    const BASE = 16;

    const baseHex: string = baseTen.toString(BASE);

    return baseHex.length === 1 ? '0' + baseHex : baseHex;

}
