//Objective is to find whether two strings, after applying the appropriate backspace
//operations, are the same.

let str1 = 'xyz'
let str2 = 'xyzzz##'


//O(n) solution that uses a stack to push or pop characters out of the string
//and compares the two strings at the end

function compare(string) {
    let temp = []
    for (let char of string) {
        char == '#' ? temp.pop() : temp.push(char)
    }

    return temp
}

return compare(str1) == compare(str2)