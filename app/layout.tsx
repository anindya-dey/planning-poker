import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning Poker",
  description: "App to help in sprint planning and story point estimation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center w-3/4 py-10 m-auto md:w-1/2 xl:w-1/3 selection:bg-indigo-600 selection:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}

