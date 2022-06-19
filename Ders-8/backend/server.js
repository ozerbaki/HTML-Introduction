const  express = require('express');
const cors = require('cors'); //dışarıya açık hale getiriyoruz.

const app = express();

app.use(cors(), express.json()); // middleware
//express.json gelen json datasını nesneye çeviriyor.
//nesneler json'a çeviriliyor, gittiği yerde kullanılmak için nesneye dönüyor.

//Veri
let nextId=4;
let users = [
    {id:1, name:'Jake'},
    {id:2, name:'Alice'},
    {id:3, name:'Bob'}
];

let todos = [
    {id: 1, title:'subject 1'},
    {id: 2, title:'subject 2'},
    {id: 3, title:'subject 3'},
    {id: 4, title:'subject 4'}
];

//Veri yayınlama
app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
});

app.get('/todos', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(todos);
});

//veri eklemek için POST kullanıyoruz
app.post('/users', (req, res) => {
    const newuser = {...req.body, id : nextId};
    users.push(newuser); // veriyi ekleme kısmı, ister veritabınana, ister txt'ye, ister xml, ister jsaon, mongodb, postgresql, mysql...
    nextId++;

    res.status(201);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
});

// Port dinleme
app.listen(3000, ()=>{
    console.log('Express listening on port : 3000');
});