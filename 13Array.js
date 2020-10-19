Array can be collection of homegenious as well as hetrogenious datatype

var a = [1,2,4,6,77,355]
var b = ['aa','def','ewgrt','43g']
var c = [true, true,false]

var d = [2,2,'fvf','evv',33,true,24,'sef']

var city = ["London","Delhi","Amsterdam","Paris","Boston"]
undefined
city.length
5
typeof(city)
"object"
city[0]
"London"
city[4]
"Boston"
city[city.length-1]
"Boston"

var city = ["London","Delhi","Amsterdam","Paris","Boston"]
undefined
city.push('Pune')
6
city
(6) ["London", "Delhi", "Amsterdam", "Paris", "Boston", "Pune"]
city.push('Dubai')
7
city
(7) ["London", "Delhi", "Amsterdam", "Paris", "Boston", "Pune", "Dubai"]

var city = ["London","Delhi","Amsterdam","Paris","Boston"]

city.pop()
"Boston"

var city = ["London","Delhi","Amsterdam","Paris","Boston"]
undefined
city.pop(2)
"Boston"

var city = ["London","Delhi","Amsterdam","Paris","Boston"]
undefined
city.unshift('Helsinki')
6
city
(6) ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.shift()
"Helsinki"

Push > add in the end of the Array
Unshift > add in the begining of th Array
Pop > remove last value of Array
unshift > remove first value from array

var city = ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
undefined
city.slice(1)
(5) ["London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.slice(2,5)
(3) ["Delhi", "Amsterdam", "Paris"]
city
(6) ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Boston"]

var city = ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
city.splice(start,deletecount, values)

var city = ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Boston"]
undefined
city.splice(2,2)
(2) ["Delhi", "Amsterdam"]
city
(4) ["Helsinki", "London", "Paris", "Boston"]
city.splice(3,0,'Newyork','Mumbai')
[]
city
(6) ["Helsinki", "London", "Paris", "Newyork", "Mumbai", "Boston"]
city.splice(2,0,'Delhi','Amsterdam')
[]
city
(8) ["Helsinki", "London", "Delhi", "Amsterdam", "Paris", "Newyork", "Mumbai", "Boston"]
city.splice(4,1,'Dubai','Nice')
["Paris"]
city
(9) ["Helsinki", "London", "Delhi", "Amsterdam", "Dubai", "Nice", "Newyork", "Mumbai", "Boston"]