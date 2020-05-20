import React from "react";
import classes from "./TypeSelector.module.css";

const TypeSelector = props => {
  let styles;

  if (props.type === "Movies") {
    styles = {
      gridArea: "TypeSelector-start / 4 / TypeSelector-end / 8"
    };
  } else {
    styles = {
      gridArea: "TypeSelector-start / 9 / TypeSelector-end / 13"
    };
  }

  // media query
  if (document.documentElement.clientWidth < 800) {
    if (props.type === "Movies") {
      styles = {
        gridArea: "TypeSelector-start / 2 / TypeSelector-end / 7"
      };
    } else {
      styles = {
        gridArea: "TypeSelector-start / 8 / TypeSelector-end / 16"
      };
    }
  }
  if (document.documentElement.clientWidth < 600) {
    if (props.type === "Movies") {
      styles = {
        gridArea: "TypeSelector-start / 2 / TypeSelector-end / 6"
      };
    } else {
      styles = {
        gridArea: "TypeSelector-start / 7 / TypeSelector-end / 16"
      };
    }
  }

  if (document.documentElement.clientWidth < 500) {
    if (props.type === "Movies") {
      styles = {
        gridArea: "TypeSelector-start / 2 / TypeSelector-end / 5"
      };
    } else {
      styles = {
        gridArea: "TypeSelector-start / 6 / TypeSelector-end / 16"
      };
    }
  }

  if (document.documentElement.clientWidth < 400) {
    if (props.type === "Movies") {
      styles = {
        gridArea: "TypeSelector-start / 2 / TypeSelector-end / 4"
      };
    } else {
      styles = {
        gridArea: "TypeSelector-start / 5 / TypeSelector-end / 16"
      };
    } 
  }

  return (
    <div style={styles}>
      <button onClick={props.changeTo} className={classes.TypeSelector}>
        {props.type}
      </button>
    </div>
  );
};

export default TypeSelector;
