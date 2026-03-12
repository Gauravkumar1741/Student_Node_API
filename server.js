const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 5555;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// DB Connection
connectDB();

// Routes
app.use('/', studentRoutes);

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});