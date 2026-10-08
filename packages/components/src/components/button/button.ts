import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./button.styles.js";

@customElement("chopstick-button")
export class ChopstickButton extends LitElement {
  static override styles = [buttonStyles];

  @property({ type: String })
  label = "Button";

  override render() {
    return html`<button>${this.label}</button>`;
  }
}