/*var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
Say Hi to Michal Peter
*/
///////
var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())

//////
constructor
/////////

var bob = new Object()
bob.age = 10;
bob.city="NewYork";
bob.setAge= function(newAge){
    this.age = newAge
}

bob
{age: 10, city: "NewYork", setAge: ƒ}
bob.setAge(20)
undefined
bob
{age: 20, city: "NewYork", setAge: ƒ}

var tony = new Object()
tony.age = 10;
tony.city="NewYork";
tony.setAge= function(newAge){
    this.age = newAge
}


var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10;
bob.city="NewYork";
bob.setAge= createAge

var tony = new Object()
tony.age = 10;
tony.city="NewYork";
tony.setAge= createAge

bob
{age: 10, city: "NewYork", setAge: ƒ}
tony.setAge(21)
undefined
bob
{age: 10, city: "NewYork", setAge: ƒ}
tony
{age: 21, city: "NewYork", setAge: ƒ}