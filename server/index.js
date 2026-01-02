require('dotenv').config();
const express= require('express');
const connectDB= require('./config/db');
const app = express();
connectDB();


app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'));

const PORT =process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






