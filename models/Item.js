const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true },
    tax: { type: Number, required: function () { return this.taxApplicability; } },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
});

module.exports = mongoose.model('Item', itemSchema);