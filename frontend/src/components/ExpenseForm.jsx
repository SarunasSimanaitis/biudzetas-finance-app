import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";

function ExpenseForm({ onAddExpense }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: ""
  });

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await onAddExpense({
      ...formData,
      amount: Number(formData.amount)
    });

    setFormData({
      amount: "",
      description: "",
      category: ""
    });
  };

  return (
    <section className="card p-4 mb-4">
      <h2 className="mb-3">Pridėti išlaidą</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Suma
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            className="form-control"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Aprašymas
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Kategorija
          </label>
          <select
            id="category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Pasirink kategoriją</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Išsaugoti
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;