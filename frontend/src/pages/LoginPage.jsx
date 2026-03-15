import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { saveToken } from "../utils/auth";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await loginUser(formData);

    if (data.token) {
      saveToken(data.token);
      navigate("/dashboard");
    } else {
      alert(data.message || "Prisijungti nepavyko");
    }
  };

  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1 className="mb-4">Prisijungimas</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  El. paštas
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Slaptažodis
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Prisijungti
              </button>
            </form>

            <p className="mt-3 mb-0">
              Neturi paskyros? <Link to="/register">Registruotis</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
