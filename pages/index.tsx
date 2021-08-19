import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import swal from "@sweetalert/with-react";
import copy from "copy-to-clipboard";

const Home: NextPage = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  async function handleEditor() {
    const editorContent = editorRef.current?.innerHTML;

    const response = await fetch("api/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editorContent }),
    });
    console.log(
      "🚀 ~ file: index.tsx ~ line 18 ~ handleEditor ~ response",
      response
    );

    if (response.ok) {
      const { id } = await response.json();
      copy(window.location.href + `${id}`);
      swal({
        title: "Text ready for share",
        text: "Link copied to clipboard",
        icon: "success",
        buttons: false,
      });
    } else {
      swal({
        title: "Something went wrong",
        text: "Please try again",
        icon: "warning",
        buttons: false,
      });
    }
  }

  return (
    <>
      <Head>
        <title>PasteIt:ShareIt</title>
        <meta
          name="description"
          content="share text online fast with one click of button"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container pb-10">
        <div className="h-screen-80 pb-20">
          <div ref={editorRef} className="editor" contentEditable={true}></div>
          <button onClick={handleEditor} className="btn-dark">
            Share it
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
