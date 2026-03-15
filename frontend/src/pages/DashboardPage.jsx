import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import StatsCard from "../components/StatsCard";
import {
  getExpenses,
  createExpense,
  deleteExpense,
  getExpenseStats,
} from "../api/expenseApi";
import { Link } from "react-router-dom";

function DashboardPage() {
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState({ total: 0, categories: [] });

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const loadStats = async () => {
    const data = await getExpenseStats();
    setStats(data);
  };

  useEffect(() => {
    loadExpenses();
    loadStats();
  }, []);

  const handleAddExpense = async (expenseData) => {
    await createExpense(expenseData);
    await loadExpenses();
    await loadStats();
  };

  const handleDeleteExpense = async (id) => {
    await deleteExpense(id);
    await loadExpenses();
    await loadStats();
  };

  return (
    <main className="container mt-4">
      <header className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h1>Finansų suvestinė</h1>
          <p>Čia gali valdyti savo išlaidas ir matyti statistiką.</p>
        </div>

        <Link to="/categories" className="btn btn-outline-secondary">
          Kategorijos
        </Link>
      </header>

      <div className="row">
        <div className="col-md-7">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>

        <div className="col-md-5">
          <StatsCard stats={stats} />
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
