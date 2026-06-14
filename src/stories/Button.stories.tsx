import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";
import "./button.css";

// Moderne CSF3-Demo. Zeigt Stories, Controls (args/argTypes) und einen
// Interaction-Test via play() – passend zum Testing-Workshop.
const meta = {
  title: "Demo/Button",
  component: Button,
  args: {
    label: "Klick mich",
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
  args: { primary: true, label: "Primär" },
};

export const Secondary: Story = {
  args: { primary: false, label: "Sekundär" },
};

// Interaction-Test: klickt den Button und prüft, dass onClick aufgerufen wird.
export const ClickInteraction: Story = {
  args: { label: "Test mich" },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Test mich" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
