import { Link } from "react-router-dom";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <Link to='/home'>
            <li>Home</li>
            
          </Link>
          <Link to='/categories'>
            <li>Categories</li> 
          </Link>
          <Link>
            <li>Basket</li>
            
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
