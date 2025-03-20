import React from "react";
import { cn } from "../../../utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  shadow?: "sm" | "md" | "lg";
};

const Card = (props: Props) => {
  const { children, className, shadow = "sm" } = props;
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-4 border border-gray-300",
        className,
        {
          [`shadow-${shadow}`]: shadow,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Card;
