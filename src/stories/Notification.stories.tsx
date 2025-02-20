import { Meta, StoryFn } from "@storybook/react";
import Notification from "../components/Notification";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    type: {
      control: { type: "select", options: ["success", "error", "warning"] }, // Removed "info"
    },
  },
} satisfies Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "Operation successful!",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  message: "An error occurred!",
  type: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning!",
  type: "warning",
};
