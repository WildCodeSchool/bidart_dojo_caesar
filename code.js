function encrypt (element){
    const word = document.getElementsByTagName('input')[0].value;
    const encryptWord = btoa(word);
    document.getElementById('result').innerHTML = encryptWord;
}

function decrypt (element){
    const word = document.getElementsByTagName('input')[0].value;
    const encryptWord = atob(word);
    document.getElementById('result').innerHTML = encryptWord;
}