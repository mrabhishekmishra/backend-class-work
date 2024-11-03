const { Parentmoduel } = require("../../moduels/parentmoduels");

const parentControl = async (req,res)=>{
    try {
       
        // const response = await data.save();
        const response = req.body;
        console.log(response)
        res.status(200).json({massege: 'sucess parent category' });
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({massege: 'internal server error'})
    }
}

const colorControl = async (req,res)=>{
    try {
       
        // const response = await data.save();
        const response = req.body;
        console.log(response)
        res.status(200).json({massege: 'sucess color category' });
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({massege: 'internal server error'})
    }
}

const sizeControl = async (req,res)=>{
    try {
       
        // const response = await data.save();
        const response = req.body;
        console.log(response)
        res.status(200).json({massege: 'sucess size category' });
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({massege: 'internal server error'})
    }
}

module.exports = {
    parentControl,
    sizeControl,
    colorControl
}