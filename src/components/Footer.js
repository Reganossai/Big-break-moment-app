import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'; 

const Footer = () =>{
	return(
<div className="sponsors-footerlinks-logo">

<div className="bbm-logo">
<img src="logo.png" alt="bbm-logo"/>
<h3><FontAwesomeIcon icon={faCopyright} className="copyright"/> All Rights Reserved</h3>
</div>

<div className="sponsors">
<h1> PARTNERS & SPONSORS </h1>
<h3>..Just to name a few....</h3>
<img src="AIOG.png" alt="aiog"/>
<img src="BossLadyLaw.png" alt="bosslady"/>
<img src="Skyewise.png" alt="skyewise"/>
</div>




<div className="footer-links">
<Link to="/about">About</Link>
<Link to="/about">News</Link>
<Link to="/about">Contact</Link>
</div>


</div>
	);
}

export default Footer;