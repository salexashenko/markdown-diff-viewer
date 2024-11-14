# Markdown Diff Viewer Component Design

## Component Structure

```typescript
// Core Components
1. MarkdownDiff (main component)
   - Props: oldText, newText
   - Responsibilities:
     * Coordinate diff generation and rendering
     * Manage state of processed diffs

2. DiffProcessor (utility)
   - Functions:
     * generateDiff(oldText: string, newText: string)
     * splitIntoTokens(text: string)
     * mergeDiffWithMarkdown(diff: Diff[], markdown: string)

3. MarkdownRenderer (utility)
   - Functions:
     * renderMarkdown(text: string)
     * wrapDiffElements(html: string, diffRanges: DiffRange[])
```

## Data Flow

1. Input markdown texts are received by MarkdownDiff
2. DiffProcessor generates character-level diffs
3. Diffs are merged with markdown structure
4. Markdown is rendered with diff annotations
5. Final HTML is wrapped with diff styling elements

## Types

```typescript
interface DiffRange {
  start: number;
  end: number;
  type: 'addition' | 'deletion';
  content: string;
}

interface ProcessedDiff {
  html: string;
  diffRanges: DiffRange[];
}
```

## Algorithm Overview

1. Text Processing:
   - Split input into tokens (words/spaces)
   - Generate character-level diffs
   - Track positions of changes

2. Markdown Integration:
   - Parse markdown to HTML
   - Insert diff markers at tracked positions
   - Apply diff styling

3. Rendering:
   - Render final HTML with diff highlights
   - Apply CSS classes for visual representation

## CSS Structure

```css
.diff-deletion {
  background-color: #ffd7d7;
  text-decoration: line-through;
  color: #b91c1c;
}

.diff-addition {
  background-color: #dcfce7;
  color: #166534;
}
```

## Implementation Steps

1. Create basic component structure
2. Implement diff algorithm
3. Add markdown rendering
4. Integrate diff with markdown
5. Apply styling
6. Add optimization (memoization)
7. Add error handling
