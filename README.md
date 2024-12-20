# Emoji Pack

## Authors

- [@yadavashishdhirendra](https://github.com/AshishY1920)

## Demo

![App Screenshot](https://ashishy1920.github.io/Bag-manifest/ViteReactTS-GoogleChrome2024-12-2015-27-22online-video-cutter.com-ezgif.com-video-to-gif-converter.gif)

## Usage/Examples

```javascript
import { EmojiCollection } from "emoiji-pack";

function App() {
  return (
    <div>
      <EmojiCollection columns={5} width="20" toolTipTopPosition="35" />
    </div>
  );
}

export default App;
```

## Props

| Name          | Type     | Description                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `emojis`      | `array`  | An array of emojis, where each emoji is an object with `symbol` and `label` properties (example below). |
| `columns`     | `number` | The number of columns to display. Default value is `5`.                                                 |
| `borderColor` | `string` | Border color for customization according to your UI.                                                    |
| `borderWidth` | `number` | Border width. Default value is `1`.                                                                     |

### Example for `emojis`

```javascript
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
```
