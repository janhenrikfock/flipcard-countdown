import './Footer.css'
import iconFacebook from '../../img/icon-facebook.svg'
import iconInstagram from '../../img/icon-instagram.svg'
import iconPinterest from '../../img/icon-pinterest.svg'

export default function Footer() {
  return (
    <footer>
      <nav>
        <a className="footer__sociallink" href="https://www.facebook.com/">
          <img src={iconFacebook} alt="facebook logo" />
        </a>
        <a className="footer__sociallink" href="https://www.pinterest.de/">
          <img src={iconPinterest} alt="facebook logo" />
        </a>
        <a className="footer__sociallink" href="https://www.instagram.com/">
          <img src={iconInstagram} alt="facebook logo" />
        </a>
      </nav>
    </footer>
  )
}
