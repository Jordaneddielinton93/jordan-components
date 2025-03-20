import { IconType } from "react-icons";
import { cn } from "../../../utils/cn";
import { IconComponent } from "../../Icon";
import { Styles } from "./Button.styles";

export interface ButtonProps {
  color?: "primary" | "secondary";
  variant?: "text" | "outlined" | "ghost" | "filled";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  iconStart?: IconType;
  iconEnd?: IconType;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  color = "primary",
  variant = "text",
  size = "medium",
  backgroundColor,
  label,
  iconStart,
  iconEnd,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        Styles.base,
        Styles.colors[color],
        Styles.variants[variant as keyof typeof Styles.variants],
        Styles.sizes[size]
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {iconStart && (
        <IconComponent icon={iconStart as IconType} iconSize={20} />
      )}
      <span className="text-sm w-full text-center">{label}</span>
      {iconEnd && <IconComponent icon={iconEnd as IconType} iconSize={20} />}
    </button>
  );
};
