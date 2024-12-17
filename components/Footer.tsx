import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} OnTheGo by{" "}
          <Link
            href={"https://kanezaio.netlify.app/"}
            target="_blank"
            className="underline underline-offset-2 hover:text-blue-500"
          >
            KANEZA.IO
          </Link>{" "}
          All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-blue-400 hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="text-blue-400 hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
