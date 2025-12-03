import {db} from "../db/dataBase.js"



const SearchingforaReportbyID = (id)=>{
    for(let object of db){
        if(object.id === id){
            return object
        }
    } throw new Error("Report not found")
}
