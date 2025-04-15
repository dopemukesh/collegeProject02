const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Connect to database and start server
connectDB().then(() => {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
