import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import './Foot.css'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>QuickMentors</h3>
                    <p>
                        <br />
                        Bihar, India <br /><br />
                        <strong>Phone:</strong> +91 9608359477<br />
                        <strong>Email:</strong> edu@platform.com<br />
                    </p>
                    <div className="social-links">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#RPRODUCTS">Home</a></li>
                        <li><a href="#RPRODUCTS">Notes</a></li>
                        <li><a href="#RPRODUCTS">PYQs</a></li>
                        <li><a href="#RPRODUCTS">Exercises</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">Free Video Lessons</a></li>
                        <li><a href="#RPRODUCTS">Practice Questions</a></li>
                        <li><a href="#RPRODUCTS">Mock Tests</a></li>
                        <li><a href="#RPRODUCTS">Doubt Solving</a></li>
                        <li><a href="#RPRODUCTS">CBSE Resources</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Our Newsletter</h4>
                    <p>Subscribe for the latest updates and learning material!</p>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 <strong>QuickMentors</strong>. All Rights Reserved</p>
                <p>Designed by <a href="https://first1-portfolio-xuyw-nishant-keshris-projects.vercel.app/">Nishant</a></p>
            </div>
        </footer>
    );
}

