import React, { Fragment, Suspense, useEffect, useState, createElement } from 'react';
import * as prod from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypeKatex from 'rehype-katex';
import remarkRehype from 'remark-rehype';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed'
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import rehypeReact from 'rehype-react';

import "./MdViewer.css";
import Container from '../container/Container';
import Progress from '../progress/Progress';
import rehypeHighlight from 'rehype-highlight';

interface MdPreviewProps {
  content: string;
  loader?: React.ReactNode;
}

const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs}

function useProcessor(text: string) {
  const [Content, setContent] = useState(createElement(Fragment))
  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, {
        allowDangerousHtml: true
      })
      .use(rehypeHighlight)
      .use(rehypeKatex)
      .use(rehypeUnwrapImages)
      .use(rehypeReact, production)
      .process(text)
      .then((file) => {
        setContent(file.result)
      })
  }, [text])

  return Content
}

const MdViewer: React.FC<MdPreviewProps> = ({ content, loader }) => {
  return (
    <Suspense fallback={loader ?? <Progress label="cargando" size="large" />}>
      <Container className="oct-md-viewer">
        {useProcessor(content)}
      </Container>
    </Suspense>
  );
};

export default MdViewer;