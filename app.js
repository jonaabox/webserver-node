require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;




// Handlebar 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido static 
app.use(express.static('public'));


app.get('/', function (req, res) { // esto permite al usuario identificar que no hay ruta para ese URL
    res.render('home',{
        nombre: 'Jonathan Bonilla',
        titulo: 'Travel',
        subTitulo: 'Travel whit me'

    });  // aca vemos que enviamos un sendFile, para enviar un archivo dentro del mismo metodo ingresamos __dirname (nombre de directorio) + (concatenamos) el nombre del archivo HTML
   
});


app.get('/generic', function (req, res) { // esto permite al usuario identificar que no hay ruta para ese URL
    res.render('generic',{
        nombre: 'Jonathan Bonilla',
        titulo: 'Travel',
        subTitulo: 'Travel whit me'

    })          // aca vemos que enviamos un sendFile, para enviar un archivo dentro del mismo metodo ingresamos __dirname (nombre de directorio) + (concatenamos) el nombre del archivo HTML
});

app.get('/elements', function (req, res) { // esto permite al usuario identificar que no hay ruta para ese URL
    res.render('elements',{
        nombre: 'Jonathan Bonilla',
        titulo: 'Travel',
        subTitulo: 'Travel whit me'

    })
});

app.get('*', function (req, res) { // esto permite al usuario identificar que no hay ruta para ese URL
    res.sendFile(__dirname + '/public/404.html'); // aca vemos que enviamos un sendFile, para enviar un archivo dentro del mismo metodo ingresamos __dirname (nombre de directorio) + (concatenamos) el nombre del archivo HTML
});

app.listen(port,() =>{
    console.log(`Escuchando puerto ${port}`);
})












