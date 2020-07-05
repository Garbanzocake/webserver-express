const http = require('http');


http.createServer((request, resolve) => {


        resolve.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Daniel',
            edad: 23,
            ulr: request.url

        }

        resolve.write(JSON.stringify(salida));
        // resolve.write('Hola mundo');
        resolve.end();


    })
    .listen(8080);


console.log('Escuchando el puerto 8080');