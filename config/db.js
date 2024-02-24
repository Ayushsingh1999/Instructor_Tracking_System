const mongoose = require('mongoose')
mongoose.connect(process.env.mongourl).then(()=>{
    console.log("Database Connected :)")
}).catch((err)=>{
console.log("here is the problem in error", err)
})
