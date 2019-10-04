const server = require('./api/server.js');

const port = 5000;

server.listen(port, () => {
	console.log(`Server is currently listening on port: ${port}`);
});
