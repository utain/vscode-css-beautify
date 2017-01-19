import { Range, Position, TextDocument, FormattingOptions, TextEditorOptions } from 'vscode';

export function getRange(document: TextDocument): Range {
  let start: Position = new Position(0, 0);
  let endLine = document.lineCount - 1;
  let end: Position = new Position(endLine, document.lineAt(endLine).text.length);
  return new Range(start, end);
}
