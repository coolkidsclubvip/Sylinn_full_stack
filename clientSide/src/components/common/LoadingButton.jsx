import React from 'react'

function LoadingButton() {
  return (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Submitting...
    </button>
  );
}

export default LoadingButton