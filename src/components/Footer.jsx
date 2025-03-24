import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-stone-900 mt-11 text-white font-bold pt-14 pb-14">
      <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <p className="mb-2">Veja mais projetos no meu Linkedin:</p>
          <Link to="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/">
            <BsLinkedin className="text-5xl m-auto hover:scale-110 linkedin" />
          </Link>
        </div>
        <div className="text-center">
          <p className="mb-2">Veja meus repositórios:</p>
          <Link to="https://github.com/Popotomimi">
            <BsGithub className="text-5xl m-auto hover:scale-110 github" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
