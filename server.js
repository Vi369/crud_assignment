const app = require('./app.js');
const PORT = process.env.PORT;


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})