const express = require('express');
const server = express();
server.use(express.json());

// ROUTES
	// GET ROOT
		server.get('/', (req,res) => {
			res.send("Woof Woof! We out the pound!")
		});





// Define our PORT variable
const port = process.env.PORT || 5000; 

// Instruct our server to listen fort connecionts on that port
server.listen(port, ()=> console.log(`\nRunning on port ${port}\n`));

