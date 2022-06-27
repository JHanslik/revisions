// 01 - ALPHABET

// const sortLetters = (string) => {
//     let result = string
//     result = string.split("").sort().join("")
//     console.log (result)
// }
// sortLetters ("konexio")


// --------------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - XOXO

const countEach = (string) => {
    let xoxo = string
    let x = 0
    let o = 0
    for (let digit of xoxo) {
        if (digit === "x") {
            x ++
        } else if (digit === "o") {
            o ++
        }
    }    
 
    if (x === o) {
        console.log ("true")
    } else {
        console.log ("false")
    }
}

countEach ("xoxoxoxoxox")