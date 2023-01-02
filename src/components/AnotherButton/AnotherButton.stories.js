import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "teal",
  size: "lg",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "red",
  children: "Danger",
};
