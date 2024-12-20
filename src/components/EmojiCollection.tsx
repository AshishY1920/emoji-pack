import * as React from "react";
import { Fragment } from "react";
import { EmojiWithTooltip } from "./EmojiTooltip";

interface EmojiCollectionProps {
  emojis?: { symbol: string; label: string }[];
  columns?: number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: string;
  gap?: string;
  width?: string;
  toolTipBackgroundColor?: string;
  toolTipTextColor?: string;
  tooltipFontFamily?: string;
  toolTipBorderRadius?: string;
  toolTipFontSize?: string;
  toolTipTopPosition?: string;
}

const defaultEmojis = [
  { symbol: "😀", label: "Grinning Face" },
  { symbol: "🎉", label: "Party Popper" },
  { symbol: "❤️", label: "Red Heart" },
  { symbol: "🔥", label: "Fire" },
  { symbol: "🚀", label: "Rocket" },
  { symbol: "😒", label: "Sad" },
  { symbol: "🤣", label: "Funny" },
  { symbol: "💋", label: "Kiss" },
];

const EmojiCollection = ({
  emojis = defaultEmojis,
  columns = 5,
  borderColor = "rgba(0, 0, 0, 0.025)",
  borderWidth = 1,
  borderRadius = "5",
  gap = "10",
  width = "30",
  toolTipBackgroundColor = "#1c1c1c",
  toolTipTextColor = "white",
  tooltipFontFamily = "cursive",
  toolTipBorderRadius = "5",
  toolTipFontSize = "0.875rem",
  toolTipTopPosition = "-30",
}: EmojiCollectionProps) => {
  let col = `repeat(${columns}, 1fr)`; // Create the grid for columns

  return (
    <Fragment>
      <div
        style={{
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          width: `${width}rem`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: col,
            gap: `${gap}px`,
            padding: "1rem",
          }}
        >
          {emojis?.map((emoji, index) => (
            <EmojiWithTooltip
              key={index}
              symbol={emoji.symbol}
              label={emoji.label}
              toolTipBackgroundColor={toolTipBackgroundColor}
              toolTipTextColor={toolTipTextColor}
              tooltipFontFamily={tooltipFontFamily}
              toolTipBorderRadius={toolTipBorderRadius}
              toolTipFontSize={toolTipFontSize}
              toolTipTopPosition={toolTipTopPosition}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export { EmojiCollection };
