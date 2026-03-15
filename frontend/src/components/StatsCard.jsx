function StatsCard({ stats }) {
  return (
    <section className="card p-4">
      <h2 className="mb-3">Statistika</h2>

      <p>
        <strong>Bendra suma:</strong> {stats.total || 0} €
      </p>

      {stats.categories?.length > 0 ? (
        <ul className="list-group">
          {stats.categories.map((item) => (
            <li
              key={item.name}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item.name}</span>
              <span>{item.total} €</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Statistikos nėra.</p>
      )}
    </section>
  );
}

export default StatsCard;