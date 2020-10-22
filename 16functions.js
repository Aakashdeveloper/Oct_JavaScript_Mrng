function
method
arrow function
IFFI
Generator
///////////
var a = 10
var b = 20
a+b

///
function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(9,8)
17

function isEven(userinput){
    var out;
    if(userinput%2==0){
        out = `Number ${userinput} is even`
    }else{
        out = `Number ${userinput} is odd`
    }
    return out
}
isEven(3)
"Number 3 is odd"
isEven(4)
"Number 4 is even"

function add(a,b){
    return a,b
}
undefined
add(1,2)
2
add('a','b')
"b"
add(2,1)
1


//////
method>>> when function assign to one variable it become method
/////

var add = function(a,b){
    return a+b
}

add(1,2)
3

///////
arrow function es6
////

var add = (a,b) => {return a+b}