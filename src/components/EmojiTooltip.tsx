import * as React from "react";
import { Emoji } from "./Emoji";

interface EmojiWithTooltipProps {
  symbol: string;
  label: string;
  toolTipBackgroundColor: string;
  toolTipTextColor: string;
  tooltipFontFamily: string;
  toolTipBorderRadius: string;
  toolTipFontSize: string;
  toolTipTopPosition: string;
}

const EmojiWithTooltip = ({
  symbol,
  label,
  toolTipBackgroundColor,
  toolTipTextColor,
  tooltipFontFamily,
  toolTipBorderRadius,
  toolTipFontSize,
  toolTipTopPosition,
}: EmojiWithTooltipProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Emoji emoiji={symbol} label={label} />
      {/* Tooltip */}
      <div
        style={{
          visibility: isHovered ? "visible" : "hidden",
          opacity: isHovered ? 1 : 0,
          position: "absolute",
          top: `${toolTipTopPosition}px`,
          left: "50%",
          zIndex: 999,
          transform: "translateX(-50%)",
          backgroundColor: toolTipBackgroundColor,
          color: toolTipTextColor,
          padding: "5px 10px",
          borderRadius: `${toolTipBorderRadius}px`,
          fontSize: `${toolTipFontSize}rem`,
          fontFamily: tooltipFontFamily,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export { EmojiWithTooltip };
