import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";
import "./button.css";

// Modern CSF3 demo. Shows stories, controls (args/argTypes) and an
// interaction test via play() – fitting for the testing workshop.
const meta = {
  title: "Demo/Button",
  component: Button,
  args: {
    label: "Click me",
    onClick: fn(),
  },
  argTypes: {
    primary: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { primary: true, label: "Primary" },
};

export const Secondary: Story = {
  args: { primary: false, label: "Secondary" },
};

// Interaction test: clicks the button and checks that onClick is called.
export const ClickInteraction: Story = {
  args: { label: "Test me" },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Test me" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
