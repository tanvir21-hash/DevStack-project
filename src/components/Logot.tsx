import logoText from "../assets/logo-text.png";

const Logo = () => {
  return (
    <a href="#home" className="flex items-center">
      <img src={logoText} alt="Dev Stack" className="h-8 w-auto sm:h-9" />
    </a>
  );
};

export default Logo;
