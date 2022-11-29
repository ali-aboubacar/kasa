import Logo from '../../assets/LOGO.svg'
import { Link } from 'react-router-dom'

function Header() {
  
  return (
        <header >
            <Link to="/displayPost">
            <img src={Logo} alt='une description tres indispansable '/>
            </Link>
            <ul>
                <Link to="/displayPost">Accueil</Link>
                <Link to="/About">A propos</Link>
            </ul>
        </header>
  );
}

export default Header;
