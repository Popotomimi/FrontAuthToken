import { useState, useContext } from "react";
import { Context } from "../../context/UserContext";
import olhosAbertos from "/img/olhos_abertos.jpg";
import olhosFechados from "/img/olhos_fechados.jpg";
import umOlhoAberto from "/img/um_olho_aberto.jpg";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(olhosAbertos);
  const [isFocusing, setIsFocusing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(Context);

  const handleSubmit = async (e) => {
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
          className="w-60 h-60 mx-auto mb-4 rounded-xl"
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
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
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
          className={`w-full py-3 rounded-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}>
          {isLoading ? "Carregando..." : "Entrar"}
        </button>
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
