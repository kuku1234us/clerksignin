import { FC } from "react";
import { SignIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

interface pageProps {}

const SignInPage: FC<pageProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      Signin here
      <SignIn />
      <UserButton />
    </div>
  );
};

export default SignInPage;
