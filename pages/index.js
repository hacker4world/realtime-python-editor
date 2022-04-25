import Editor from "@monaco-editor/react";
import { MDBBtn, MDBNavbar } from "mdb-react-ui-kit";
import { io } from "socket.io-client";
import { Modal } from "../components/Modal";
import { useEditor } from "../hooks/useEditor.hook";

const socket = io("http://localhost:4000");

export default function Home() {
  const { code, onCodeChange, runCode, modal, output, setModal, setOutput } =
    useEditor(socket);

  return (
    <>
      <Modal modal={modal} setModal={setModal} output={output} />
      <MDBNavbar>
        <MDBBtn style={{ marginLeft: 10 }} color="success" onClick={runCode}>
          Run
        </MDBBtn>
      </MDBNavbar>
      <Editor
        height="90vh"
        defaultLanguage="python"
        theme="vs-dark"
        onChange={onCodeChange}
        value={code}
      />
    </>
  );
}
