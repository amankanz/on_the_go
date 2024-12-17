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
