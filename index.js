const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to home page')
});

app.get('/hello', (req, res)=>{
    res.send(`Sending hello`)
});

app.post('/hello', (req, res) => {
    res.send(`Handling post req for /hello`);
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`App listening at port ${PORT}`);
    
});