import { Link } from 'react-router-dom';
import Github from './Github.png';
import Linkedin from './Linkedin.png';
import './Footer.css';



const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/abhood1418">
      <img src={Github} alt="github" className="footimg" />
      </a>
      <a href="https://www.linkedin.com/in/andrew-hood-29408b165/">
      <img src={Linkedin} alt="linkedin" className="footimg" />
      </a>
      <h6>Created By: ABHood - 2021</h6>
      <Link to="/egg">
      <p>Egg?</p>
      </Link>
    </div>
  )
}

export default Footer;