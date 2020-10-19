switch(a%2){
    case 0:
        console.log(`Number ${a} is even`);
        break;
    case 1:
        console.log(`Number ${a} is odd`);
        break;
    default:
        console.log(`Number ${a} is unknown`)
}

switch(name){
    case 'Aakash':
        console.log(`${name} you are user`);
        break;
    case 'John':
        console.log(`${name} you are admin`);
        break;
    case 'Eva':
        console.log(`${name} you are super user`);
        break;
    default:
        console.log(`${name} unknown`);
}

switch(new Date().getDay()){
    case 1:
        console.log(`Its Monday`);
        break;
    case 2:
        console.log(`Its Tuesday`);
        break;
    default:
        console.log(`Invalid`);
}
Its Monday

> For multiple condition and multiple output (IF ELSE)
> For one condition and multiple output (SWITCH)
> For one condition and one output (Ternory)