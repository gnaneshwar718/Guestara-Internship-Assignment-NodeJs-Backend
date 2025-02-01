const SubCategory = require('../models/SubCategory');

// Create Sub Category
exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Sub Categories
exports.getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const mongoose = require('mongoose');
// Get Sub Category by ID or Name
exports.getSubCategory = async (req, res) => {
    try {
        const query = mongoose.isValidObjectId(req.params.id)
            ? { _id: req.params.id } // If it's a valid ObjectId, search by ID
            : { name: { $regex: new RegExp(`^${req.params.id}$`, 'i') } }; // Case-insensitive name search

        const subCategory = await SubCategory.findOne(query);

        if (!subCategory) {
            return res.status(404).json({ error: 'Sub Category not found' });
        }
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Edit Sub Category
exports.editSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) {
            return res.status(404).json({ error: 'Sub Category not found' });
        }
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};