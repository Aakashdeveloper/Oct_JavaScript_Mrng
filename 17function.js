/*IFFI*/
/*function greet(){
    return "HI To ALL"
}

console.log(greet())
*/

////

(function(){
    console.log("HI To ALL")
}())

///////////
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
looping(4)
0
1
2
3

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}
undefined
looping(4)
looping {<suspended>}

var data = looping(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}