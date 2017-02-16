'use strict';

import {
  ExtensionContext,
  commands, window,
  languages
} from 'vscode';
import { CSSDocumentFormatPovider } from './CSSDocumentFormatPovider';
import { CSSDocumentRangFormatProvider } from './CSSDocumentRangFormatProvider';

export function activate(context: ExtensionContext) {
  let sel = ['css', 'sass', 'scss', 'less'];
  console.log('Actived vscode-stylesheet-beautify!');
  let disposable = commands.registerCommand('extension.formater', () => {
    window.showInformationMessage('Actived vscode-stylesheet-beautify!');
  });
  context.subscriptions.push(disposable);
  let disposableFormatDoc = languages.registerDocumentFormattingEditProvider(sel, new CSSDocumentFormatPovider());
  let disposableFormatRang = languages.registerDocumentRangeFormattingEditProvider(sel, new CSSDocumentRangFormatProvider());
  context.subscriptions.push(disposableFormatDoc);
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log('Deactived vscode-stylesheet-beautify!');
}
