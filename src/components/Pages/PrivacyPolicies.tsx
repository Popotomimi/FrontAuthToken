import { AiOutlineInfoCircle } from "react-icons/ai";

const PrivacyPolicies = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <AiOutlineInfoCircle className="text-blue-600 text-7xl mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">
            Política de Privacidade
          </h1>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Esta aplicação respeita e protege a privacidade dos seus usuários.
          Nenhuma informação pessoal é compartilhada com terceiros sem
          consentimento.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Os dados coletados são utilizados exclusivamente para melhorar a
          experiência do usuário e oferecer funcionalidades essenciais.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Caso deseje solicitar a exclusão dos seus dados, entre em contato
          conosco através do e-mail:{" "}
          <span className="font-semibold">roberto_o7@outlook.com</span>.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Ao utilizar este aplicativo, você concorda com os termos desta
          política.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
