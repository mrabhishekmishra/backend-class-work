const mongoose= require('mongoose');

const url = `mongodb+srv://${process.env.DB_USER_ID}:${process.env.DB_PASSWORD}@${process.env.DB_CODE}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.CLUSTER}`

mongoose.connect(url)
.then(()=>{
    console.log('databse is sucessfully link to server');
})
.catch((error)=>{
    console.log(error);
})