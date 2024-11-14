import MarkdownIt from 'markdown-it';
import { DiffProcessor } from './DiffProcessor';

export class MarkdownRenderer {
  private static md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  });

  static renderWithDiff(oldText: string, newText: string): string {
    // First, get the diffs between the texts
    const diff = DiffProcessor.generateDiff(oldText, newText);

    // Create combined text with HTML comment markers before markdown rendering
    let combinedText = '';
    diff.forEach(change => {
      switch (change.type) {
        case 'equal':
          combinedText += change.value;
          break;
        case 'deletion':
          // Use HTML comments as markers that won't be affected by markdown
          combinedText += `<!--DEL_START--><span class="diff-deletion">${change.value}</span><!--DEL_END-->`;
          break;
        case 'addition':
          // Use HTML comments as markers that won't be affected by markdown
          combinedText += `<!--ADD_START--><span class="diff-addition">${change.value}</span><!--ADD_END-->`;
          break;
      }
    });

    // Render markdown
    let renderedHtml = this.md.render(combinedText);

    // Clean up any nested spans that might have been created
    renderedHtml = renderedHtml
      .replace(/(<span[^>]*>)\s*<span([^>]*)>/g, '$1')
      .replace(/<\/span>\s*(<\/span>)/g, '$1')
      .replace(/<!--DEL_START-->|<!--DEL_END-->|<!--ADD_START-->|<!--ADD_END-->/g, '');

    return renderedHtml;
  }

  static renderMarkdown(text: string): string {
    return this.md.render(text);
  }
}
