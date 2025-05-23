import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const ContactCard = ({ icon, title, value, link = "" }) => (
  <a 
    href={link} 
    target={link ? "_blank" : ""} 
    rel={link ? "noopener noreferrer" : ""}
    className={`contact-card ${link ? '' : 'no-link'}`}
  >
    <div className="contact-icon">
      {icon}
    </div>
    <h3 className="contact-type">{title}</h3>
    <p className="contact-value">{value}</p>
  </a>
);

const Contacts = () => {
  return (
    <section className="contact-section section">
      <div className="container">
        <div className="section-title">
          <span>Get in touch</span>
          <h2>Contact Me</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="contact-cards">
          <ContactCard 
            icon={<FaEnvelope />}
            title="Email"
            value="mutanuzippy04@gmail.com"
            link="mailto:mutanuzippy04@gmail.com"
          />
          
          <ContactCard 
            icon={<FaPhoneAlt />}
            title="Phone"
            value="0719 168 367"
            link="tel:+254719168367"
          />
          
          <ContactCard 
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Meru, Kenya"
          />
        </div>

        <div className="social-section">
          <h3 className="social-title">Connect on Social Media</h3>
          
          <div className="social-buttons">
            <a
              href="https://www.facebook.com/ZazimaZazima"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button facebook"
            >
              <FaFacebookF />
            </a>
            
            <a
              href="https://www.linkedin.com/in/mutanu-zippy-05a24a35b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <FaLinkedinIn />
            </a>
            
            <a
              href="https://github.com/zipporahmutanu04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
