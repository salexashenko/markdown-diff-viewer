import React, { useMemo } from 'react';
import { MarkdownRenderer } from '../utils/MarkdownRenderer';
import './styles.css';

export interface MarkdownDiffProps {
  oldText: string;
  newText: string;
}

export const MarkdownDiff: React.FC<MarkdownDiffProps> = ({ oldText, newText }) => {
  const renderedDiff = useMemo(() => ({
    __html: MarkdownRenderer.renderWithDiff(oldText, newText)
  }), [oldText, newText]);

  return (
    <div className="markdown-diff-viewer">
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={renderedDiff}
      />
    </div>
  );
};
