import { PropsWithChildren, ReactNode } from "react";
import Header from "@/components/layout/Header";
import "./globals.css";
import { FilterProvider } from "@/context/FilterContext";

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <FilterProvider>
          <Header />
          <main className="flex-grow">{children}</main>
        </FilterProvider>
      </body>
    </html>
  );
}
