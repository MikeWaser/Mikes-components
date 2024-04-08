import "./Tooltip.scss";
import React from "react";
import { ReactNode } from "react";

type tooltipsProps = {
  children: ReactNode;
  title: string;
  position: "top" | "right" | "bottom" | "left";
};

const Tooltip: React.FC<tooltipsProps> = ({ children, title, position }) => {
  return (
    <div className="tooltip-trigger">
      {children}
      <div className={`tooltip ${position}`}>{title}</div>
    </div>
  );
};

export default Tooltip;
