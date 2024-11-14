interface DiffRange {
  start: number;
  end: number;
  type: 'addition' | 'deletion';
  content: string;
}

interface DiffChange {
  type: 'addition' | 'deletion' | 'equal';
  value: string;
}

export class DiffProcessor {
  private static splitIntoWords(text: string): string[] {
    // Split text into words, whitespace, and punctuation while preserving everything
    return text.split(/(\s+|\b|[.,!?;])/g).filter(s => s.length > 0);
  }

  private static findLCS(words1: string[], words2: string[]): number[][] {
    const m = words1.length;
    const n = words2.length;
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (words1[i - 1] === words2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp;
  }

  private static backtrack(dp: number[][], words1: string[], words2: string[], i: number, j: number): DiffChange[] {
    if (i === 0 && j === 0) {
      return [];
    }
    if (i === 0) {
      return [...this.backtrack(dp, words1, words2, i, j - 1), { type: 'addition', value: words2[j - 1] }];
    }
    if (j === 0) {
      return [...this.backtrack(dp, words1, words2, i - 1, j), { type: 'deletion', value: words1[i - 1] }];
    }
    if (words1[i - 1] === words2[j - 1]) {
      return [...this.backtrack(dp, words1, words2, i - 1, j - 1), { type: 'equal', value: words1[i - 1] }];
    }
    if (dp[i][j - 1] > dp[i - 1][j]) {
      return [...this.backtrack(dp, words1, words2, i, j - 1), { type: 'addition', value: words2[j - 1] }];
    }
    return [...this.backtrack(dp, words1, words2, i - 1, j), { type: 'deletion', value: words1[i - 1] }];
  }

  static generateDiff(oldText: string, newText: string): DiffChange[] {
    const words1 = this.splitIntoWords(oldText);
    const words2 = this.splitIntoWords(newText);
    const dp = this.findLCS(words1, words2);
    return this.backtrack(dp, words1, words2, words1.length, words2.length);
  }

  static getDiffRanges(diff: DiffChange[]): DiffRange[] {
    const ranges: DiffRange[] = [];
    let currentRange: DiffRange | null = null;
    let position = 0;

    for (const change of diff) {
      if (change.type === 'equal') {
        if (currentRange) {
          ranges.push(currentRange);
          currentRange = null;
        }
        position += change.value.length;
        continue;
      }

      if (!currentRange || currentRange.type !== change.type) {
        if (currentRange) {
          ranges.push(currentRange);
        }
        currentRange = {
          start: position,
          end: position + change.value.length,
          type: change.type,
          content: change.value
        };
      } else {
        currentRange.end = position + change.value.length;
        currentRange.content += change.value;
      }
      position += change.value.length;
    }

    if (currentRange) {
      ranges.push(currentRange);
    }

    return ranges;
  }

  static applyDiffToMarkdown(html: string, ranges: DiffRange[]): string {
    let result = html;
    let offset = 0;

    for (const range of ranges) {
      const startPos = range.start + offset;
      const endPos = range.end + offset;
      const className = range.type === 'addition' ? 'diff-addition' : 'diff-deletion';
      const spanStart = `<span class="${className}">`;
      const spanEnd = '</span>';

      result = result.slice(0, startPos) + spanStart + result.slice(startPos, endPos) + spanEnd + result.slice(endPos);
      offset += spanStart.length + spanEnd.length;
    }

    return result;
  }
}
