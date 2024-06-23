const server = require('./server');
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

