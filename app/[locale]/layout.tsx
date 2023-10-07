import "../globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { notFound } from "next/navigation";
import { Locale, i18n } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "融资宝",
  description:
    "融资邦的业务模型及竞争力分析: 业务模型介绍：融资邦为投资者、企业代表和联盟合作伙伴提供了一个综合的在线筹资平台。投资者可以轻松地搜索和投资他们感兴趣的项目；企业代表可以发布和管理他们的筹资项目，增加曝光和吸引潜在投资者；而联盟合作伙伴则可以引导更多的客户到平台并从中获得佣金。竞争力分析：综合性的服务：融资邦不仅仅是一个筹资平台，还提供了评估、估值、审计等专业服务，使企业能够得到全方位的支持。强大的认证机制：企业在完成验证后将获得“已验证”的徽章，这增加了投资者对该公司的信任度。多样化的融资项目：从股权到债券，融资邦为投资者提供了各种筹资方式，使其能够根据自己的投资风格和偏好来进行选择。二级市场功能：投资者不仅可以在融资邦上购买股权或债券，还可以在二级市场上将其转售给其他投资者，这提供了一个方便的退出机制。专注于用户体验：从社交功能到实时更新，融资邦始终致力于提供最佳的用户体验",
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}
export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const isValidLocale = i18n.locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  unstable_setRequestLocale(locale);

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
