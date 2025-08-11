// React
import { useState, useContext } from "react";
import { Context } from "../../context/UserContext";

// React Toastify
import { toast } from "react-toastify";

// React Router
import { Link } from "react-router-dom";

// IMG
import olhosAbertos from "/img/olhos_abertos.jpg";
import olhosFechados from "/img/olhos_fechados.jpg";
import umOlhoAberto from "/img/um_olho_aberto.jpg";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(olhosAbertos);
  const [isFocusing, setIsFocusing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(Context);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || email === "" || !password || password === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    const user = {
      email: email,
      password: password,
    };

    try {
      await login(user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordFocus = () => {
    setIsFocusing(true);

    if (image === umOlhoAberto) {
      return;
    }
    setImage(olhosFechados);
  };

  const handlePasswordBlur = () => {
    setIsFocusing(false);

    if (!showPassword) {
      setImage(olhosAbertos);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
    setImage((prevState) =>
      prevState === olhosFechados ? umOlhoAberto : olhosFechados
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <img
          src={image}
          alt={
            image === olhosAbertos
              ? "Olhos abertos"
              : image === olhosFechados
              ? "Olhos fechados"
              : "Um olho aberto"
          }
          className={`w-60 h-60 mx-auto mb-4 rounded-xl ${
            isFocusing ? "ring-4" : ""
          }`}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              setIsFocusing(true);
              handlePasswordFocus();
            }}
            onBlur={() => {
              setIsFocusing(false);
              handlePasswordBlur();
            }}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-4 text-blue-500 hover:text-blue-700">
            {showPassword ? "Ocultar senha" : "Mostrar senha"}
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 rounded-lg mb-5 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}>
          {isLoading ? "Carregando..." : "Entrar"}
        </button>

        <p className="text-center text-gray-600 mb-4 font-medium">
          Você também pode entrar com uma conta social:
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Link to="https://authjwt-aqoe.onrender.com/auth/google">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded-lg shadow-md transition duration-200">
              <FcGoogle className="w-5 h-5" />
              <span>Google</span>
            </button>
          </Link>

          <Link to="https://authjwt-aqoe.onrender.com/auth/github">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md transition duration-200">
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </button>
          </Link>
        </div>

        <div className="text-center text-gray-500 my-4 font-semibold italic">
          ou
        </div>
        <a
          href="/register"
          className="block text-center text-blue-500 font-bold hover:underline">
          Registrar-se
        </a>
      </form>
    </div>
  );
};

export default Login;
