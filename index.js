const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json('Server up and running');
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
