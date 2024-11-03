const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@${process.env.DB_CODE}.mongodb.net/${process.env.DB_}?retryWrites=true&w=majority&appName=${process.env.CLUSTER}
`
mongoose.connect(url)
.then(()=>{
    console.log('connect to MongoDB');
})
.catch((error)=>{
    console.log(error);
})