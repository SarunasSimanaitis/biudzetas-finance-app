const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {
  const expenses = await Expense.find()
    .populate("category", "name")
    .sort({ createdAt: -1 });

  res.json(expenses);
};

const createExpense = async (req, res) => {
  const { amount, description, category } = req.body;

  const expense = await Expense.create({
    amount,
    description,
    category
  });

  res.status(201).json(expense);
};

const deleteExpense = async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);
  res.json(expense);
};

const getExpenseStats = async (req, res) => {
  const expenses = await Expense.find().populate("category", "name");

  const stats = {};
  let total = 0;

  expenses.forEach((expense) => {
    const categoryName = expense.category?.name || "Other";

    if (!stats[categoryName]) {
      stats[categoryName] = 0;
    }

    stats[categoryName] += expense.amount;
    total += expense.amount;
  });

  const categories = Object.keys(stats).map((name) => ({
    name,
    total: stats[name]
  }));

  res.json({
    total,
    categories
  });
};

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  getExpenseStats
};

