import React from "react";

function contactUs() {
  return (
    <section className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-slate-600 text-center max-w-xl">
        Have questions or need assistance? We’re here to help! Reach out to our
        support team for prompt and friendly service.
      </p>
      <ul className="mt-6 space-y-4 text-center">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@onthego.com" className="text-blue-500">
            support@onthego.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-500">
            +1 (234) 567-890
          </a>
        </li>
        <li>
          <strong>Office Hours:</strong> Monday - Friday, 9 AM - 5 PM
        </li>
      </ul>
      <p className="text-lg text-slate-600 text-center max-w-xl mt-6">
        We look forward to connecting with you and ensuring your experience with
        OnTheGo is top-notch!
      </p>
    </section>
  );
}

export default contactUs;
