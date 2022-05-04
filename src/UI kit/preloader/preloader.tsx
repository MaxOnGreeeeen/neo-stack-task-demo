import React from "react";

import classes from "./preloader.module.scss";

const Preloader: React.FC = () => {
  return (
    <div className={classes.preLoaderBack}>
      <div
        className={classes.preLoaderOutside + " " + classes.preloaderInside}
      ></div>
    </div>
  );
};

export default Preloader;
