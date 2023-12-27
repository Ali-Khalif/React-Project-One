import "./Card.css";
import "../App.css";
import backgroundImage from "../assets/react.svg";
function Card() {
  const containerImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundColor: "#000000",
    height: "100px",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="column-4">
          <div className="card accent-background-soft " data-motion-card="">
            <div className="card-image-top-wrapper">
              <div className="card-image-top" style={containerImage}>
                <span className="card-mask"></span>
              </div>
            </div>
            <div className="card-body">
              <div>
                <h3 className="card-title mb-5">
                  5G is er ook voor ondernemers
                </h3>
                <div className="mb-8">
                  <p>
                    Ons 5G-netwerk met landelijke dekking is er ook voor
                    ondernemers. Sterker nog, er gaat een wereld voor ze open.
                    Hoe dan? Laat je inspireren.
                  </p>
                </div>
              </div>
              <div className="flex flex-grow align-items-end">
                <a
                  className="button-base stretched-link mt-auto button-motion motion-icon-and-text"
                  href="#"
                  data-button-motion-arrow="right"
                >
                  <span className="button-motion-wrapper">
                    <span className="button-text-wrapper">Button</span>
                    <span className="arrow-mask-right"></span>
                    <span className="arrow-mask-right">
                      <span className="icon-arrow-right"></span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
