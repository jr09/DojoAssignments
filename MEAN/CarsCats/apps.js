var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('Client request URL: ', request.url);

    if(request.url == '/'){
        fs.readFile('./views/index.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/cats'){
        fs.readFile('./views/cats.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/images/cats_img1.jpg'){
        fs.readFile('./images/cats_img1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url == '/images/cats_img2.jpg'){
        fs.readFile('./images/cats_img2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/stylesheets/cats_css.css'){
        fs.readFile('./stylesheets/cats_css.css', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/cars'){
        fs.readFile('./views/cars.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/images/car_img1.jpg'){
        fs.readFile('./images/car_img1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/images/car_img2.jpg'){
        fs.readFile('./images/car_img2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/cars/new'){
        fs.readFile('./views/addcar.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url == '/stylesheets/cars_css.css'){
        fs.readFile('./stylesheets/cars_css.css', 'utf-8', function(erros, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('file not found');
    }
});

server.listen(7077);
console.log('Running in localhost on port 7077');
