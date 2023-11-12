import excQuery from "../Config/Connection.js";



const addRest = async (req,res)=>{
    try{
        
       const Restdata=req.body
       console.log(Restdata,"fghjkl");
       const { name, address,contact,description,image} = req.body;
      
       const insertQuery = `INSERT INTO restaurant (name,address,contact,description,image) VALUES (?, ?, ?, ?, ?)`;
      
       const values=[ name, address,contact,description,image]
     
       excQuery(insertQuery,values).then((result)=>{
        console.log(result);
        res.status(200).json({ message: "success", data: result });
       })
    }
    catch(err){
       console.log(err);
    }
}

const getRest=async(req,res)=>{
    try{
        const getQuery=`SELECT * FROM restaurant`
        const values=[]
        excQuery(getQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success", data: result });
        })
    }
    catch(err){
       console.log(err);
    }
}
const getSingle=async(req,res)=>{
    try{
         const id=req.params.restId
        console.log("jjjjjjjjj",id);
        const getQuery=`SELECT * FROM restaurant WHERE id=?`
        const values=[id]
        excQuery(getQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success", data: result });
        })
    }
    catch(err){
        console.log(err);
     }
}
const deleteRest=async(req,res)=>{
    try{
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        const {id}=req.body
       console.log("ooooooooooooooooooooooo");
        const deleteQuery=`DELETE FROM restaurant WHERE id=?`
        const values=[id]
        excQuery(deleteQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success" });
        })
        
    }
    catch(err){
        console.log(err);
     }
}
const editRest = async (req,res)=>{
    try{
       
    //    const taskdata=req.body
       const {id, name, address,contact,description,image} = req.body;
      
      
       const insertQuery = `UPDATE restaurant SET name = ?, address = ?, contact = ?, description = ?, image = ? WHERE id = ?`;
      
       const values = [name, address,contact,description,image, id];
       
       excQuery(insertQuery,values).then((result)=>{
        console.log(result);
        res.status(200).json({ message: "success", data: result });
       })
    }
    catch(err){
        console.log(err);
     }
}
export default {
    addRest,
    getRest,
    getSingle,
    deleteRest,
    editRest,
    
}
