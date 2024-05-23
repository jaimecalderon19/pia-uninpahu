const mongoose =require('mongoose')
mongodb_uri = 'mongodb://localhost/myproject'
mongoose.connect(mongodb_uri,{
    
})
.then(db => console.log('database connected'))
.catch(err=> console.log(err));