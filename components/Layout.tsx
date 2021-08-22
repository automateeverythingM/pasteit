import React, { ReactElement } from "react";
import PaperPlane from "./icons/Send";
import Link from "next/link";
interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout): ReactElement {
  return (
    <>
      <div className="banner py-5">
        <Link href="/">
          <a className="flex">
            <PaperPlane fill="white" />{" "}
            <span className="ml-3">Share Text Online</span>
          </a>
        </Link>
      </div>
      {children}
      <footer className="footer">
        visit me on{" "}
        <a
          className="text-yellow-300 pl-2"
          href="https://github.com/automateeverythingM"
        >
          automateeverythingM
        </a>
      </footer>
    </>
  );
}
