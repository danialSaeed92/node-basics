const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


const dbUri = ''//YOUR MONGO CONNECTION URI
mongoose.set("strictQuery",false);
mongoose.connect(dbUri)
.then((result)=>{app.listen(9000);})
.catch((err)=>{
    console.log(err);
});

// register view engine
app.set('view engine','ejs');

// static files middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get('/',(req,res)=>{
 res.redirect('/blogs');
})

app.get('/about',(req,res)=>{
   res.render('about',{title:'About'});
})


// blog routes


app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})