import React from "react";
import "./OceanZone.css";
import assets from "../../assets/assets";

const OceanZone = () => {
  return (
    <div className="ocean-zone">
      <div className="left">
        <h1>Chemosynthesis in the Dark Depths of the Ocean</h1>
        <define>
          Chemosynthesis typically occurs in the aphotic zone of the ocean,
          which is the part of the ocean that sunlight cannot reach. This
          includes areas like deep-sea hydrothermal vents, cold seeps, and whale
          falls. In these dark regions, organisms rely on chemical energy (from
          substances like hydrogen sulfide and methane) to produce food, since
          there is no sunlight for photosynthesis. The aphotic zone starts
          around 200 meters below the surface and extends to the deepest parts
          of the ocean.
        </define>
        <p>
            Examples were Chemosynthesis takes place :
            <ul>
                <li>Hydrothermal vents</li>
                <li>Submarine volcanoes</li>
                <li>Iron mats</li>
                <li>Submerged metal structures</li>
            </ul>
        </p>
      </div>
      <div className="right">
        <h1>Ocean Zones</h1>
        <img src={assets.ocean_zone} alt="" />
      </div>
    </div>
  );
};

export default OceanZone;
