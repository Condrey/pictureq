import { Geist_Mono, Merriweather,Geist } from "next/font/google";

export const merriweather = Merriweather({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: "400",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const geistSans = Geist({
    variable:'--font-geist-sans',
    subsets:["latin"],

})
