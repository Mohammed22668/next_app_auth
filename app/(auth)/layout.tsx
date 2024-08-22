import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen w-full items-center justify-center border border-slate-800">
          {children}
        </main>
      </body>
    </html>
  );
}
