"use client";

import { ReactNode } from "react";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

const EmojiWrapper = ({ children }: { children: ReactNode }) => {
  return <EmojiProvider data={emojiData}>{children}</EmojiProvider>;
};

export default EmojiWrapper;
