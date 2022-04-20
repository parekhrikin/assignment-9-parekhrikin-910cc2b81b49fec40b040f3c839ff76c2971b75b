import app from './app.js';

// The app.listen() function is used to bind and listen the connections on the specified host and port. This method is identical to Node’s http.Server.listen() method.
const port = 3001;
app.listen(port, () => {
    console.log(`Server running at ${port}.`)
});