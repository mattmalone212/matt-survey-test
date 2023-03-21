import * as React from "react";
import { v4 as uuid } from "uuid";
import { twMerge } from "tailwind-merge";

interface HomeHeaderProps {
  activeTab?: string;
  tabs?: {
    label: string;
    onClick?: () => void;
  }[];
}

const HomeHeader = ({ activeTab, tabs }: HomeHeaderProps) => {
  return (
    <div className="absolute top-0 z-10 mx-auto w-full px-5 text-gray-50 md:right-0 md:w-1/2 md:bg-white md:px-14 md:text-gray-900">
      <nav className="flex items-center gap-8 py-10 text-4xl font-bold">
        {tabs &&
          tabs.map((tab) => (
            <button
              key={uuid()}
              className={twMerge(
                "border-b-4 border-transparent hover:border-gray-400",
                `${tab.label === activeTab ? "border-gray-400" : ""}`
              )}
              onClick={tab.onClick}
            >
              {tab.label}
            </button>
          ))}
      </nav>
    </div>
  );
};

export default HomeHeader;
