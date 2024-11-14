import { MarkdownDiff } from './components/MarkdownDiff';
import './components/styles.css';

function App() {
  const oldText = `# Markdown Test Document

## Introduction
This is a **test** document to demonstrate markdown rendering with diffs.
We will remove this line completely.

### Features
- Basic formatting
- Lists and numbering
- *Italic* and **bold** text

## Conclusion
This is the end of our test.`;

  const newText = `# Markdown Test Document

## Introduction
This is a **test** document to demonstrate markdown rendering with diffs.
We have added this new line instead.

### Features
- Basic formatting
- Lists and numbering
- *Italic* and **bold** text
- Added a new feature item

## Conclusion
This is the end of our updated test.`;

  return (
    <div className="app">
      <h1>Markdown Diff Viewer</h1>
      <MarkdownDiff oldText={oldText} newText={newText} />
    </div>
  );
}

export default App;
