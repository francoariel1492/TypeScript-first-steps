"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
//Make sure you treat null as anything as string and a number
function provideIdX(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
