import express from 'express';
const cors = require('cors');

const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
