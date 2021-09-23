import PropTypes from "prop-types";
import "./App.css";

function App({ pdf, svg }) {
  return (
    <>
      {pdf ? <img src="/pdf.svg" alt="" /> : null}
      {svg ? (
        <svg viewBox="0 0 512 512" style={{ width: 512, height: 512 }}>
          <text x="50%" y="50%" style={{ fontSize: "72px" }}>
            Test
          </text>
          <rect
            x="0"
            y="0"
            width="512"
            height="512"
            fill="none"
            stroke="hotpink"
          ></rect>
        </svg>
      ) : null}
    </>
  );
}

App.propTypes = {
  pdf: PropTypes.bool,
  svg: PropTypes.bool,
};

App.defaultProps = {
  pdf: true,
  svg: false,
};

export default App;
