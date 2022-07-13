const http = require('http');   
const port = 3000;

http
    .createServer((req,res)=>{
        const url = req.url;
        console.log(url);
        // Menambahkan validasi untuk setiap pagenya
        if(url==='/about'){
            res.write('<h1>this is about page</h1>');
            res.end();
        }else  if(url==='/contact'){
            res.write('<h1>this is contact page</h1>');
            res.end();
        }else {
            res.write('hello world');
        res.end();
        }
        // res.writeHead(200, { 
        //     'Content-Type': 'text/html' });
        
    })
    // Memasukan Port yang akan di jalankan
    .listen(port, ()=>{
        console.log('Server listening on port 3000');
    });