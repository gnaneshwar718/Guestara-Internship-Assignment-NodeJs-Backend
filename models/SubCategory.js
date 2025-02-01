const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, default: function () { return this.parentCategory.taxApplicability; } },
    tax: { type: Number, default: function () { return this.parentCategory.tax; } },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('SubCategory', subCategorySchema);