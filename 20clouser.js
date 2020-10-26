//enclose something
//local scope
//global scope

/*var a = 10
function add(){
    var b = 20
    return a+b
}

console.log(add())
console.log(">>>>a>>",a)
console.log(">>>>b>>",b)

30
10
undefined*/

//variable that can be access outside the function and inside is global scope
//variable that cannot be access outside the function only inside is local scope

var a = 10
for(i=0;i<4;i++){
    let b = "hi"
    console.log(a+i+b)
}

console.log(">>>>a>>",a)
console.log(">>>>b>>",b)

/*
10hi
11hi
12hi
13hi
>>>>a>> 10
>>>>b>> hi
*/

/*
console.log(mul(2)(3)(4))

function mul(a,b,c){
    return a*b*c
}*/

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

console.log(mul(2)(3)(4))
24