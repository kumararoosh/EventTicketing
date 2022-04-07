const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const port = 3000

let users = {
    23: {firstName: "Aroosh", lastName: "Kumar", checkedIn: "0"}
}

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    // const book = req.body
    console.log("Added get")
    console.log(req.query.id)
    // books.push(book)
    

    res.send(users[req.query.id])
    users[req.query.id].checkedIn = "1"
});


app.listen(port, () => console.log(`app listening on ${port}`))
