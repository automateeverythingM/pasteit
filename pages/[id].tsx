import React, { ReactElement, useEffect, useRef } from "react";
import { GetServerSideProps } from "next";
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
  useEffect(() => {
    if (contentRef.current) contentRef.current.innerHTML = text;
  }, []);
  return (
    <main className="container">
      <div className="content" ref={contentRef}></div>;
    </main>
  );
}
