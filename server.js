const http = require("http");
const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://ahadjon697:Qr7MPyQXYNVHcD4I@cluster0.xclq4.mongodb.net/Reja";
mongodb.connect(connectionString, {useNewUrlParser: true,
     useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
         module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
                console.log(`The server is running successfully on port:${PORT}`);
                console.log(`The server is running successfully on http://localhost:${PORT}`);
        }); 
    }
});
//15'40
