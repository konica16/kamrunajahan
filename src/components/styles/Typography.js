import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
//import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
//import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
//import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
  font-family: "Poppins Medium";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-Medium.ttf");
}

@font-face {
  font-family: "Poppins Regular";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-SemiBold.ttf");
}

@font-face {
  font-family: "Poppins Bold";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-Bold.ttf");
}

@font-face {
  font-family: "Poppins ExtraBold";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-ExtraBold.ttf");
}

@font-face {
  font-family: "Poppins Light";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-Light.ttf");
}

@font-face {
  font-family: "Poppins Thin";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/Poppins-Thin.ttf");
}

* {
  outline: none;
}
  html{
    font-family: 'Poppins Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Poppins Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins SemiBold'
  }
`;

export default Typography;