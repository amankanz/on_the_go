/*
import React from "react";

function ToastMsg({ msg }: string) {
  return (
    <div>
      <div className="toast toast-top toast-end">
        <div className="alert alert-success">
          <span>Successfully booked a Car!</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMsg;
*/

import React from "react";

interface ToastMsgProps {
  msg: string;
}

function ToastMsg({ msg }: ToastMsgProps) {
  return (
    <div>
      <div className="toast toast-top toast-end">
        <div className="alert alert-success">
          <span>Successfully booked a {msg} Car!</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMsg;
