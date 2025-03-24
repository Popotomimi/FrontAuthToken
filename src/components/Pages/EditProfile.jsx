import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL}/users/${id}`
        );
        if (response.data) {
          setFormData({
            name: response.data.name || "",
            email: response.data.email || "",
          });
        } else {
          throw new Error("Usuário não encontrado");
        }
      } catch (err) {
        console.error("Erro ao carregar os dados do usuário:", err);
        setError("Erro ao buscar os dados do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${import.meta.env.VITE_URL}/users/${id}`, formData);
      alert("Usuário atualizado com sucesso!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Erro ao atualizar o usuário:", err);
      setError("Erro ao salvar as alterações.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-8">Editar Usuário</h1>

      {loading ? (
        <p className="text-center text-gray-700">Carregando dados...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nome:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Salvar
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            onClick={() => navigate("/dashboard")}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
