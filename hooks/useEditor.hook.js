import axios from "axios";
import { useEffect, useState } from "react";

export function useEditor(socket) {
  const [code, setCode] = useState("");

  const [modal, setModal] = useState(false);

  const [output, setOutput] = useState("");

  useEffect(() => {
    const previousCode = localStorage.getItem("code");
    if (previousCode) setCode(previousCode);
    socket.on("code", (data) => {
      if (data === code) return;
      setCode(data);
    });
  }, []);

  function onCodeChange(value) {
    setCode(value);
    socket.emit("code", value);
    localStorage.setItem("code", value);
  }

  function runCode() {
    if (code === "") return;
    axios.post("http://localhost:4000/run", { code }).then((res) => {
      console.log(res.data);
      setModal(true);
      setOutput(res.data.output);
    });
  }
  return { code, onCodeChange, runCode, modal, output, setModal, setOutput };
}
