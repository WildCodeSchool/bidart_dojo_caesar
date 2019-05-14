let str = "bonjour";
let dec = 3  //Math.floor(Math.random()*26);
let csr = str.toUpperCase().split("")
   .map(function (i) {
      return String.fromCharCode(65 + (i.charCodeAt(0) - 65 + dec) % 26)
   })
   .join("");

console.log(str + " => " + csr)