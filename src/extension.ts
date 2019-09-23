'use strict';
import * as vscode from 'vscode';
import { DocumentFormattingEditProvider, TextDocument, FormattingOptions, CancellationToken, ProviderResult, TextEdit, Range, DocumentRangeFormattingEditProvider } from 'vscode';

const prettier = require('prettier');



export function activate(context: vscode.ExtensionContext) {
    vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: 'handlebars' }, new PrettierHandlebarsFormatter());
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function fullDocumentRange(document: TextDocument): Range {
    const lastLineId = document.lineCount - 1;
    return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}
class PrettierHandlebarsFormatter implements DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider {
    provideDocumentRangeFormattingEdits(document: TextDocument, range: Range, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]> {
        const text = document.getText(range);
        const prettierOptions = {
            parser: 'glimmer'
        }
        const formatted = prettier.format(text, prettierOptions);
        return [TextEdit.replace(range, formatted)];
    }
    provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]> {
        const { activeTextEditor } = vscode.window;
        if (activeTextEditor && activeTextEditor.document.languageId === 'handlebars') {
            const options = {
                parser: 'glimmer',
            };
            const text = document.getText();
            const formatted = prettier.format(text, options);
            const range = fullDocumentRange(document);
            return [TextEdit.replace(range, formatted)];
        }
    }

}