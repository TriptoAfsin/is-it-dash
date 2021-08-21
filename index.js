//primitive data
let isString = (input) => {
    return(typeof input === "string")
}

let isNum = (input) => {
    return(typeof input === "number")
}

let isFloat = (input) => {
    if(!isNum(input)){
        console.warn(`isFloat() requires a number,a ${typeof input} was given instead`)
        return false
    }
    return(typeof input === "bigint")
}

let isInt = (input) => {
    if(!isNum(input)){
        console.warn(`isInt() requires a number,a ${typeof input} was given instead`)
        return false
    }
    return n % 1 === 0;
}

let isPositiveNum = (input) => {
    if(!isNum(input)){
        console.warn(`isPositiveNum() requires a number,a ${typeof input} was given instead`)
        return false
    }
    return (Math.sign(input) === 1)
}

let isNegativeNum = (input) => {
    if(!isNum(input)){
        console.warn(`isNegativeNum() requires a number,a ${typeof input} was given instead`)
        return false
    }
    else if(input === 0){
        return false
    }
    return !isPositiveNum(input)
}

//number validation
let isPrime = (num) => {
    if (!isNum(num)) {
        console.warn(`isPrime() requires a number,a ${typeof input} was given instead`)
        return false
    }
    for (let i = 2, s = Math.sqrt(num); i <= s; i++){
        if (num % i === 0){
            return false;
        } 
    }
     
    return num > 1;
}

let isOdd = (num) => {
    if(!isNum(num)){
        console.warn(`isOdd() requires a number,a ${typeof num} was given instead`)
        return false
    }
    else if(num === 0){
        return false
    }
    return !isEven(num)
}

let isEven = (num) => {
    if(num === 0){
        return false
    }
    return (num % 2 === 0)
}



// real life validations
let isUrl = (url) => {
    if (!isString(url)) {
        console.warn(`isUrl() requires a string,a ${typeof url} was given instead`)
        return false
    }
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return urlPattern.test(url);
}

let isEmail = (email) => {
    if (!isString(email)) {
        console.warn(`isEmail() requires a string,a ${typeof email} was given instead`)
        return false
    }
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(String(email).toLowerCase());
}

let isPhone = (countryCode="",phoneNum,phoneNumLength) => {

    const specialCharsPattern = /[ `!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/;
    const lettersPattern = /[a-zA-Z]/

    if (!isString(phoneNum)) {
        console.warn(`isPhone() requires a string,a ${typeof phoneNum} was given instead`)
        return false
    }
    if(phoneNum.length !== phoneNumLength){
        return false
    }
    if(lettersPattern.test(phoneNum)){
        console.warn(`Invalid chars were found`)
        return false
    }
    if(specialCharsPattern.test(phoneNum)){
        console.warn(`Invalid chars were found`)
        return false
    }
    return true
}

let passCheck = (pass, passLength = 6, specialChars = false, numbers=false, upperCase = false, lowerCase = true) => {
    if (!isString(pass)) {
        console.warn(`Invalid Format: ${typeof pass}`)
        return false
    }
    if(pass.length < passLength){
        console.log("Length Missed")
        return false
    }
    if(lowerCase){
        const format = /[a-z]/;
        if(!format.test(pass)){
            console.log("Lowercase Missed")
            return false
        }
    }
    if(specialChars){
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(!format.test(pass)){
            console.log("Special Chars Missed")
            return false
        }
    }
    if(numbers){
        const format = /\d/;
        if(!format.test(pass)){
            console.log("Numbers Missed")
            return false
        }
    }
    if(upperCase){
        const format = /[A-Z]/;
        if(!format.test(pass)){
            console.log("Uppercase Missed")
            return false
        }
    }

    return true

}

let passStrength = (pass) => {
    let score = 0;
    let specialCharsPattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbersPattern = /\d/;
    let uppercasePattern = /[A-Z]/;
    let lowercasePattern = /[a-z]/;


    if(!isString(pass)){
        console.warn(`Invalid Format: ${typeof pass}, a string is expected`)
        return score
    }

    let trimmedPass = pass.trim()
    let passLength = trimmedPass.length


    if(passLength === 0 || pass === null) {
        score = 0
    }
    if(passLength === 1) {
        score = 5
    }
    if (passLength >= 2 &&pass.length <= 4){
        score += 10
    }
    if (passLength >= 5 && pass.length <= 7){
        score += 30
    }
    if (passLength >= 5 && pass.length <= 7){
        score += 30
    }
    if (passLength >= 7 && pass.length <= 10){
        score += 50
    }
    if (passLength >= 10){
        score += 75
    }
    if(specialCharsPattern.test(pass) && passLength >= 2){
        score += 6
    }
    if(numbersPattern.test(pass) && passLength >= 2){
        score += 6
    }
    if(uppercasePattern.test(pass) && passLength >= 2){
        score += 6
    }
    if(lowercasePattern.test(pass) && passLength >= 2){
        score += 6
    }

    return `${score}`
}



module.exports = {



    isString: isString,
    isNum: isNum,
    isInt: isInt,
    isFloat: isFloat,

    isOdd: isOdd,
    isEven: isEven,
    isPositiveNum: isPositiveNum,
    isNegativeNum: isNegativeNum,
    isPrime: isPrime,

    isUrl: isUrl,
    isEmail: isEmail,
    isPhone: isPhone,
    passCheck: passCheck,
    passStrength: passStrength,

    
}