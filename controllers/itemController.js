const Item = require('../models/Item');

// Create Item
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const mongoose = require('mongoose');
// Get Item by ID or Name
exports.getItem = async (req, res) => {
    try {
        const query = mongoose.isValidObjectId(req.params.id)
            ? { _id: req.params.id } // If it's a valid ObjectId, search by ID
            : { name: { $regex: new RegExp(`^${req.params.id}$`, 'i') } }; // Case-insensitive name search

        const item = await Item.findOne(query);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Edit Item
exports.editItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Search Item by Name
exports.searchItem = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: 'Name query parameter is required' });
        }

        const items = await Item.find({ name: { $regex: name, $options: "i" } });

        res.status(200).json({
            message: items.length ? "Items found" : "No items found",
            items,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
