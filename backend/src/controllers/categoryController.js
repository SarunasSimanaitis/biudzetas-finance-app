const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const createCategory = async (req, res) => {
  const category = await Category.create({
    name: req.body.name
  });

  res.status(201).json(category);
};

const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  res.json(category);
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory
};