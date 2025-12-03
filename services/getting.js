import {dataBase} from "../db/dataBase.js"

 
function compareNumbers(a,b){
    return a.id - b.id
}

function GettingAllReports(db){
    db.sort(compareNumbers)
    return dataBase
}




// function sortFile(dataBase, field){

//     let sort = dataBase.sort((a,b) => a[field] - b[field]) 
//     return sort
// }
// console.log(sortFile(db, "text"));



// const f =(dataBase, field)=>{
//     dataBase.text.sort()
//     return f
// }

// console.log(f(db,"text"));

function sortFiels(dataBase,inputField)
{
    if(inputField==="weapons")
    {
        let sort_field = dataBase.sort((weapons1,weapons2)=>weapons1[inputField].length-weapons2[inputField].length)
        return sort_field
    }else {
        let sort_field = dataBase.sort((field1,field2)=>field1[inputField]-field2[inputField])
        return sort_field
    }

}
console.log(sortFiels(dataBase,"text"));

