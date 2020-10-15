if(condition){
    //do something
}else{
    //do something
}

var a = 8987
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 8987 is odd

var name = "Bhumika"
if(name=="John"){
    console.log(`${name} You are admin`)
}else if(name=="Bhumika"){
    console.log(`${name} You are superadmin`)
}else{
    console.log(`${name} i dont know you`)
}
VM63:5 Bhumika You are superadmin


var name = "Bhumika"
if(role=="Admin"){
    if(name=="John"){
        console.log(`${name} You are admin`)
    }else if(name=="Aakash"){
        console.log(`${name} You are system admin`)
    }
}else if(name=="Bhumika"){
    console.log(`${name} You are superadmin`)
}else{
    console.log(`${name} i dont know you`)
}

var a = 1
if(a){
    console.log('Hi')
}else{
    console.log('Bie')
}
VM76:3 Hi


var a = 0
if(a){
    console.log('Hi')
}else{
    console.log('Bie')
}


truthy => any number expect 0(+number,-number), true ,string, []
false = 0,false,null,undefined

var a = -1
if(a){
    console.log('Hi')
}else{
    console.log('Bie')
}
'Hi'

///
Ternary Operator(single line if else)
////
var a = 10
a>10 ? "Hii":"Bie"
"Bie"
var a = 10
a==10 ? "Hii":"Bie"
"Hii"


var a = 10
a==10?a+1:a-1
11
var a = 10
a>10?a+1:a-1
9


//never try nested ternary operater
var a = 10
a>10?a+1:a-1?'hii':'bie'