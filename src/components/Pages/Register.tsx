// Hooks
import { useContext, useState } from "react";

// Toast
import { toast } from "react-toastify";

// Context
import { Context } from "../../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useContext(Context);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!name || !email || !password || !confirmPassword) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "A senha precisa ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não correspondem!");
      return;
    }

    setLoading(true);

    const user = {
      name: name,
      email: email,
      password: password,
    };

    try {
      await register(user);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao registrar!");
    }

    setLoading(false);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="m-4 text-center">
          <span className="text-xs text-gray-500 italic">
            A senha deve conter pelo menos 8 caracteres, incluindo uma letra
            maiúscula, um número e um caractere especial.
          </span>
        </div>
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white py-3 rounded-lg`}>
          {loading ? "Carregando..." : "Registrar-se"}
        </button>
        <div className="text-center text-gray-500 my-4 italic font-semibold">
          ou
        </div>
        <a
          href="/login"
          className="block text-center text-blue-500 font-bold hover:underline">
          Fazer login
        </a>
      </form>
    </div>
  );
};

export default Register;
