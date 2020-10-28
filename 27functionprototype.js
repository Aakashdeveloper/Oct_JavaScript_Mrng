function human(name){
    this.name = name;
    this.city = "London"
}
function robot(name){
    this.name = name;
    this.legs = 2;
    this.color="Red"
}

var john = new human('John')
human {name: "John", city: "London"}

human.prototype = new robot()
var alvin = new human('alvin')
human {name: "alvin", city: "London"}
alvin.legs
2
alvin.color
"Red"