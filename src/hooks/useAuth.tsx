import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
});

type User = {
  _id: string;
  name: string;
  email: string;
} | null;

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User>(null);
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

  async function register(userData: object) {
    try {
      const data = await api
        .post("/users/register", userData)
        .then((response) => response.data);
      await authUser(data);
      toast.success("Cadastro Realizado com Sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Erro desconhecido.");
      } else {
        toast.error("Erro desconhecido. Tente novamente mais tarde.");
      }
    }
  }

  async function login(userData: object) {
    try {
      const data = await api
        .post("/users/login", userData)
        .then((response) => response.data);
      await authUser(data);
      toast.success(`Bem-vindo(a)!`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Erro ao realizar o login."
        );
      } else {
        toast.error("Erro desconhecido. Tente novamente mais tarde.");
      }
    }
  }

  async function authUser(data: {
    id?: string;
    _id?: string;
    name: string;
    email: string;
    token: string;
  }) {
    const resolvedId = data.id || data._id;

    if (!resolvedId) {
      toast.error("ID do usuário ausente. Não foi possível autenticar.");
      return;
    }

    const userData = {
      _id: resolvedId,
      name: data.name,
      email: data.email,
    };

    setAuthenticated(true);
    setUser(userData);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  }

  function logout() {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.defaults.headers.Authorization = null;

    toast.warn("Volte sempre!");
    navigate("/");
  }

  return { authenticated, register, logout, login, user, setUser, authUser };
}
