const http = require('http');   
const port = 3000;
const fs = require('fs'); 

const findRespown = (url, res)=>{
    
    fs.readFile(url,(err,data)=> {
        
        if(err){
            res.writeHead(404);
            res.write('Error : page not found');
        } else {
            res.write(data);
        }
        res.end();
    })
    
}

http
    .createServer((req,res)=>{
        
        //membuat fungsi validasi
        const url = req.url;
        console.log(url);
        // Menambahkan validasi untuk setiap pagenya
        if(url==='/about'){
            // res.write('<h1>this is about page</h1>');
            // res.end();
            findRespown('./view/about.html',res);
            // fs.readFile('./view/about.html',(err,data)=> {
            //     validasiData(err,data);
            // })
        }else  if(url==='/contact'){
            // res.write('<h1>this is contact page</h1>');
            // res.end();
            findRespown('./view/contact.html',res);
            // fs.readFile('./view/contact.html',(err,data)=> {
            //     validasiData(err,data);
            // })

        }else {
            findRespown('./view/index.html',res);
        // res.write('hello world');
        // res.end();
        }
        // res.writeHead(200, { 
        //     'Content-Type': 'text/html' });
        
    })
    // Memasukan Port yang akan di jalankan
    .listen(port, ()=>{
        console.log('Server listening on port 3000');
    });