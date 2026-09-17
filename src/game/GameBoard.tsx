import { Application } from "pixi.js";
import { useEffect, useRef } from "react";

function GameBoard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new Application();
    let cancelled = false;
    let initialised = false;

    app.init({
      background: "#2c2c2c",
      resizeTo: window,
    }).then(() => {
      initialised = true;

      if (cancelled) {
        app.destroy(true, { children: true, texture: true });
        return;
      }

      containerRef.current?.appendChild(app.canvas);
    }).catch((error: unknown) => {
      console.error("PixiJS failed to initialise", error);
    });

    return () => {
      cancelled = true;

      if (initialised) {
        app.destroy(true, { children: true, texture: true });
      }
    };
  }, []);

  return <div ref={containerRef} />;
}

export default GameBoard;
