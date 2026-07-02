import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mijanur Rahman Oli | Full Stack Developer",
  description: "Full Stack Developer specializing in MERN Stack, Next.js, and TypeScript. Building production-grade web applications.",
  icons: {
    icon: "/profile-photo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
          enableColorScheme={false}
          storageKey="theme"
          themes={["light", "dark", "system"]}
        >
          <div className="min-h-screen overflow-x-hidden" suppressHydrationWarning>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}