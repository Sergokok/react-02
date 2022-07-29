import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="Лого проекта Место Россия" className="header__logo" />
      </a>
    </header>
  );
}