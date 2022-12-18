const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    const url = req.url
    if(url === '/'){
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Hello World</h1>')
        res.end();
    }

    else if(url === '/about'){
        res.write('Hi! my name is Arnit Gupta')
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end();
    
    }
})

server.listen(8000)