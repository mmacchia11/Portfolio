import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses("visible");
  });
  return (
    <section id="intro" className={classes}>
      <div>
        <p>
          Soy <span>Martin Macchia</span>, <br /> Full-stack javascript
          developer
          <br /> entusiaste por el codigo.
        </p>
        <a href="">Contactame</a>
      </div>
      <div>
        <img src="/img/porfolioyo.png" />
      </div>
    </section>
  );
}
