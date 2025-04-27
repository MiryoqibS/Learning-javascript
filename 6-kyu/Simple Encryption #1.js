// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

/*
Реализуйте алгоритм псевдошифрования, при котором заданные строка и целое число объединяют 
все нечетные индексированные символы , со всеми четными индексированными символами, 
этот процесс должен повторяться раз.
*/

function encrypt(text, n) {
    if (text === null) {return null}

    const handleEncrypt = () => {
        let even = [];
        let odd = [];
    
        for (let i = 0; i < text.length; i++) {
            if (i % 2 == 0) {
                even.push(text[i]);
            } else {
                odd.push(text[i]);
            };
        };
    
        text = odd.join("") + even.join("");
    };

    for (let i = 0; i < n; i++) {
        handleEncrypt();        
    }

    return text;
};

function decrypt(encryptedText, n) {
    if (encryptedText == null) {return null}

    const handleDecrypt = () => {
        let left = encryptedText.slice(0, encryptedText.length / 2);
        let right = encryptedText.slice(encryptedText.length / 2, encryptedText.length);
        let decryptedText = "";
    
        for (let i = 0; i < right.length; i++) {
            if (left[i]) {
                decryptedText += right[i] + left[i];
            } else {
                decryptedText += right[i];
            }
        }    

        encryptedText = decryptedText
    }

    for (let i = 0; i < n; i++) {
        handleDecrypt();
    };

    return encryptedText;
};

console.log(encrypt("This is a test!", 1));


console.log(decrypt("This is a test!", 0))
console.log(decrypt("hsi  etTi sats!", 1))
console.log(decrypt("s eT ashi tist!", 2))
console.log(decrypt(" Tah itse sits!", 3))
console.log(decrypt("This is a test!", 4))
console.log(decrypt("This is a test!", -1))
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1))