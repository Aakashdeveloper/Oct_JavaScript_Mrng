for
while
do while
for of
for in 
Map
filter

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var myarry = ["Audi", "BMW", "Delhi", "Green", "Merc", "Mumbai", "Pune", "Red", "Yellow"]
for(i=0;i<myarry.length;i++){
    console.log(myarry[i])
}

var myarry = ["Audi", "BMW", "Delhi", ["Green", "Merc", "Mumbai", "Pune"], "Red", "Yellow"]
for(i=0;i<myarry.length;i++){
    for(j=0;j<myarry[i].length;j++){
        console.log(myarry[i][j])
    }
}

Array.isArray([1,2])
true
Array.isArray('a')
false

var myarry = ["Audi", "BMW", "Delhi", ["Green", "Merc", "Mumbai", "Pune"], "Red", "Yellow"]
for(i=0;i<myarry.length;i++){
    if(Array.isArray(myarry[i])){
        for(j=0;j<myarry[i].length;j++){
            console.log(myarry[i][j])
        }
    }else{
        console.log(myarry[i])
    }
    
}

///while
var i = 10
while(i<5){
    console.log(i)
    i++
}

///do while
var i = 10
do{
    console.log(i)
    i++
}
while(i<5)

/////for of/////
var city = ["Venice","Paris","NewYork","London"]
for(mycity of city){
    console.log(mycity)
}

var city = ["Venice","Paris",["Red","Yellow","Orange"],"NewYork","London"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(cities of mycity){
            console.log(cities)
        }
    }else{
        console.log(mycity)
    }
}