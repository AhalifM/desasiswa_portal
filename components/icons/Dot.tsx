type DotProps = {
  active: boolean;
};

export const Dot = ({ active }: DotProps) => {
  return (
    <div
      className={`w-[40px] h-[40px] rounded-full ${
        active
          ? "bg-gradient-to-r from-sky-400 via-30% to-emerald-400 to-90%"
          : "bg-sky-300 opacity-25 hover:opacity-40"
      }`}
    ></div>
  );
};
