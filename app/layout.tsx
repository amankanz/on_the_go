import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import { openSans } from "@/libs/fonts";

export const metadata: Metadata = {
  title: "OnTheGo",
  description: "Freedom to Move, Anytime, Anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${openSans.className}`}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
