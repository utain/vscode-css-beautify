import {
  TextDocument, DocumentFormattingEditProvider,
  DocumentRangeFormattingEditProvider,
  FormattingOptions, CancellationToken,
  TextEdit, ExtensionContext, TextEditor,
  commands, window, DocumentSelector,
  languages, Position, Range
} from 'vscode';
import { getRange } from './utils';
import { Formater } from './Formater';
import { FormaterProvider } from './FormaterProvider';

export class CSSDocumentFormatPovider implements DocumentFormattingEditProvider {
  private format: Formater;
  constructor(format: Formater = new FormaterProvider()) {
    this.format = format;
  }

  provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): TextEdit[] | Thenable<TextEdit[]> {
    let originText: string = document.getText();
    let formattedText: string = this.format.css(originText, options);

    var range = getRange(document);
    let textEdits: TextEdit[] = [];
    let reformated = TextEdit.replace(range, formattedText);
    textEdits.push(reformated);
    return textEdits;
  }
}
