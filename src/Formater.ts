import { FormattingOptions } from 'vscode';

export interface Formater {
  css(code: string, options: FormattingOptions): string;
}
