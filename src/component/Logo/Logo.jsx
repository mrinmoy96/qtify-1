// import React from 'react'
// import BrandLogo from "../../assets/BrandLogo.png"
// const Logo = () => {
//   return (
//     <div>
//         <img src={BrandLogo} alt='logo' width={67} />
//         </div>
//   )
// }

// export default Logo



// import React from "react";
import styles from "./Logo.module.css";
import LogoImg from "../../assets/BrandLogo.png";

const Logo=()=>{

return(
    <div className={styles.logoDiv}>
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;