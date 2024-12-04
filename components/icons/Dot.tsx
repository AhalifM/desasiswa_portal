type DotProps = {
  active: boolean;
};

export const Dot = ({ active }: DotProps) => {
  return (
    <div
      className={`w-[30px] h-[30px] rounded-full ${
        active ? "bg-black" : "border-gray-400 hover:bg-slate-500 bg-gray-300"
      }`}
    ></div>
  );
};
