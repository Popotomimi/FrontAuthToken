const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-center flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 my-4">
        Bem-vindo ao Meu Projeto!
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-xl my-4">
        Este é um sistema completo com autenticação. Aqui você pode criar sua
        conta, fazer login e logout. Explore o site e descubra o que ele pode
        oferecer!
      </p>
      <p className="text-lg text-gray-600 text-center max-w-xl my-4">
        Utilizamos o <span className="font-semibold">jsonwebtoken</span> e{" "}
        <span className="font-semibold">bcrypt</span> para garantir a segurança
        e confiabilidade da autenticação. O backend foi construído com uma
        <span className="font-semibold"> API REST</span> robusta usando o
        framework
        <span className="font-semibold"> NestJS</span>, e os dados são
        armazenados em um banco de dados
        <span className="font-semibold"> MongoDB</span>, hospedado na nuvem
        através da
        <span className="font-semibold"> AWS</span>.
      </p>

      <div className="flex space-x-4 my-6">
        <a
          href="/register"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Registrar-se
        </a>
        <a
          href="/login"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Fazer Login
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Autenticação Segura
          </h3>
          <p className="text-gray-600">
            Proteção com <span className="font-semibold">jsonwebtoken</span>{" "}
            para autenticação confiável.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">API REST</h3>
          <p className="text-gray-600">
            Backend construído com <span className="font-semibold">NestJS</span>{" "}
            para desempenho e escalabilidade.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Dados na Nuvem
          </h3>
          <p className="text-gray-600">
            Banco de dados <span className="font-semibold">MongoDB</span> na
            nuvem pela <span className="font-semibold">AWS</span>.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Criptografia
          </h3>
          <p className="text-gray-600">
            Criptografica de senha com{" "}
            <span className="font-semibold">Bcrypt</span>.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            TailWind CSS
          </h3>
          <p className="text-gray-600">
            Estilização completa com
            <span className="font-semibold">Tailwind</span>.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">React</h3>
          <p className="text-gray-600">
            Frontend utlizando a melhores praticas com
            <span className="font-semibold">React.js</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
