import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CompanyInfosProps = {
  orientation?: "left" | "right";
  title: string;
  list?: [string, string | ReactNode][];
  className?: string;
};

const CompanyInfos = ({
  orientation = "left",
  list = [],
  className,
  title,
}: CompanyInfosProps) => {
  return (
    <div
      className={cn(
        "flex flex-col",
        orientation === "right" ? "items-end" : "",
        className,
      )}
    >
      <h3 className={"text-black font-bold"}>{title}</h3>
      <div className="mt-2 flex flex-col gap-2">
        {list.map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span
              className={cn(
                "text-gray-500 underline text-sm",
                orientation === "right" ? "text-right" : "",
              )}
            >
              {key}
            </span>
            <strong
              className={cn(
                "font-bold text-black text-sm",
                orientation === "right" ? "text-right" : "",
              )}
            >
              {value}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfos;
