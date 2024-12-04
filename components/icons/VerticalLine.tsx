type VerticalLineProps = {
  active: boolean;
};

export const VerticalLine = ({ active }: VerticalLineProps) => {
  return (
    <div
      className={`w-[250px] h-[4px] mt-3 rounded ${
        active ? "bg-black" : "bg-gray-200"
      } `}
    ></div>
  );
};
