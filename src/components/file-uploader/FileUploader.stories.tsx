// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import FileUploader from './FileUploader';
 
const meta: Meta<typeof FileUploader> = {
  component: FileUploader,
  tags: ['autodocs'],
  title: 'Components/FileUploader',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    disabled: {
        control: { type: 'boolean' }
    }
  }
};

 
export default meta;

type Story = StoryObj<typeof FileUploader>;
 
export const Default: Story = {
  args: {
    label: 'Upload file'
  },
  argTypes: {
    label: {
        control: { type: 'text' }
    },
    size: {
        control: { type: 'select' }
    },
    disabled: {
        control: { type: 'boolean' }
    }
  }
};

export const FileUploaderSizes: Story = {
  args: {
  },
  render: (args) => (
      <div>
          {["small", "medium", "large"].map((size) => (
              <FileUploader key={size} size={size as "small" | "medium" | "large"} label={`Upload file (${size})`} />
          ))}
      </div>
  ),
};
