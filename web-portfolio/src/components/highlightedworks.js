import { ArrowRight } from 'lucide-react';
import styles from './highlightedworks.module.css';

const HighlightedWorks = () => {
  return (
    <div className={styles.highlightedWorks}>
      {/* Section Title */}
      <h2 className={styles.pageTitle}>
        Highlighted Works
      </h2>
      
      {/* Watching */}
      <ProjectDualImg
        images={[
          { src: "/wp-images/watching/Screenshot 2025-04-23 144937.png", alt: "Watching Installation View 1" },
          { src: "/wp-images/watching/Screenshot 2025-04-23 144810.png", alt: "Watching Installation View 2" }
        ]}
        title="WATCHING"
        description="INTERACTIVE MULTIMEDIA INSTALLATION. BRIGHT, DAZZLING COLORS LURE VIEWERS IN, ONLY TO DISTORT AND FADE INTO A LIVE VIDEO FEED MONITORING BOTH THE VIEWER AND OUTSIDE PASSERBYS — A COMMENTARY ON HOW FLASHY APPEARANCES OFTEN SERVE TO DISTRACT FROM MORE SINISTER UNDERPINNINGS."
        link="/projects/watching"
      />
      
      {/* RepairFlow */}
      <ProjectSingleImg 
        image={{ src: "/wp-images/repairflow/repair image.png", alt: "RepairFlow Diagram" }}
        title="REPAIRFLOW: SYNTHESIZING REPAIR DATA FOR INTERACTIVE DEVICE REPAIR GUIDANCE"
        description="A TOOL THAT GENERATES SPECIFIC, CUSTOMIZABLE REPAIR GUIDANCE SOURCED FROM EXISTING REPAIR INFORMATION WITH THE GOAL OF ENABLING END-USERS TO BUILD AN INTUITION FOR REPAIR AND REDUCING E-WASTE."
        link="/projects/repairflow"
      />

      {/* VR Diver */}
      <ProjectSingleImg 
        image={{ src: "/wp-images/vr diver/diver still.png", alt: "VR Diving Simulator Game Capture" }}
        title="VR Diver Interface"
        description="floating HUD for a virtual reality diving game. compact design minimizes noise and preserves the natural beauty of the game."
        link="/projects/vr diver"
      />

      {/* Sports Uniforms */}
      <ProjectSingleImg 
        image={{ src: "/wp-images/jerseys/us_open_icc_aaron_wolf_bfg_dark.jpg", alt: "Aaron Wolf wearing the Seattle BFG dark uniform" }}
        title="Sports Uniforms"
        description="Simple, Punchy kits worn on the international stage, from Chicago to Amsterdam."
        link="/projects/jerseys"
      />

      {/* Graphics */}
      <ProjectSingleImg 
        image={{ src: "/wp-images/graphics/BFG-2025-Coaching-Interest-conflict.png", alt: "BFG Coaching Interest Graphic Announcement" }}
        title="Graphics"
        description="posters, logos, social media announcements, discs, etc. "
        link="/projects/graphics"
      />
    </div>
  );
};

/* Component for single image highlights */
const ProjectSingleImg = ({image, title, description, link}) => {
  const handleClick = () => {
    console.log(`Navigate to: ${link}`);
  };

  return (
    <div className={styles.projectSingle} onClick={handleClick}>
      <div className={styles.singleImgContainer}>
        {/* Single Image */}
        <div className={styles.singleImg}>
          <img src={image.src} alt={image.alt} />
        </div>
        
        {/* Text Content */}
        <div className={styles.singleTextContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <ArrowRight size={32} className={styles.arrowSingle} />
        </div>
      </div>
    </div>
  );
};

/* Component for two images */
const ProjectDualImg = ({ images, title, description, link }) => {
  const handleClick = () => {
    console.log(`Navigate to: ${link}`);
  };

  return (
    <div className={styles.projectDual} onClick={handleClick}>
      {/* Two Images Container */}
      <div className={styles.dualImgContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.dualImg}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Title + Description + Arrow */}
      <div className={styles.textRow}>
        <div className={styles.textMain}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>
        <ArrowRight size={32} className={styles.arrow} />
      </div>
    </div>
  );
}

export default HighlightedWorks;
