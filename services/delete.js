import {dataBase, db} from "../db/dataBase.js"


function deleteReport(id){
    for(index in dataBase){
        if(id === dataBase[index].id){
            dataBase.pop(index)
        }
    } throw new Error("Report not found")

}

