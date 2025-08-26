import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gradio-app": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { src?: string };
    }
  }
}