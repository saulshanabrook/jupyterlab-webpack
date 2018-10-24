import { Widget } from "@phosphor/widgets";
class SampleWidget extends Widget {
  constructor() {
    super();
    this.node.textContent = MAGIC_CONSTANT;
  }
}

export default {
  id: "webpack",
  autoStart: true,
  requires: [],
  activate: app => {
    console.log("Starting webpack build extension");
    app.commands.addCommand(command, {
      label: "Sample widget",
      execute: () => {
        app.shell.addToMainArea(new SampleWidget());
      }
    });
  }
};
