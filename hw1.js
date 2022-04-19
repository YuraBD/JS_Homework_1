function reverseString1(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverseString2(str) {
    let reversedStr = "";
    for (let i in str) {
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

function reverseString3(str) {
    let reversedStr = "";
    for (let i of str) {
        reversedStr = i + reversedStr;
    }
    return reversedStr;
}

function reverseString4(str) {
    let charArr = str.split('');
    charArr = charArr.reverse();
    return charArr.join('');
}

function reverseString5(str) {
    if (str === "") {
        return "";
    }
    return str.charAt(str.length-1) + reverseString5(str.slice(0, str.length-1));
}

function reverseString5(str) {
    if (str === "") {
        return "";
    }
    return str.charAt(str.length-1) + reverseString5(str.slice(0, -1));
}

function reverseString6(str) {
    if (str === "") {
        return "";
    }
    return str.charAt(str.length-1) + reverseString5(str.substring(0, str.length-1));
}

function reverseString7(str) {
    if (str === "") {
        return "";
    }
    return reverseString5(str.substr(1, str.length-1)) + str[0];
}




console.log(reverseString7("123"))