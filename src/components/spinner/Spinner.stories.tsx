// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
 
const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ['autodocs'],
  title: 'Components/Spinner'
};

 
export default meta;

type Story = StoryObj<typeof Spinner>;
 
export const Default: Story = {};
