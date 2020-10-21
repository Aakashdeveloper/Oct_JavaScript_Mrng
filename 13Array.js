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

var url = "https://github.com/Aakashdeveloper"

var url = "https://github.com/Aakashdeveloper"
undefined
url.split('/')
(4) ["https:", "", "github.com", "Aakashdeveloper"]0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"length: 4__proto__: Array(0)
var out = url.split('/')
undefined
out[0]
"https:"
out[out.length-1]
"Aakashdeveloper"

var data = "i am learning javascript"
undefined
data.split(' ')
(4) ["i", "am", "learning", "javascript"]
var a = "javascript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var out = a.split('')
undefined
out
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
out.toString()
"j,a,v,a,s,c,r,i,p,t"
out.toString().replace(/,/g,'')
"javascript"

var myarr = ["Delhi","Mumbai",['Red','Yellow',['Audi','BMW','Merc'],"Green"],"Pune"]
undefined
myarr[2]
(4) ["Red", "Yellow", Array(3), "Green"]
myarr[2][2]
(3) ["Audi", "BMW", "Merc"]
myarr[2][2][1]
"BMW"

var myarr = ["Delhi","Mumbai",['Red','Yellow',['Audi','BMW','Merc'],"Green"],"Pune"]
undefined
myarr.flat()
(7) ["Delhi", "Mumbai", "Red", "Yellow", Array(3), "Green", "Pune"]
myarr.flat(1)
(7) ["Delhi", "Mumbai", "Red", "Yellow", Array(3), "Green", "Pune"]
myarr.flat(2)
(9) ["Delhi", "Mumbai", "Red", "Yellow", "Audi", "BMW", "Merc", "Green", "Pune"]
var out = ["Delhi", "Mumbai", "Red", "Yellow", "Audi", "BMW", "Merc", "Green", "Pune"]
undefined
out.sort()
(9) ["Audi", "BMW", "Delhi", "Green", "Merc", "Mumbai", "Pune", "Red", "Yellow"]
out.reverse()
(9) ["Yellow", "Red", "Pune", "Mumbai", "Merc", "Green", "Delhi", "BMW", "Audi"]