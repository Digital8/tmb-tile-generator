import PropTypes from "prop-types";
import "./App.css";
import Shapes from "./components/shapes/shapes";
import Logos from "./components/logos/logos";
import { ReactComponent as MakeLogo } from "./logo.svg";
import { ReactComponent as ReactLogo } from "./react-logo.svg";

function App({ headline, showLogos, backgroundImage }) {
  return (
    <svg>
      <text x="50%" y="50%" style={{ fontSize: "72px" }}>
        Test
      </text>
    </svg>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
};

App.defaultProps = {
  headline: "Hello World",
  showLogos: true,
  backgroundImage: "",
};

export default App;
