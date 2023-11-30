import React from "react";
import { Link } from "react-router-dom";
import TransitionPage from "./TransitionPage";

function Special() {
  return (
    <>
      <TransitionPage>
        <div className="flex flex-col h-screen w-screen justify-center p-8 gap-4">
          <div className="text-2xl lg:text-6xl">
            Special Thanks to Proxima Fresh
          </div>
          <div className="grid lg:grid-cols-4 text-4xl">
            <div>Shan</div> <div>Shaurya</div> <div>Mark</div> <div>Justin</div>{" "}
            <div>Richard</div> <div>Tanzim</div> <div>Allan</div>
          </div>
          <br />
          <div className="flex flex-row-reverse">
            <div>
              Return{" "}
              <Link to="/">
                <u>home</u>
              </Link>
            </div>
          </div>
        </div>
      </TransitionPage>
    </>
  );
}

export default Special;
