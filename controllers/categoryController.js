const Category = require('../models/Category');

// Create Category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Category by ID or Name
const mongoose = require('mongoose');


exports.getCategory = async (req, res) => {
    try {
        const query = mongoose.isValidObjectId(req.params.id)
            ? { _id: req.params.id } // If it's a valid ObjectId, search by ID
            : { name: { $regex: new RegExp(`^${req.params.id}$`, 'i') } }; // Case-insensitive name search

        const category = await Category.findOne(query);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Edit Category
exports.editCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};