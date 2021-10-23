import Github from './Github.png';
import Linkedin from './Linkedin.png';
import './Footer.css';



const Footer = () => {
  return (
    <div className="footer">
      <img src={Github} alt="github" className="footimg" />
      <img src={Linkedin} alt="linkedin" className="footimg"/>
    </div>
  )
}

export default Footer;