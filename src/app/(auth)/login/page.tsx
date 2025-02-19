import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-[416px] flex flex-col gap-6 justify-center items-start ">
      <Link href={"/"}>
        <Button
          variant={"outline"}
          className="w-9 h-9 py-2 px-4 flex items-center justify-center "
        >
          <ChevronLeft />
        </Button>
      </Link>
      <div>
        <h3 className="text-[24px] font-[600] leading-[32px] ">Login</h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Log in to enjoy your favorite dishes.
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <Inputs type="email" place="Enter your email address" />
        <Inputs type="password" place="Confirm" />
        <div>
          <Button className="ml-[-14px] " variant={"link"}>
            Forgot password ?
          </Button>
        </div>
      </div>
      <Link className="w-full" href={"/"}>
        <Button className="w-full ">Let's Go</Button>
      </Link>
      <div className="flex w-full justify-center gap-3 items-center">
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Don’t have an account?
        </h4>
        <Link href={"/signup"}>
          <Button variant={"link"} className="text-[#2563EB]">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
}
