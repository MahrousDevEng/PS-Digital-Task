// Main Imports
import Image from "next/image";
// Styles
import styles from "../../styles/components/Footer.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.options}>
          <section>
            <h5>DISCOVER TEXAS</h5>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">HALAL</a>
              </li>
            </ul>
          </section>
          <section>
            <h5>WORK WITH US</h5>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Franchising</a>
              </li>
            </ul>
          </section>
          <section>
            <h5>TEXAS WAY</h5>
            <ul>
              <li>
                <a href="#">Birthday Package</a>
              </li>
            </ul>
          </section>
          <section>
            <h5>LET&apos;S TALK</h5>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </section>
          <section>
            <h5>
              TEXAS CHICKEN | <span>UAE</span>
            </h5>
          </section>
        </div>
        <div className={styles.contact}>
          <section className={styles.join}>
            <p>JOIN OUR COMMUNITY</p>
          </section>
          <section className={styles.poster}>
            <a href="#" className="smooth">
              <Image src="/halal.webp" alt="Halal" width={150} height={58} />
            </a>
            <a href="#" className="smooth">
              <Image src="/del.webp" alt="Delivery" width={150} height={58} />
            </a>
          </section>
          <section className={styles["contact-list"]}>
            <h5>CONNECT WITH</h5>
            <ul>
              <li>
                <a href="#" className="smooth">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="smooth">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#" className="smooth">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="smooth">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <hr style={{ borderColor: "rgba(163, 147, 130, 0.14)" }} />
      <div className="container">
        <section className={styles.copyright}>
          <div>
            <p className={styles.reserved}>
              All rights reserved. | Developed & Designed by{" "}
              <a href="#" className="smooth">
                PSdigital
              </a>
              .
            </p>
          </div>
          <div className={styles.privacy}>
            <a href="#" className="smooth">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="smooth">
              Terms & Condition
            </a>
          </div>
          <div className={styles.mApp}>
            <a href="#">
              <Image
                src="/googleplay.png"
                alt="texas google play"
                width={109}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/appstore.png"
                alt="texas app store"
                width={109}
                height={30}
              />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
