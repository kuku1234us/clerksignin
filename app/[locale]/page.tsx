import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("signinReg");
  return (
    <div className="h-full w-full">
      <div className="text-3xl font-bold text-indigo-500">{t("pageTitle")}</div>
      <Button variant="destructive">Click</Button>
    </div>
  );
}
