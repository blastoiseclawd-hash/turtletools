"use client";
import { useEffect } from "react";

export default function NewsletterForm() {
  useEffect(() => {
    // Load Beehiiv embed script
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Load attribution tracker
    const attr = document.createElement("script");
    attr.src = "https://subscribe-forms.beehiiv.com/attribution.js";
    attr.async = true;
    document.body.appendChild(attr);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(attr);
    };
  }, []);

  return (
    <iframe
      src="https://subscribe-forms.beehiiv.com/0df703f6-f25c-4eaa-8759-bb80d682a7ba"
      className="beehiiv-embed"
      data-test-id="beehiiv-embed"
      frameBorder="0"
      scrolling="no"
      style={{
        width: "100%",
        maxWidth: "634px",
        height: "315px",
        margin: 0,
        borderRadius: "8px",
        backgroundColor: "transparent",
        border: "none",
      }}
    />
  );
}
