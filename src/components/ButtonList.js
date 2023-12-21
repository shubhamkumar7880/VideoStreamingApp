import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = ["All", "News", "Gaming", "Music", "Podcast"];
  return (
    <div className="flex">
      {btnList.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
