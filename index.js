const express = require('express')

const app = express();

// Express js use() parametri

// app.use((req,res,next)=>{
//     console.log("Birinchi so'rov yuborilmoqda...")
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Ikkinchi so'rov ishga tushdi...")
// })

// Express js Routing 

// app.use("/about", (req,res,next)=>{
//     res.end("Welcome to About page!")
// })

// app.use("/", (req,res,next)=>{
//     res.end("Welcome to Home page!")
// })

// Express js Error 

// app.use((req,res,next)=>{
//     res.status(404).end("Sahifa topilmadi!")
// })


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server ${PORT} da ishlamoqda...`)
})