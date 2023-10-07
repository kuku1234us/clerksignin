import { FC } from "react";
import { SignUp } from "@clerk/nextjs";

interface pageProps {}

const SignInPage: FC<pageProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      Register here
      <SignUp />
    </div>
  );
};

export default SignInPage;
