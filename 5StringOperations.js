var city = "Amsterdam";
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"

var city = "Amsterdam";
undefined
city[0]
"A"
city[1]
"m"

var city = "lONdoN"

var name = "Aakash"
undefined
name.length
6
var name = "    Aakash "
undefined
name.length
11
name.trim()
"Aakash"
var name = "  Aakash . "
undefined
name.trim()
"Aakash ."

//JavaScript is case sensitive

var name = "john"
undefined
var name1 = "John"
undefined
name == name1
false

name.toLowerCase() == name1.toLowerCase()
true

var a = "paris"
var a = "paris"
a.charAt(0)
"p"
a.charAt(2)
"r"
a[2]
"r"

/// in case of one input it will remove that many values from the beginning
/// in case of range it will return value in given range

a.slice(1)
"aris"
a.slice(2)
"ris"
a.slice(2,4)
"ri"
a.slice(2,5)
"ris"
a.slice(2,6)
"ris"


var city = "lONdoN"
city.charAt(0).toUpperCase()
"L"
city.slice(1)
"ONdoN"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var a = "i am learning javascript";
a.replace('javascript','js')
"i am learning js"


var a = "javascript i am learning javascript";
a.replace('javascript','js')
"js i am learning javascript"


var a = "javascript i am learning javascript";
a.replace(/javascript/g,'js')
"js i am learning js"

var name = "  Aakash . "
name.replace(/ /g,'')
"Aakash."


var marks = 10;
undefined
marks.toString()
"10"

substring
substr 

var a = "Hongkong"
undefined
a.substr(1)
"ongkong"
a.substr(1,4)  >>>> a.substr(start,length)
"ongk"
a.slice(1,4)  >>>>> a.slice(start,end)
"ong"

var a = "Hongkong"
undefined
a.substring(1,3)
"on"
a.slice(1,3)
"on"
a.slice(3,-1)
"gkon"
a.slice(-1,3)
""
a.slice(-3,-1)
"on"
a.substring(3,-1)
"Hon"
a.substring(-3,-1)
""