import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./button.js";

const meta: Meta = {
  title: "Components/Button",
  component: "chopstick-button",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Button",
  },
  render: (args) => html`<chopstick-button label=${args.label}></chopstick-button>`,
};

export const CustomLabel: Story = {
  args: {
    label: "Click me",
  },
  render: (args) => html`<chopstick-button label=${args.label}></chopstick-button>`,
};