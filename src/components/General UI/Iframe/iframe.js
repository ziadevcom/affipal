import { useState } from "react";
import { createPortal } from "react-dom";

export function IFrame({ children, ...props }) {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

export default IFrame;
