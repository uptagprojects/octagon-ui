import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { TextEditorToolbar } from './TextEditorToolbar';
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
import Card from '../card/Card';
import Modal from '../modal/Modal';
import FileUploader from '../file-uploader/FileUploader';
import MdViewer from '../md-viewer/MdViewer';
import "./TextEditor.css";



interface EditorProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange" | "size"> {
  value: string;
  onChange: (value: string) => void;
  uploadRequest?: (file: File) => Promise<string>;
}

const TextEditor: React.FC<EditorProps> = ({ 
  value, 
  onChange,
  uploadRequest,
  ...textAreaProps
}) => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [pendingImageCommand, setPendingImageCommand] = useState<ImageCommand | null>(null);

  
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
     if (command instanceof ImageCommand) {
      setIsImageDialogOpen(true);
      setPendingImageCommand(command);
      return;
    }

    const textarea = textAreaRef.current;
    if (!textarea) return;

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

  const handleImageSelect = useCallback(([imageFile]: File[]) => {
    const textarea = textAreaRef.current;
    if (!textarea || !pendingImageCommand) return;

    let imageFileURL = URL.createObjectURL(imageFile);

    uploadRequest?.(imageFile).then((url) => {
      onChange(value.replace(imageFileURL, url));
    });

    const { text, newSelection } = pendingImageCommand.execute(
      value,
      textarea.selectionStart,
      textarea.selectionEnd,
      imageFileURL
    );
    
    onChange(text);
    setIsImageDialogOpen(false);
    setPendingImageCommand(null);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        newSelection.start,
        newSelection.end
      );
    }, 0);
  }, [value, onChange, setIsImageDialogOpen, pendingImageCommand]);

  return (
    <div className="oct-text-editor">
      <TextEditorToolbar commands={commands} onCommandExecute={handleCommand} />
      
      <TextArea
        ref={textAreaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="oct-text-editor__textarea"
        placeholder="Escribe aquí..."
        label="Markdown editor"
        hideLabel={true}
        role="textbox"
        aria-multiline="true"
        {...textAreaProps}
      />

      <Card
        className="oct-text-editor__preview"
        aria-label="Preview">
        <MdViewer content={value} />
      </Card>

      <Modal
        open={isImageDialogOpen}
        onClose={() => {
          setIsImageDialogOpen(false);
          setPendingImageCommand(null);
        }}
        closeLabel='Cancelar'
        header={{
          title: "Agregar Imagen"
        }}>
          <FileUploader multiple={false} mimeType={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/gif': ['.gif'],
            'image/svg+xml': ['.svg'],
            'image/webp': ['.webp']
          }} label="Sube tu imagen (.jpg, .png, .webp o .svg)" onUploadFiles={handleImageSelect} />
      </Modal>
    </div>
  );
};


export default TextEditor;