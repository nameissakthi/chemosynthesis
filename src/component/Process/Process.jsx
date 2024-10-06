import React from "react";
import "./Process.css";
import assets from "../../assets/assets";

const Process = () => {
  return (
    <div className="process">
      <h1>Process</h1>
      <div>
        <div>
          <h1>Chemical Energy Source</h1>
          <p>
            Chemosynthesis occurs in environments without sunlight, such as
            deep-sea hydrothermal vents, cold seeps, or underground caves.
            Instead of relying on sunlight (like in photosynthesis), organisms
            that perform chemosynthesis extract energy from inorganic chemicals.
            The most common chemicals used are hydrogen sulfide (H<sub>2</sub>
            S), methane (CH<sub>4</sub>), or ammonia (NH<sub>3</sub>), which are
            often found in abundance near hydrothermal vents or volcanic
            activity on the seafloor.
          </p>
          <div>
            <ul>
              <li>
                H<sub>2</sub>S
              </li>
              <li>
                CH<sub>4</sub>
              </li>
              <li>
                NH<sub>3</sub>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1>Chemical Reactions</h1>
          <p>
            In chemosynthesis, bacteria and other microorganisms break down
            these chemicals through oxidation reactions. For example:
            <ul>
              <li>
                Hydrogen sulfide (H₂S) is oxidized to produce sulfur and
                sulfates.
              </li>
              <li>
                During this reaction, energy is released, which the bacteria use
                to convert carbon dioxide (CO<sub>2</sub>) and water (H
                <sub>2</sub>O) into organic molecules like sugars.
              </li>
            </ul>
          </p>
          <p>
            The chemical equation for chemosynthesis using hydrogen sulfide is:
            <br/>
            <span>
              <i>
                6CO<sub>2</sub> + 6H<sub>2</sub>O + 3H<sub>2</sub>S + {"---->"} C
                <sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 3H<sub>2</sub>SO
                <sub>4</sub>
              </i>
            </span>
            <br/>
            Here, carbon dioxide and water react with hydrogen sulfide,
            producing a sugar molecule (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
            ) and sulfuric acid (H<sub>2</sub>SO<sub>4</sub>).
          </p>
        </div>

        <div>
          <h1>Energy Storage</h1>
          <p>
            The energy from breaking down chemicals is stored in chemical bonds
            of the sugar molecules (such as glucose), which serve as food for
            the chemosynthetic bacteria themselves and, indirectly, for other
            organisms in the ecosystem. These sugars are essential for the
            survival and growth of the bacteria.
          </p>
        </div>

        <div>
          <h1>Building Organic Compounds</h1>
          <p>
            The chemosynthetic bacteria use the energy to build more complex
            organic molecules from the simple carbon compounds like carbon
            dioxide (CO<sub>2</sub>). These organic compounds form the base of
            the food web in these environments.
          </p>
        </div>

        <div>
          <h1>Supporting Ecosystems</h1>
          <p>
            The bacteria that perform chemosynthesis are often found in extreme
            environments, like deep-sea vents or cold seeps. In these places,
            the bacteria form symbiotic relationships with other organisms such
            as tube worms, clams, and certain types of fish. These larger
            organisms depend on the bacteria for nutrition, either by consuming
            them or by hosting them in their bodies (in the case of symbiosis).
            As a result, entire ecosystems in the deep sea thrive, despite the
            absence of sunlight.
          </p>
        </div>

        <div>
          <h1>Summary</h1>
          <p>
            In hydrothermal vent systems, water seeps into the Earth’s crust,
            becomes superheated by volcanic activity, and re-emerges at the
            ocean floor, rich in chemicals like hydrogen sulfide. Bacteria
            around these vents use chemosynthesis to create food, which then
            sustains other organisms, like giant tube worms. These tube worms
            have no mouth or stomach; instead, they host chemosynthetic bacteria
            in their tissues. The bacteria convert chemicals from the vent into
            energy, which they share with the tube worms.
          </p>
        </div>
      </div>
      <h1>Process Diagrams For Chemosynthesis</h1>
      <div className="process-diagram">
        <img src={assets.process} alt="process" />
      </div>
    </div>
  );
};

export default Process;
