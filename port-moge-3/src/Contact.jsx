import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center p-8 gap-4">
        <div className="text-6xl">Let's Talk.</div>
        <div className="text-4xl">
          Send me an email and tell me how you feel about anything.
        </div>
        <br />
        <div className="text-xl animate-pulse hover:underline"><a href="mailto: sabeet.a.chow90s@gmail.com">sabeet.a.chow90s@gmail.com →</a></div>
        <br />
        <div className="flex flex-row-reverse"><div>Return <Link to='/'><u>home</u></Link></div></div>
      </div>
    </>
  );
}

export default Contact;
