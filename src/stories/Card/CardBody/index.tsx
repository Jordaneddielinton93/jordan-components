import React from "react";
import { cn } from "../../../utils/cn";

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBody = ({ children, className }: CardBodyProps) => {
  return <div className={cn("mb-4 px-4", className)}>{children}</div>;
};

export default CardBody;
