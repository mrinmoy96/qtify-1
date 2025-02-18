// import React from "react";
// import Styles from "./HeroSection.module.css";
// import { ReactComponent as VibratingHeadphone } from "../../assets/vibratingHeadphone.svg";

// const HeroSection = () => {
//   return (
//     <div className={Styles.HeroContainer}>
//       <div className={Styles.HeroText}>
//         <div>100 Thousand Songs, ad-free</div>
//         <div>Over thousands podcast episodes</div>
//       </div>
//       <VibratingHeadphone />
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import styles from "./Hero.module.css";
import  HeroImage  from "../../assets/vibratingHeadphone.svg";

const Hero = () => {
  return (
    <>  
        <section className={styles.Hero}>
            <div className={styles.HeroTitle}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img className={styles.HeroImage} src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default Hero;