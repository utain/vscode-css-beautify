import { FormattingOptions } from 'vscode';
import * as Beautify from 'js-beautify';
import { Formater } from './Formater';

export type BeautifyOptions = {
  indent_size?: Number,
  indent_char?: string,
  indent_with_tabs?: Boolean,
  eol?: string,
  end_with_newline?: Boolean,
  indent_level?: Number,
  preserve_newlines?: Boolean,
  max_preserve_newlines?: Number,
  space_in_paren?: Boolean,
  space_in_empty_paren?: Boolean,
  jslint_happy?: Boolean,
  space_after_anon_function?: Boolean,
  brace_style?: string,
  break_chained_methods?: Boolean,
  keep_array_indentation?: Boolean,
  unescape_strings?: Boolean,
  wrap_line_length?: Number,
  e4x?: Boolean,
  comma_first?: Boolean,
  operator_position?: string
};

export class FormaterProvider implements Formater {
  css(code: string, options: FormattingOptions): string {
    let beautifyOptions:BeautifyOptions = {};
    Object.assign(beautifyOptions, { indent_size: options.tabSize });
    return Beautify.css(code, beautifyOptions);
  }
}
