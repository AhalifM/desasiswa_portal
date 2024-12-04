import { NavigationButtons } from "./NavigationButtons";

type StepProps = {
  children: React.ReactNode;
  back: string;
  next: string;
  home?: boolean;
};

export const Step = ({ children, back, next, home }: StepProps) => {
  return (
    <div className="flex flex-col justify-between min-w-[500px] mt-4">
      {children}
      <NavigationButtons back={back} next={next} home={home} />
    </div>
  );
};
