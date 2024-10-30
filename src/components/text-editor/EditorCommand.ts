export interface EditorCommand {
  execute(text: string, selectionStart: number, selectionEnd: number): {
    text: string;
    newSelection: { start: number; end: number };
  };
  label: string;
  icon: string;
}

export class BoldCommand implements EditorCommand {
  label = 'Bold';
  icon = 'Bold';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '**';
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = `${text.substring(0, selectionStart)}${marker}${selectedText}${marker}${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionEnd + marker.length,
      },
    };
  }
}

export class ItalicCommand implements EditorCommand {
  label = 'Italic';
  icon = 'Italic';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '*';
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = `${text.substring(0, selectionStart)}${marker}${selectedText}${marker}${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionEnd + marker.length,
      },
    };
  }
}

export class HeadingCommand implements EditorCommand {
  label = 'Heading';
  icon = 'Heading';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '### ';
    const newText = `${text.substring(0, selectionStart)}${marker}${text.substring(selectionStart)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionEnd + marker.length,
      },
    };
  }
}

export class ListCommand implements EditorCommand {
  label = 'List';
  icon = 'List';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '- ';
    const newText = `${text.substring(0, selectionStart)}${marker}${text.substring(selectionStart)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionEnd + marker.length,
      },
    };
  }
}

export class LinkCommand implements EditorCommand {
  label = 'Link';
  icon = 'Link';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = `${text.substring(0, selectionStart)}[${selectedText}](url)${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionEnd + 2,
        end: selectionEnd + 5,
      },
    };
  }
}

export class ImageCommand implements EditorCommand {
  label = 'Image';
  icon = 'Image';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = `${text.substring(0, selectionStart)}![${selectedText || 'alt text'}](url)${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionEnd + 2,
        end: selectionEnd + 5,
      },
    };
  }
}

export class CodeBlockCommand implements EditorCommand {
  label = 'Code Block';
  icon = 'Code';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = `${text.substring(0, selectionStart)}\`\`\`\n${selectedText}\n\`\`\`${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + 4,
        end: selectionEnd + 4,
      },
    };
  }
}

export class QuoteCommand implements EditorCommand {
  label = 'Quote';
  icon = 'Quote';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '> ';
    const newText = `${text.substring(0, selectionStart)}${marker}${text.substring(selectionStart)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionEnd + marker.length,
      },
    };
  }
}

export class HorizontalRuleCommand implements EditorCommand {
  label = 'Horizontal Rule';
  icon = 'Divide';

  execute(text: string, selectionStart: number, selectionEnd: number) {
    const marker = '\n---\n';
    const newText = `${text.substring(0, selectionStart)}${marker}${text.substring(selectionEnd)}`;
    
    return {
      text: newText,
      newSelection: {
        start: selectionStart + marker.length,
        end: selectionStart + marker.length,
      },
    };
  }
}