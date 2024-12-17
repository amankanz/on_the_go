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
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${openSans.className}`}>
          <SignedIn>
            <NavBar />
            {children}
            <Footer />
          </SignedIn>
          <SignedOut>
            <div className="h-screen flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10 p-5 rounded-lg bg-white shadow-lg">
                {/* Left Section */}
                <div className="flex flex-col items-center text-center md:text-left">
                  <h2 className="text-4xl font-bold text-blue-600 mb-4">
                    OnTheGo
                  </h2>
                  <p className="text-lg font-medium text-gray-700 mb-6">
                    Freedom to Move, Anytime, Anywhere
                  </p>
                  <Image
                    src={"/cars/White Mercedes SUV.png"}
                    alt="White Mercedes SUV"
                    width={400}
                    height={500}
                    className="w-full object-contain"
                  />
                  <p className="text-sm text-gray-500 mt-4">
                    &copy; {new Date().getFullYear()} by{" "}
                    <Link
                      href={"https://kanezaio.netlify.app/"}
                      target="_blank"
                      className="underline underline-offset-2 hover:text-blue-500"
                    >
                      KANEZA.IO
                    </Link>{" "}
                    . All rights reserved.
                  </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-lg font-semibold text-gray-800 mb-6">
                    Unlock the freedom to book your car today. Sign in to get
                    started!
                  </p>
                  <SignInButton>
                    <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </div>
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
