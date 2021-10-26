import { Link } from 'react-router-dom';
import Github from './Github.png';
import Linkedin from './Linkedin.png';
import './Footer.css';



const Footer = () => {
  return (
    <div className="footer">
      <img src={Github} alt="github" className="footimg" />
      <img src={Linkedin} alt="linkedin" className="footimg" />
      <h6>Created By: ABHood - 2021</h6>
      <Link>
      <p>Egg?</p>
      </Link>
    </div>
  )
}

export default Footer;