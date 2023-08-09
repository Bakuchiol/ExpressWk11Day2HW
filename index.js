// express
const express = require('express');
const app = express();

// fortunes
const fortune = require('./models/fortunes')

// get random number
const randomNum = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

console.log("work?", fortune[randomNum(0, fortune.length)])

// view
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views')
.createEngine())

// ---------------------------------------------------------------------------------------
// routes
// greeting
app.get('/', (req,res) => {
    res.send("<h1>What's up you!</h1>")
})

app.get('/greeting/:name', (req,res)=>{
    res.send(`<h1>Hello ${req.params.name}! It's nice to see you</h1>`)
})

// tip calculator
app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send(`<h1>Tip: ${(req.params.total * (req.params.tipPercentage / 100))}</h1>`)
})

// magic 8 ball
// try
app.get('/magic/', (req,res) => {
    res.render("Magic")
})

app.get('/magic/:question', (req,res)=>{
    // res.send(`<h1>
    // Ask a question then click to see your fortune
    // ${req.params.question}
    // </h1>
    // <p>${fortune[randomNum(0, fortune.length)]}</p>
    // `)
    res.send(`<h1>${fortune[randomNum(0, fortune.length)]}</h1>`)
});


// ---------------------------------------------------------------------------------------
// server
app.listen('3000', (req,res)=>{
    console.log('Server at port 3000')
})