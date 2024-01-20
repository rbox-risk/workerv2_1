"use client";
import styles from "./page.module.css";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [fromWorker, setFromWorker] = useState(null);
  const worker = useRef(null);

  useEffect(() => {
    const loadMe = async () => {
      if (worker.current === null) {
        worker.current = new Worker(new URL("./worker.js", import.meta.url), {
          type: "module",
        });
      }
      if (worker.current) {
        worker.current.postMessage({ command: "hello" });
        worker.current.onmessage = function (e) {
          setFromWorker(e.data.result);
          console.log(e.data);
        };
      }
    };
    loadMe();
  }, []);

  return (
    <main className={styles.main}>
      <div>{fromWorker === null ? <p>working...</p> : <p>{fromWorker}</p>}</div>
    </main>
  );
}
