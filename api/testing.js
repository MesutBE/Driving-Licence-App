const app = require('./index.js');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
