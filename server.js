const path = require('path');
const express = require('express');
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
app.use('/api/users', require('./routes/userRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, './frontend/build/index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Please set to production...');
  });
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
