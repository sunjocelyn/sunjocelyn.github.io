import styles from './header.module.css'; 
import { useState } from 'react';
import { X, Mail } from 'lucide-react';

const NavPanel = () => {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);

    const handleAboutClick = (e) => {
        e.preventDefault();
        setShowAboutPopup(true);
    };
    const handleContactclick = (e) => {
        e.preventDefault();
        setShowContactPopup(true);
    };

    return (
        <>
        <div className={styles.stickyHeader}>
            <div className={styles.header}>
                <div className={styles.logo}>JOCELYN SUN</div>
                <nav>
                    <ul className={styles.nav}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about" onClick={handleAboutClick}>About</a></li>
                        <li><a href="#contact" onClick={handleContactclick}>Contact</a></li>
                    </ul>
                </nav>
            </div>

            <hr style={{width: "100%", height: "0.24rem", backgroundColor:"#FFD478", margin: "0", border: "none"}}></hr>
            <hr style={{width: "100%", height: "0.09rem", backgroundColor:"#000000", margin: "0", border: "none"}}></hr>
        </div>
        
        {showAboutPopup && (
            <AboutPopup
                isOpen={true}
                onClose={() => setShowAboutPopup(false)}
            />
        )}
        {showContactPopup && (
            <ContactPopup
                isOpen={true}
                onClose={() => setShowContactPopup(false)}
            />
        )}
        </>
    )
}

// About Popup Component
function AboutPopup({isOpen, onClose}) {
  return (
    <>
      {/* Backdrop */}
       <div 
        className={`${styles.backdrop} ${isOpen ? styles.show : ''}`}
        onClick={onClose} 
      />
      
      {/* Popup Container */}
      <div className={`${styles.popup} ${isOpen ? styles.show : ''}`}>
        <div className={styles.popupContent}>
          {/* Close button */}
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={24} />
          </button>

          {/* About text */}
          <div className={styles.aboutContent}>
            <div className={styles.aboutFlex}>
              <img 
                src="/wp-images/headshot.jpg" 
                alt="Jocelyn Sun" 
                className={styles.aboutImg}
              />
              <div>
                <p className={styles.aboutName}>Jocelyn Sun</p>
                <p className={styles.aboutText}>
                  is a recent graduate from the University of Chicago, where she earned
                  Bachelors degrees in Computer Science and Media Arts and Design, 
                  specializing in human-computer interaction.
                </p>
                <p className={styles.aboutText}>
                  she is inspired by the influence and impact left by intentional designs across the worlds of art and user experience.
                </p>
                <p className={styles.aboutText}>
                  When she is not sketching, she plays Ultimate Frisbee,
                  Previously competing with the US National Team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function ContactPopup({isOpen, onClose}) {
  return (
    <>
      {/* Backdrop */}
       <div 
        className={`${styles.backdrop} ${isOpen ? styles.show : ''}`}
        onClick={onClose} 
      />
      
      {/* Popup Container */}
      <div className={`${styles.popup} ${isOpen ? styles.show : ''}`}>
        <div className={styles.popupContent}>
          {/* Close button */}
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={24} />
          </button>

          {/* Contact content */}
          <div className={styles.aboutContent}>
            <div className={styles.aboutFlex} style={{ justifyContent: 'center' }}>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jocelyn-sun-98435922a" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginRight: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <img 
                  src="/wp-images/linkedin-logo.png" 
                  alt="LinkedIn" 
                  style={{ width: '2.5rem', height: '2.5rem' }}
                />
              </a>

              {/* Email */}
              <a 
                href="mailto:sunjocelynw@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Mail size={40} color="#000" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavPanel;