import React from 'react'
import { useEffect, useRef } from "react"

export const Anuncio2 = () => {
  const banner = useRef();

  const atOptions = {
    key: "5849a835d4b6b776f9e82be1b69a43a1",
    format: "iframe",
    height: 90,
    width: 728,
  };

  useEffect(() => {
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.profitabledisplayformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "15px"
    }}>
      <a href="//nossairt.net/4/5718337"
        target="_blank"
        style={{ display: "flex", cursor: "pointer", opacity: "0" }}>
        anuncio
      </a>
      <div ref={banner} />
      <a href="https://popcash.net/home/453873" target="_blank" title="PopCash - The Popunder network">
        <img src="https://static.popcash.net/img/affiliate/468x60.jpg" alt="PopCash.net"/>
      </a>
      <a href="//nossairt.net/4/5718337"
        target="_blank"
        style={{ display: "flex", cursor: "pointer", opacity: "0" }}>
        anuncio
      </a>
    </div>
  )
}