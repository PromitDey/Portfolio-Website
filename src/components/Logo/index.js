import react from "react";
import "./index.scss";
import LogoS from "../../assets/images/1_1.png";

const Logo = () => {
  return(
    <>
      <div className="logo-contianer">
        <img src={LogoS} className="solid-logo" alt="solid-logo"/>
      </div>
    </>
  )
}
export default Logo;