// const mongoose = require('mongoose');
// const { boolean } = require('webidl-conversions');

// const parentschema = new mongoose.Schema({
//     name:{
//         type:String,
//         require: true
//     },
//     description:String,
//     status:{
//         type:boolean,
//         default:true
//     },
//     created_date : Date,
//     update_date :{
//         type: Date,
//         default : Date.now
//     }

// })
// parentschema.pre('save',function(){
//     this.created_date = new Date();
// });
// parentschema,pre('insertOne', function(){
//     this.update_date = new Date()
// }); 

// const Parentmoduel = mongoose.model('parent_category',parentschema);

// module.exports = {
//     // Parentmoduel 
// }