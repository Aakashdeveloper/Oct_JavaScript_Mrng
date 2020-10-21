RegExp
regular expression 

^$

var a = "hi"
^([a-z])$

var a = "hi"
undefined
a.match("^([a-z])$")
null
var a = "h"
undefined
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("^([a-z]{2})$")

var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hii"
a.match("^([a-z]{2})$")
null
var a = "hii"
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a = "hiiI"
a.match("^([a-z]+)$")

var a = "hii"
a.match("^([a-zA-Z0-9]{8,15})$")

var a = 9989898
a.match("^([0-9]{10})$")
VM881:2 Uncaught TypeError: a.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM881:2
a.toString().match("^([0-9]{10})$")
null
var a = 9989898980
undefined
a.toString().match("^([0-9]{10})$")
(2) ["9989898980", "9989898980", index: 0, input: "9989898980", groups: undefined]


var email = "a@a.com"
email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")

