const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./App');

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
