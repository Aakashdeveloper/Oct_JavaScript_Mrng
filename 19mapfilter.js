var a = [4,5,8,3,12,78,56];
a.map((data) => { return data*2})
[8, 10, 16, 6, 24, 156, 112]

var a = [4,5,8,3,12,78,56];
a.map((data) => { console.log(data*2)})

> map is use to loop over array
> it always return same length of array as input array;
> it is use to apply logic(sum,mul) or simply print the output

var b = [20,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[35, 34, 26, 67, 32]
b.map((data) => {return data>25})
[false, true, true, true, true, false, false, true]

> filter is use to filter out the value from array
> it may or may not return same length in output
> it only return those value for which output is true;

var a = [0,1,2,3]
a.map((data) => {return data*2})
[0, 2, 4, 6]
a.filter((data) => {return data*2})
[1, 2, 3]