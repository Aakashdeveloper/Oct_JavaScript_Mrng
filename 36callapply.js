var car = {
    details:function(){
        return this.brand + this.model
    }
}

var mycar = {
    brand:'BMW',
    model:'X6'
}

car.details.call(mycar)
"BMWX6"
car.details.apply(mycar)
"BMWX6"

////////
var car = {
    details:function(color,year){
        return `${this.brand} ${this.model} ${color} ${year}`
    }
}

var mycar = {
    brand:'BMW',
    model:'X6'
}
car.details.call(mycar,'red',2020)
"BMW X6 red 2020"

car.details.call(mycar,['red',2020])
"BMW X6 red,2020 undefined"

car.details.apply(mycar,['red',2020])
"BMW X6 red 2020"