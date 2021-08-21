let validate = require('./index')

console.log(validate.isOdd("4"))  //false
console.log(validate.isNum(56.0087))  //true
console.log(validate.isFloat("56.0087"))  //true
console.log(validate.isNegativeNum(0)) 
console.log(validate.isPrime(6))
console.log(validate.isUrl("www.filehorse.com")) //true
console.log(validate.isEmail("AfsinTripto@gmail.com")) //true
console.log(validate.passCheck("66767u$T",passLength=6,sepcialChars=true,numbers=true,upperCase=false))
console.log(validate.passCheck("66767uT",passLength=6,sepcialChars=true,numbers=true,upperCase=false))  
console.log(validate.passStrength("abcd1234#")) //68
console.log(validate.isPhone("+88","01936396220",11))

