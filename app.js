const express = require('express');
const app = express();
const catsRoutes = require('./routes/cats');
const ExpressError = require('./expressError');

app.use(express.json());
app.use('/cats', catsRoutes);

app.use((req, res, next)=>{
    throw new ExpressError("Not found", 404);
})

app.use((err, req, res, next)=>{
    let status = err.status || 500;
    let msg = err.msg || "this is an error";

    return res.json({
        error:{
            msg: msg,
            status: status
        }
    })
})



module.exports = app;