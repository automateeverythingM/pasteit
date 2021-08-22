import React, { ReactElement, ReactNode, useState } from "react";

interface IHoverText {
  text: string;
  children: ReactNode;
}

export default function HoverText({
  text,
  children,
}: IHoverText): ReactElement {
  const [show, setShow] = useState(0);
  return (
    <span className="">
      {children}
      <span className="">{text}</span>
    </span>
  );
}
