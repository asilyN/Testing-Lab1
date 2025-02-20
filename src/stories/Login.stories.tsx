import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

export const SuccessLogin: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText('Enter your email'), 'mamamo@gmail.com', { delay: 100 });
    await userEvent.type(canvas.getByPlaceholderText('Enter your password'), 'mamamo', { delay: 100 });

    await userEvent.click(canvas.getByText('Login'));

    await waitFor(() => expect(canvas.getByText('Logging in...')).toBeInTheDocument());
  },
};

export const FailLogin: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      await userEvent.type(canvas.getByPlaceholderText('Enter your email'), 'kweencarmine@tuden.com', { delay: 100 });
      await userEvent.type(canvas.getByPlaceholderText('Enter your password'), 'longlivekweencarmine', { delay: 100 });
  
      await userEvent.click(canvas.getByText('Login'));
  
      await waitFor(() => expect(canvas.getByText('Logging in...')).toBeInTheDocument());
    },
  };
