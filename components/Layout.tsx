import React, { ReactElement } from "react";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout): ReactElement {
  return (
    <>
      <div className="banner py-3">Share Text Online</div>
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
