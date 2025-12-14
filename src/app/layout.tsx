// app/layout.tsx
import LayoutClient from "@/components/LayoutClienRoot";
import "./globals.css";
import AOSProvider from "@/components/AOSAnimation";

export const metadata = {
  title: "Kang Geprek",
  description: "Website resmi Kang Geprek",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <AOSProvider>
          <LayoutClient>{children}</LayoutClient>
        </AOSProvider>
      </body>
    </html>
  );
}
