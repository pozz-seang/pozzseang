var express = require('express');
var favicon = require('serve-favicon');
var fs = require('fs')
var path = require('path');

// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public/a.html'));
//     })
//     .get('/fuck', (req, res) => {
//         res.send(req.url)
//     })
//     .get(/.*/, (req, res) => {
//         res.send('asfasfasdfa')
//     })
//     .listen(process.env.PORT || 8080);




    //----------------------------------

// http.createServer(
//     function (request, respond){

//         respond.writeHead(200, {'Content-Type': 'text/html'});

//         if(request.url === '/fuck'){
//             respond.write("FUCK YOU");
//         }else{
//             respond.write(khode.greeting());
//         }


//         respond.end;
//     }
// ).listen(8080)

var text = "";
for (let i = 0; i <= 2003; i++) {
    text += 'I LOVE YOU ';
}


express()
    .use(express.static('public'))
    .set('views', './views')
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        res.render('index', {text: text})
    })
    .listen(process.env.PORT || 8080);



