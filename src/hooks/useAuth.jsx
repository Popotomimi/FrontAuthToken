import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
});

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  async function register(userData) {
    try {
      const data = await api
        .post("/users/register", userData)
        .then((response) => {
          return response.data;
        });
      await authUser(data);
      toast.success("Cadastro Realizado com Sucesso!");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro desconhecido. Tente novamente mais tarde.");
      }
    }
  }

  async function login(userData) {
    try {
      const data = await api.post("/users/login", userData).then((response) => {
        return response.data;
      });
      await authUser(data);
      toast.success(`Bem-vindo(a)!`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    const userData = {
      _id: data.id,
      name: data.name,
      email: data.email,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/dashboard");
  }

  function logout() {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.defaults.headers.Authorization = undefined;

    toast.warn("Volte sempre!");

    navigate("/");
  }

  return { authenticated, register, logout, login, user, setUser };
}
