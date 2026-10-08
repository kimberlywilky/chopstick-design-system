import { css } from "lit";

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    background-color: var(--color-primary, #5B21B6);
    color: var(--color-on-primary, #FFFFFF);
  }
`;