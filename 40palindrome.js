var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp) {
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1001)
Number 1001 is palindrome

palindrome(10012)
Number 10012 is not a palindrome