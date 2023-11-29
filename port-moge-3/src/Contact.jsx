import React from "react";

function Contact() {
  return (
    <>
      <div className="flex flex-col h-fit w-screen p-8 justify-center gap-4">
        <div className="text-6xl">Let's Talk.</div>
        <div className="text-4xl">
          Send me an email and tell me how you feel about anything.
        </div>
        <br />
        <div className="text-xl animate-pulse hover:underline"><a href="mailto: sabeet.a.chow90s@gmail.com">sabeet.a.chow90s@gmail.com →</a></div>
        <br />
        <div className="flex flex-row-reverse"><div>Return <u>home</u></div></div>
      </div>
    </>
  );
}

export default Contact;
