// Hooks
import { useState } from "react";

// IMG
import olhosAbertos from "/img/olhos_abertos.jpg";
import olhosFechados from "/img/olhos_fechados.jpg";
import umOlhoAberto from "/img/um_olho_aberto.jpg";

// Toast
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(olhosAbertos);
  const [isFocusing, setIsFocusing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email === "" || !password || password === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    toast.success(`Bem-vindo, ${email}!`);
    setEmail("");
    setPassword("");
  };

  const handlePasswordFocus = () => {
    setIsFocusing(true);
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
        <input
          type="submit"
          value="Entrar"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 cursor-pointer"
        />
        <div className="text-center text-gray-500 my-4 font-semibold">ou</div>
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
