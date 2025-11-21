import './Contact.css'
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className="contact container">
            <h1>
                Contact
            </h1>
            <p className="contact-section-subtitle">
                Benimle iletişime geçebilir veya sosyal medyada takip edebilirsin
            </p>
            
    

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/alevyldrm/" target="_blank" className="contact-box">
                    <FaLinkedin className="icon" />
                    <span>LinkedIn</span>
                    <span className="arrow">↗</span>
                </a>

                <a href="https://www.instagram.com" target="_blank" className="contact-box">
                    <FaInstagram className="icon" />
                    <span>Instagram</span>
                    <span className="arrow">↗</span>
                </a>

                <a href="https://github.com/alevyldrm" target="_blank" className="contact-box">
                    <FaGithub className="icon" />
                    <span>GitHub</span>
                    <span className="arrow">↗</span>
                </a>

                <a href="mailto:alev46069@gmail.com" className="contact-box">
                    <FaEnvelope className="icon" />
                    <span>E-mail</span>
                    <span className="arrow">↗</span>
                </a>
            </div>

            <div className="map-container">
                <iframe
                    title="Ankara Konumu"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97260.8939870469!2d32.70741922479853!3d39.90355586955338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f21433df3ef%3A0x1a4b037e73e5b24a!2sAnkara!5e0!3m2!1str!2str!4v1700249710000!5m2!1str!2str"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '16px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
