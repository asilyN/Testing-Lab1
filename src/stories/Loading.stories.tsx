import type { Meta, StoryObj } from "@storybook/react";
import {Loading} from "../components/Loading";

const meta: Meta<typeof Loading> = {
    title: "Components/Loading",
    component: Loading,
    argTypes: {
      text: {
        control: {
          type: "text",
        },
      },
    },
  };
  
  export default meta;
  
  type Story = StoryObj<typeof Loading>;

  export const Default: Story = {
    args: {
        text: "Loading...",
        },
  };

  export const PleaseWait: Story = {
    args: {
        text: "Please wait...",
        },
  };

  export const Redirecting : Story = {
    args: {
        text: "Redirecting...",
        },
  };
  
  