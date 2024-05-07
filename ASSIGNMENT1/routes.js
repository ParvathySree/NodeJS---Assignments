const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>User App - Assignment 1</title></head>')
        res.write('<body><h1>Welcome to User App!</h1><form  action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user)
        })
        res.statusCode = 302;
        res.setHeader('Location','/users')
        return res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>User App</title></head>')
        res.write('<body><ul><li>Joe Freddy</li><li>Reghu Raj</li><li>Rishi Kumar</li><li>Isha Fathima</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
}

module.exports = requestHandler;