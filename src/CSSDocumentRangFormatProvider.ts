import {
  TextDocument, DocumentFormattingEditProvider,
  DocumentRangeFormattingEditProvider,
  FormattingOptions, CancellationToken,
  TextEdit, ExtensionContext, TextEditor,
  commands, window, DocumentSelector,
  languages, Position, Range
} from 'vscode';
import { Formater } from './Formater';
import { FormaterProvider } from './FormaterProvider';
export class CSSDocumentRangFormatProvider implements DocumentRangeFormattingEditProvider {
  private format: Formater;
  constructor(format: Formater = new FormaterProvider()) {
    this.format = format;
  }

  provideDocumentRangeFormattingEdits(document: TextDocument, range: Range, options: FormattingOptions, token: CancellationToken): TextEdit[] | Thenable<TextEdit[]> {
    if (document.validateRange(range)) {
      let originText = document.getText(range);
      let formattedText: string = this.format.css(originText, options);
      let textEdits: TextEdit[] = [];
      let reformated = TextEdit.replace(range, formattedText);
      textEdits.push(reformated);
      return textEdits;
    }
    return null;
  }
}
