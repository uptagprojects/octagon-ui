import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PluggableList } from 'react-markdown/lib';
import Frame from '../frame/Frame';
import Card from '../card/Card';


interface PreviewProps {
  content: string;
  remarkPlugins?: PluggableList
}

export const Preview: React.FC<PreviewProps> = ({ content, remarkPlugins = [] }) => {
  return (
    <div
      className="oct-text-editor__preview"
      role="region"
      aria-label="Preview"
    >
      <ReactMarkdown
        components={{
          h1: 'h2',
          img: ({ src, alt, ...props }) => <Frame aspectRatio="square" caption={alt}><img src={src} alt={alt} className="oct-text-editor__image" {...props} /></Frame>,
          video: ({ src, ...props }) => <Frame aspectRatio="landscape"><video src={src} className="oct-text-editor__video" {...props} /></Frame>,
          code: ({ node, inline, className, children, ...props }) => {
            
            if (inline) {
              return <code className={className} {...props}>{children}</code>;
            }
            
            return (
              <Card>
                <code className={className} {...props}>{children}</code>
              </Card>
            )
          }
        }}
      remarkPlugins={remarkPlugins}>
        {content}
      </ReactMarkdown>
    </div>
  );
};