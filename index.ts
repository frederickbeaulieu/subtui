import {
  BoxRenderable,
  TextRenderable,
  createCliRenderer,
} from "@opentui/core";

const renderer = await createCliRenderer({
  exitOnCtrlC: true,
  backgroundColor: "#1131E9",
});

let count = 0;
const counter = new TextRenderable(renderer, {
  id: "counter",
  content: "Count  0",
  fg: "#FFFFFF",
});

const panel = new BoxRenderable(renderer, {
  width: 42,
  height: 9,
  backgroundColor: "#1131E9",
  alignItems: "center",
  justifyContent: "center",
});
const content = new BoxRenderable(renderer, {
  width: 38,
  height: 7,
  backgroundColor: "#2947F0",
  padding: 1,
  flexDirection: "column",
  gap: 1,
  alignItems: "center",
});

content.add(
  new TextRenderable(renderer, { content: "Hello, OpenTUI!", fg: "#DCE3FF" }),
);
content.add(counter);
content.add(
  new TextRenderable(renderer, {
    content: "left/right change | q quit",
    fg: "#AEBBFF",
  }),
);
panel.add(content);
renderer.root.add(panel);

renderer.keyInput.on("keypress", (key) => {
  if (key.name === "q") {
    renderer.destroy();
    return;
  }

  if (key.name === "left") count--;
  else if (key.name === "right") count++;
  else return;

  counter.content = `Count  ${count}`;
});

