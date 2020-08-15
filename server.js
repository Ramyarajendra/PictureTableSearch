const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path')

connectDB()

app.use(express.json({extended: false}))

app.use('/api/image', require('./routes/images'))

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('qnopy-assign/build'))

    app.use('*' , (req, res) => res.sendFile(path.resolve(__dirname, 'qnopy-assign', 'build' , 'index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`));