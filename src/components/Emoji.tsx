import * as React from "react";
import { Fragment } from "react";

interface EmojiProps {
  emoiji: string;
  label: string;
}

const Emoji = ({ emoiji, label }: EmojiProps) => {
  return (
    <Fragment>
      <span
        role="img"
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
        style={{ fontSize: "1.5rem", margin: "0.5rem" }}
      >
        {emoiji}
      </span>
    </Fragment>
  );
};

export { Emoji };
