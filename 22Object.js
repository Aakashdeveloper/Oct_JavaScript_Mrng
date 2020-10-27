var moviename = "Blood Diamond"
var movierating = 4
var movielang = "English"

var moviename1 = "Jab We Mer"
var movierating1 = 4.5
var movielang1 = "Hindi"

//literal Notation

var movie={
    name:'Blood Diamond',
    rating:4,
    lang:'English'
}
undefined
typeof(movie)
"object"
movie.name
"Blood Diamond"
movie.rating
4
movie['name']
"Blood Diamond"
movie.ind="Hollywood"
"Hollywood"
movie
{name: "Blood Diamond", rating: 4, lang: "English", ind: "Hollywood"}
movie.rating=3.5
3.5
movie
{name: "Blood Diamond", rating: 3.5, lang: "English", ind: "Hollywood"}
delete movie.lang
true

////////
var calc ={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}

calc.sum(2,3)
5
calc.sub(3,1)
2

var dbquery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name},${data.city})`}
}

dbquery.find('Employee')
"Select * from Employee"
dbquery.insert('Student',{name:'John',city:'Delhi'})
"insert into Student name,city values(John,Delhi)"