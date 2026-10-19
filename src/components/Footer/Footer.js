import {logo} from '../../assets/images';
import '../Footer/Footer.css';
const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#F8F9FA" }}>
            <div className='container border-top mt-5' style={{ backgroundColor: "#F8F9FA" }}>
                <div className='row mt-5'>
                    <div className='col justify-content-center align-items-center text-center mt-5'>
                        <img src={logo} alt='tradeflow' style={{ width: "50%" }} />
                        <p className='mt-3 text-sm' style={{ fontSize: "12.8px", color: "#666" }}>&copy; 2026 Livspace.com All Rights Reserved.</p>
                    </div>
                    <div className='col' style={{ lineHeight: "2" }}>
                        <p className='fw-semibold' style={{ fontSize: "18px" }}>Company</p>
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>About</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Products</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Pricing</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Trends</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Careers</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Contact us</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Leading Partners</a>
                    </div>
                    <div className='col' style={{ lineHeight: "2" }}>
                        <p className='fw-semibold' style={{ fontSize: "18px" }}>Support</p>
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Bangalore</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Mumbai</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Pune</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Dehli</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Hyderabad</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Interior Designer in Chennai</a>
                    </div>
                    <div className='col' style={{ lineHeight: "2" }}>
                        <p className='fw-semibold' style={{ fontSize: "18px" }}>Account</p>
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Get In Touch With Us</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Commercial Interiors</a>
                        <br />
                        <a href='/livspace' style={{ textDecoration: 'none', color: "#666" }}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;