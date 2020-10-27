let dbObj ={}

dbObj.users=[
    {
        name:'Alvin',
        city:'London'
    },
    {
        name:'Sarah',
        city:'NewYork'
    }
]

dbObj.dbquery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name},${data.city})`}
}

//es5
//module.exports = dbObj;

//es6
export default dbObj;