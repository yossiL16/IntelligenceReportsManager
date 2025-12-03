// const {createNewObject} = require("./createObject.js")
import {db} from "../db/dataBase.js"


const ifInList = (id)=>{
    for(let object of db){
        if(id === object.id){
            return true
        }
    } return false
}


const checkNotEmpty = (object)=>{
    for(let key in object){
        if(object[key] === undefined || object[key] === ""){
            throw new Error("One or more of the fields are empty.")
        }
    }
}


const savingReportIntoDB = (object)=>{
    checkNotEmpty(object)
    if(db.length < 1){
            db.push(Object)
    }
    const x = ifInList(object.id)
    if(x  === true){
        throw new Error("The report already exists.")
    } 
    else{
        db.push(object)
        }
}





