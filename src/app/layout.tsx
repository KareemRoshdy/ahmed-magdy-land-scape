import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "روضة الرياض | تنسيق حدائق ولاندسكيب",
    template: "%s | روضة الرياض",
  },
  description:
    "شركة روضة الرياض الرائدة في تصميم وتنفيذ اللاندسكيب، تنسيق حدائق الفلل، تركيب النوافير والشلالات، وأنظمة الري الحديثة في المملكة العربية السعودية.",
  keywords: [
    "تنسيق حدائق",
    "لاندسكيب",
    "تصميم حدائق",
    "نوافير وشلالات",
    "عشب صناعي",
    "روضة الرياض",
    "تنسيق حدائق السعودية",
  ],
  authors: [{ name: "روضة الرياض" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "روضة الرياض لتنسيق الحدائق واللاندسكيب",
    description:
      "نحول مساحاتكم الخارجية إلى واحات خضراء تنبض بالحياة بأحدث التصاميم العالمية.",
    url: "https://kareem-landscap.vercel.app/",
    siteName: "روضة الرياض",
    images: [
      {
        url: "/images/logo/main-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", inter.variable)}>
      <body className={`${cairo.className}  ${cairo.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
