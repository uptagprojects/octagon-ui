import React from 'react';
import { icons } from 'lucide-react';
import { EditorCommand } from './EditorCommand';

interface ToolbarButtonProps {
  command: EditorCommand;
  onClick: () => void;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ command, onClick }) => {
  const IconComponent = icons[command.icon as keyof typeof icons];
  
  return (
    <li className="oct-text-editor__toolbar-button">
      <button
        onClick={onClick}
        className="oct-text-editor__toolbar-button__button"
        aria-label={command.label}
        type="button"
        role="button"
      >
        <IconComponent aria-hidden="true" />
      </button>
    </li>
  );
};

interface TextEditorToolbarProps {
  commands: EditorCommand[];
  onCommandExecute: (command: EditorCommand) => void;
}

export const TextEditorToolbar: React.FC<TextEditorToolbarProps> = ({ commands, onCommandExecute }) => {
  return (
    <menu 
      role="toolbar" 
      aria-label="Text formatting options"
      className="oct-text-editor__toolbar"
    >
      {commands.map((command) => (
        <ToolbarButton
          key={command.label}
          command={command}
          onClick={() => onCommandExecute(command)}
        />)
      )}
    </menu>
  );
};