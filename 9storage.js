localStorage
// presistent Storage
> it always present in browser after saving 
> We have to remove it manually 

localStorage.setItem('token','4554vw55')
undefined
localStorage.getItem('token')
"4554vw55"
localStorage.removeItem('token')
undefined


////SessionStorage
> save wrt to tab
> remove automatically as you close the tab

sessionStorage.setItem('_lthjjjlj','98n988hu')
undefined
sessionStorage.getItem('_lthjjjlj')
"98n988hu"
sessionStorage.removeItem('_lthjjjlj')

///cookies
//Cookies save wrt to the website
//Even when you open the same websote you still see your saved cookies

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.598774704.1602686177; _gat_gtag_UA_131256843_1=1"
document.cookie = "location=45.33"
"location=45.33"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.598774704.1602686177; location=45.33"

document.cookie="place=delhi;expires=Sat, 17 Oct 2020 01:00:00 UTC;"

PWA 