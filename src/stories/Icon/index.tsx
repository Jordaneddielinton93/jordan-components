import { IconType } from "react-icons";
import { IconsList } from "../../components/IconsList";
import { cn } from "../../utils/cn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export interface IconProps {
  icon: IconType;
  iconSize?: number;
}

const textColors = {
  primary: "#058AFF",
  secondary: "#000",
  tertiary: "#000",
};

type TextColor = keyof typeof textColors;
type IconsProps = {
  color: TextColor;
};

/** Icon component for rendering icons */
export const Icons: React.FC<IconsProps> = ({ color }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const textColor = textColors[color];

  const filteredIcons = Object.values(IconsList).filter((IconComponent) =>
    IconComponent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
      <div className="mb-4 pl-2 pr-1 rounded-md border border-[#058AFF] flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Search icons..."
          className="flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-[#058AFF] text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>
      <span className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {filteredIcons.map((IconComponent, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(IconComponent.name);
                toast.success(`${IconComponent.name} copied to clipboard!`);
              }}
            >
              <IconComponent
                className={cn("h-6 w-6 text-[#058AFF]", {
                  [`text-[${textColor}]`]: textColor,
                })}
              />
              <span className="text-sm opacity-0 group-hover:opacity-100 cursor-pointer">
                {IconComponent.name}
              </span>
            </div>
          );
        })}
      </span>
    </>
  );
};

export const IconComponent: React.FC<IconProps> = ({
  icon: Icon,
  iconSize,
}) => {
  return (
    <span className="inline-flex items-center justify-center">
      <Icon className={cn("h-6 w-6", { [`h-${iconSize}`]: iconSize })} />
    </span>
  );
};
