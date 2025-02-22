import NavigationBar from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { geistMono, merriweather } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { WEB_NAME } from "./utils/constants";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: `%s | ${WEB_NAME}`,
    absolute: WEB_NAME,
    default: WEB_NAME,
  },
  description:
    "PictureQ delivers daily Bible quotes paired with inspiring visuals, designed to uplift and encourage through faith and reflection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <div className=" h-dvh overflow-y-auto scroll-smooth flex flex-col bg-gradient-to-t from-yellow-900/25 ">
            <NavigationBar />
            <div className="flex-1 max-w-7xl mx-auto px-4">{children}</div>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
