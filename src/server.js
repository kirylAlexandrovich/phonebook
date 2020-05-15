const server = require('./app');

const PORT = 7181;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
