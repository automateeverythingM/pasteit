import React, { ReactElement, useEffect, useRef } from "react";
import { GetServerSideProps } from "next";
import { MdContentCopy } from "react-icons/md";
import Tooltip from "react-simple-tooltip";
import copy from "copy-to-clipboard";
import swal from "@sweetalert/with-react";

interface IReadText {
  text: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(process.env.HOST + `api/${id}`);
  if (!response.ok) return { notFound: true };

  const body = await response.json();

  return {
    props: {
      text: body.text,
    }, // will be passed to the page component as props
  };
};

export default function ReadText({ text }: IReadText): ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);
  function handleCopy() {
    const content = contentRef.current?.innerText;
    if (content) copy(content);
    swal({
      title: "Copied",
      text: "Text copied to clipboard",
      icon: "success",
      buttons: false,
    });
  }

  useEffect(() => {
    if (contentRef.current) contentRef.current.innerHTML = text;
  }, []);

  return (
    <main className="container">
      <div className="relative">
        <Tooltip
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            whiteSpace: "nowrap",
          }}
          content="copy to clipboard"
        >
          <div className="p-4 bg-green-900 rounded-full text-trueGray-400  hover:text-white">
            <MdContentCopy className="" size="1.5rem" onClick={handleCopy} />
          </div>
        </Tooltip>

        <div className="content" ref={contentRef}></div>
      </div>
    </main>
  );
}
