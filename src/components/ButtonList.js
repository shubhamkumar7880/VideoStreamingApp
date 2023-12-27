import React, { useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const [activeButton, setActiveButton] = useState("All");

  const btnList = ["All", "News", "Gaming", "Music", "Podcast"];
  return (
    <div className="flex">
      {btnList.map((item, ind) => (
        <Button
          name={item}
          key={item}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ))}
    </div>
  );
};

export default ButtonList;
