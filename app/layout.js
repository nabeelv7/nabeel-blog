import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import NProgressProvider from "@/components/NProgressProvider";

const inter = Inter({
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Nabeel's Blog",
  description: "I write blogs on this site. Really excited to see you here. You'll find something useful.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${firaCode.variable} antialiased bg-base-300 min-h-screen`}
      >
        <NProgressProvider>
          {children}
        </NProgressProvider>
      </body>
    </html>
  );
}
