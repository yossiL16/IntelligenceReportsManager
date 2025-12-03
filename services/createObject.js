
const checkId = (id)=>{

    if(typeof(id) !== "string" && id === undefined && typeof(id) !== "number"){
        throw new Error("Must enter numbers")
    } 
    return id
}


const createNewObject = (id, terroristName = "Muhammad — unknown last name", weapons, text )=>{

   let Object = {
    id : checkId(id),
    "terrorist Name" : terroristName,
    "weapons" : weapons,
    "text" : text
   } 
   return Object
}

export{createNewObject}

