import {db} from "../db/dataBase.js"

 
function compareNumbers(a,b){
    return a.id - b.id
}

function GettingAllReports(dataBase){
    let sort =  db.sort(compareNumbers)
    return db
}

console.log(GettingAllReports(db));
