import React, { useRef } from 'react';
import { Toolbar } from './Toolbar';
import { Preview } from './Preview';
import remarkGfm from 'remark-gfm';
import { PluggableList } from 'unified';
import {
  BoldCommand,
  ItalicCommand,
  HeadingCommand,
  ListCommand,
  LinkCommand,
  ImageCommand,
  CodeBlockCommand,
  QuoteCommand,
  HorizontalRuleCommand,
  EditorCommand,
} from './EditorCommand';
import TextArea, { TextAreaRef } from '../text-area/TextArea';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  remarkPlugins?: PluggableList;
}

const TextEditor: React.FC<EditorProps> = ({ 
  value, 
  onChange,
  remarkPlugins = [remarkGfm]
}) => {
  const textAreaRef = useRef<TextAreaRef>(null);

  const commands = [
    new BoldCommand(),
    new ItalicCommand(),
    new HeadingCommand(),
    new ListCommand(),
    new LinkCommand(),
    new ImageCommand(),
    new CodeBlockCommand(),
    new QuoteCommand(),
    new HorizontalRuleCommand(),
  ];

  const handleCommand = (command: EditorCommand) => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    console.log(command);

    const { text, newSelection } = command.execute(
      value,
      textarea.selectionStart,
      textarea.selectionEnd
    );
    
    onChange(text);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        newSelection.start,
        newSelection.end
      );
    }, 0);
  };

  return (
    <div className="h-full flex flex-col">
      <Toolbar commands={commands} onCommandExecute={handleCommand} />
      
      <div className="flex-1 grid grid-cols-2 gap-4 p-4 overflow-hidden">
        <div className="h-full">
          <TextArea
            ref={textAreaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-full p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono"
            placeholder="Write your markdown here..."
            label="Markdown editor"
            hideLabel={true}
            role="textbox"
            aria-multiline="true"
          />
        </div>
        
        <Preview content={value} remarkPlugins={remarkPlugins} />
      </div>
    </div>
  );
};


export default TextEditor;