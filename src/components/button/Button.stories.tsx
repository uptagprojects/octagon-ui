// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
 
import Button from './Button';
import Container from '../container/Container';
 
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    fullWidth: {
      control: { type: 'boolean' }
    }
  }
};
 
export default meta;

type Story = StoryObj<typeof Button>;
 
export const Default: Story = {
  args: {
    label: 'button',
  }
};

export const ButtonTypes: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div>
      {[ 'primary', 'secondary', 'tertiary' ].map((variant) => (
        <Button {...args} variant={variant as 'primary' | 'secondary' | 'tertiary'} label={`${variant} button`} />
      ))}
    </div>
  ),
};

export const ButtonSizes: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div>
      {[ "small", "medium", "large" ].map((size) => (
        <Button {...args} size={size as 'small' | 'medium' | 'large'} label={`${size} button`} />
      ))}
    </div>
  ),
};

export const ButtonWithIcon: Story = {
  args: {
    icon: 'Archive',
  },
  render: (args) => (
    <div>
      <Container>
        {[ "small", "medium", "large" ].map((size) => (
          <div>
            {["primary", "secondary", "tertiary"].map((variant) => (
            <Button
            {...args}
            variant={variant as 'primary' | 'secondary' | 'tertiary'}
            size={size as 'small' | 'medium' | 'large'}
            label={`${size} button`} />
            ))}
          </div>
        ))}
      </Container>
      {[ "small", "medium", "large" ].map((size) => ["primary", "secondary", "tertiary"].map((variant) => (
        <Button
          {...args}
          hideLabel
          variant={variant as 'primary' | 'secondary' | 'tertiary'}
          size={size as 'small' | 'medium' | 'large'}
          label={`icon only ${size} button`}
          />
      )))}
    </div>
  ),
}


export const FullWidthButton: Story = {
    args: {
        label: 'full width button',
        fullWidth: true
    },
}