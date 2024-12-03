import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-center flex items-center flex-col gap-6">
      <h1>Welcome to Desasiswa Management</h1>
      <Button asChild>
        <Link href="/sign-in">SignIn</Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up">SignUp</Link>
      </Button>
    </div>
  );
}
