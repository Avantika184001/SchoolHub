const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(express.static('_images'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine' ,  'pug')
app.get('/', function (req , res ) {
  
   
   res.sendFile('form.html', { root: __dirname})});
   var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: '_form'
    })
    
    connection.connect(function(err){
      if (err) throw err;
      console.log('CONNECTED')
    })

  


app.post('/submit', function (req, res) {
    var sql ="insert into _db values(null ,'"+ req.body.username +"' , '"+ req.body.age +"' , '"+ req.body.tel +"' , '"+ req.body.email +"' ,'"+ req.body.class +"' , '"+ req.body.code +"' , '"+ req.body.school +"')";
   connection.query(sql, function (err) {
    if (err) throw err;
    res.render('index', { title: 'DATA SAVED',
message: 'DATA SAVED SUCCESSFULLY'})
    
   })

 // connection.end();
    })

app.listen(port, () => console.log(`Web app listening on port ${port}!`))