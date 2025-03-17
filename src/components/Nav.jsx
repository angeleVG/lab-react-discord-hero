import logo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';

export function Nav() {
  return (
    <nav>
      <img src={logo} alt="discord logo" className="discord-logo" />
      <img src={menuIcon} alt="menu icon" className="menu-icon" />
    </nav>
  );
}
