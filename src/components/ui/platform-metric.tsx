import { FC } from "react";

interface PlatformMetricProps {
  label: string;
  value: string;
}

export const PlatformMetric: FC<PlatformMetricProps> = ({ label, value }) => {
  return (
    <article className="flex h-[68px] w-[160px]">
      <div className="w-[3px] h-full bg-gray-light" />
      <div className="flex flex-col justify-between ml-6">
        <h2 className="font-bold text-3xl md:text-4xl text-primary">{value}</h2>
        <p className="font-medium text-secondary capitalize">{label}</p>
      </div>
    </article>
  );
};
