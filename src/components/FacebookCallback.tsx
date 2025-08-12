import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function FacebookCallback() {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const name = query.get("name");
    const id = query.get("id");
    const email = query.get("email");

    if (token && name && id && email) {
      authUser({ token, name, id, email });
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Entrando com Facebook... 🔄</p>;
}
