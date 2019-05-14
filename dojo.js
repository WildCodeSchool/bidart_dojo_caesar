
const mot = 'Bonjour';

function caesar(mot) {
    arrayMot = mot.toLowerCase().split('');
    const arrayAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const newArray = [];
    for (let i = 0; i < arrayMot.length; i++) {
        for (let a = 0; a < arrayAlphabet.length; a++) {
            if (arrayMot[i] === arrayAlphabet[a]) {
                newArray.push(arrayAlphabet[a+3])
            } 
        }
    }

    const newMot = newArray.join('');
    return newMot;
} 
console.log(`Mot d'entrée : ${mot}`);
console.log(`Mot de sortie : ${caesar(mot)}`);