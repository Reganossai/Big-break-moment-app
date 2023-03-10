import react,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {

const [nav,setNav]=useState(false);
const handleNav = () =>{
setNav(!nav);
  }

nav?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  
return(
<nav className="navbar">
<Link to="/"><img src="logo.png" alt="logo" /></Link>
<ul id="navbarSupportedContent">
          <li className="nav-link" aria-current="page"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link"><Link to="/news">News</Link></li>
          <li className="nav-link"><Link to="/contact">Contact</Link></li>
  </ul>
  {nav?
<ul id="navbarSupportedContentMobile">
           <li className="nav-link" aria-current="page"><Link to="/">Home</Link></li>
          <hr/>
          <li className="nav-link"><Link to="/about">About</Link></li>
          <hr/>
          <li className="nav-link"><Link to="/news">News</Link></li>
          <hr/>
          <li className="nav-link"><Link to="/contact">Contact</Link></li>
  </ul>:null}

<div onClick={handleNav} className="zaracho">
{nav ? <FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars}/>}
      </div>

</nav>
  );
}
export default Navbar;
