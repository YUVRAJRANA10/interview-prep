// Bad code with linting errors
var message = "Hello World"
let unused = 'never used';

function greet() {
    console.log(message)
    
    if (message = "test") {
        return "greeting"
    }
    
    var result = "hello"
    return result
}

// Missing semicolon, bad spacing
const badFormatted={name:"John",age:25}