console.log('Welcome to Javascript programming...')

var x = 100

x = "Hello"

x = 90.50
x = true
x = undefined
x = Object

let y = 200
const z = 300

a = 100

console.log(typeof(x))

function sum(a, b){
    c = a + b
    console.log(`Sum : ${c}`)
}

console.log(typeof(sum))

sum(10, 20)

//'Hello Pritesh'

function greet(name){
    return `Hello, ${name}`
}

console.log(greet('Pritesh'))

//Array

var a = [1, 2, "A", "3", "Hello", true, false, 100, sum, greet]
console.log(a)
console.log(a[0])
console.log(a[3])
console.log(a[5])
console.log(a[8])//Not exist - undefined

for(i = 0; i < a.length; i++){
    
    let type 
    /*
    if(typeof(a[i]) == 'number'){
        type='number'
    }else if(typeof(a[i]) == 'string'){
        type='string'
    }else if(typeof(a[i]) == 'boolean'){
        type='boolean'
    }

    console.log(`${type} : ${a[i]}`)
    */
    //console.log(`${typeof(a[i])} : ${a[i]}`)

    switch(typeof(a[i])){
        case 'number':
            type='number'
        break;

        case 'string':
            type="string"
        break;

        case 'boolean':
            type="boolean"
        break;

        case 'function':
            type="function"
        break;

    }

    console.log(`${type} : ${a[i]}`)
}

var grade;
var mark = 86;

if (mark >= 90) {
    grade = 'A+';
} else if (mark >= 80) {
    grade = 'A';
} else if (mark >= 70) {
    grade = 'B';
} else if (mark >= 60) {
    grade = 'C';
} else if (mark >= 50) {
    grade = 'D';
} else { 
    grade='F';
}

switch(grade) {
    case 'A+':
        // do these steps if grade is A+
        break;
    case 'A':
        // do these steps if grade is A
        break;
    case 'B':
        // do these steps if grade is B
        break;
    case 'C':
        // do these steps if grade is C
        break;
    case 'D':
        // do these steps if grade is D
        break;
    default:
        // do these steps in any other case
        break;
}





