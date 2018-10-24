import { Widget } from "@phosphor/widgets";
import { ICommandPalette } from "@jupyterlab/apputils";
class SampleWidget extends Widget {
  constructor() {
    super();
    this.node.textContent = MAGIC_CONSTANT;
  }
}

export default {
  id: "webpack",
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app, palette) => {
    console.log("Starting webpack build extension");
    app.commands.addCommand("webpack:sample", {
      label: "Sample widget",
      execute: () => {
        app.shell.addToMainArea(new SampleWidget());
      }
    });
    palette.addItem({ command: "webpack:sample", category: "Sample" });
  }
};
