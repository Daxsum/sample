import React from "react";
import { Pannellum } from "pannellum-react";

export default function App() {
  return (
    <Pannellum
      width="100%"
      height="300px"
      image="/image.jpg"
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      showZoomCtrl={false}
    >
      <Pannellum.Hotspot
        type="custom"
        pitch={12.41}
        yaw={117.76}
        handleClick={(evt, name) => console.log(name)}
        name="image info"
      />
    </Pannellum>
  );
}
