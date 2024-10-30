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
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label={command.label}
      type="button"
      role="button"
    >
      <IconComponent size={20} aria-hidden="true" />
    </button>
  );
};

interface ToolbarProps {
  commands: EditorCommand[];
  onCommandExecute: (command: EditorCommand) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ commands, onCommandExecute }) => {
  return (
    <div 
      role="toolbar" 
      aria-label="Text formatting options"
      className="border-b bg-white p-2 flex gap-1"
    >
      <div role="group" aria-label="Text formatting">
        <ToolbarButton
          command={commands[0]} // Bold
          onClick={() => onCommandExecute(commands[0])}
        />
        <ToolbarButton
          command={commands[1]} // Italic
          onClick={() => onCommandExecute(commands[1])}
        />
      </div>

      <div role="group" aria-label="Structure">
        <ToolbarButton
          command={commands[2]} // Heading
          onClick={() => onCommandExecute(commands[2])}
        />
        <ToolbarButton
          command={commands[3]} // List
          onClick={() => onCommandExecute(commands[3])}
        />
        <ToolbarButton
          command={commands[7]} // Quote
          onClick={() => onCommandExecute(commands[7])}
        />
        <ToolbarButton
          command={commands[8]} // Horizontal Rule
          onClick={() => onCommandExecute(commands[8])}
        />
      </div>

      <div role="group" aria-label="Insert">
        <ToolbarButton
          command={commands[4]} // Link
          onClick={() => onCommandExecute(commands[4])}
        />
        <ToolbarButton
          command={commands[5]} // Image
          onClick={() => onCommandExecute(commands[5])}
        />
        <ToolbarButton
          command={commands[6]} // Code Block
          onClick={() => onCommandExecute(commands[6])}
        />
      </div>
    </div>
  );
};