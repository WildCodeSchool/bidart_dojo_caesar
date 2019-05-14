let caesarShift = function(str) {
    let output = "";

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) c = String.fromCharCode(code + 3);
            else if (code >= 97 && code <= 122) c = String.fromCharCode(code + 3);
        }

        output += c;
    }

    return output;
};

console.log(caesarShift("abc"));

// let caesarNumber = function(str) {
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let output = "";
//     for (let i = 0; i < str.length; i++) {
//         if (
//             alphabet.map((x, j) => {
//                 return x[j];
//             }) === str[i]
//         ) {
//             let c = alphabet[i + 3];
//         }
//         output += c;
//     }
//     return output;
// };

// console.log(caesarNumber("Bonjour"));
