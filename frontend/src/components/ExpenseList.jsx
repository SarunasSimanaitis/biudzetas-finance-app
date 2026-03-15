function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <section className="card p-4 mb-4">
      <h2 className="mb-3">Išlaidų sąrašas</h2>

      {expenses.length === 0 ? (
        <p>Išlaidų nėra.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Suma</th>
              <th>Aprašymas</th>
              <th>Kategorija</th>
              <th>Veiksmas</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.amount} €</td>
                <td>{expense.description}</td>
                <td>{expense.category?.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteExpense(expense._id)}
                  >
                    Ištrinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default ExpenseList;