# Is-It-Dash
This is a simple 0 dependency data validation library for Node.js, React, Angular, Vue, Vanilla JS etc

<p align="center"><img src="./isIt_.png" width="256px" alt="Logo"></img></p>

### Features - 
1. Datatype Validations - String, Number, Integer, Float
2. Numeric Validations - Prime Number, Odd, Even Number, Positive, Negative Number
3. Form Type/ Real Life Data Validations - Email, URL, Password, Pass strength, Phone No.
    

### Installation - 

1. NPM - 
```
npm i is-it-dash
```


### Usage - 

```javascript
let validate = require('is-it-dash')
//or
import validate from 'is-it-dash'


//Numeric Validations
console.log(validate.isOdd(4))  //false
console.log(validate.isNum(56.0087))  //true
console.log(validate.isFloat(56.0087))  //true
console.log(validate.isNegativeNum(0)) //false
console.log(validate.isPrime(6)) //false

//URL Validations
console.log(validate.isUrl("www.filehorse.com")) //true

//Email Validations
console.log(validate.isEmail("AfsinTripto@gmail.com")) //true

//Password related validations
console.log(validate.passCheck("66767u$T",passLength=6,sepcialChars=true,numbers=true,upperCase=false)) //true
console.log(validate.passCheck("66767uT",passLength=6,sepcialChars=true,numbers=true,upperCase=false)) //false
console.log(validate.passStrength("abcd1234#")) //68

//Phone No Validations
console.log(validate.isPhone("+88","01936396228",11)) //true


````

**Thanks for your time, please give a star to this project 😁**