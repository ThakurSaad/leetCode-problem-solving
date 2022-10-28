/**
 * @param {string} s
 * @return {string}
 */
 
var reverseWords = function(s) {
    const arr = s.split(" ");
    let result = "";
    
    for (let i = 0; i < arr.length; i++) {
        const reversed = arr[i].split("").reverse().join("");
        
        if (i == 0) {
            result += reversed;
            continue;
        }
        result += " " + reversed;
    }
    
    return result;
};