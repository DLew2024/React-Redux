import "bulma/css/bulma.css";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

import ProfileCard from "./ProfileCard";

function App() {
  const titleOne = "Alexa";
  const titleTwo = "Cortana";
  const titleThree = "Siri";

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assitant</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title={titleOne}
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa helps you buy things from Amazon"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title={titleTwo}
                handle="@cortana32"
                image={CortanaImage}
                description="A google helper"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title={titleThree}
                handle="@siri01"
                image={SiriImage}
                description="An apple voice AI"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
