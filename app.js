const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));