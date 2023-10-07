import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className="h-full bg-red-500">{children}</div>;
};

export default layout;
