import Link from "next/link";
import { Button } from "./ui/button";

type NavigationButtonsProps = {
  back: string;
  next: string;
  home?: boolean;
};

export const NavigationButtons = ({
  back,
  next,
  home,
}: NavigationButtonsProps) => {
  return (
    <div className="w-full flex gap-x-6 mt-6">
      <Button asChild variant="outline" className="w-full">
        <Link className="w-full" href={back}>
          <p>Back</p>
        </Link>
      </Button>
      <Button asChild className="w-full bg-[#2563EB] hover:bg-[#1e53c4]">
        <Link href={next}>
          <p>{home ? "Home" : "Next"}</p>
        </Link>
      </Button>
    </div>
  );
};
