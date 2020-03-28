// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ASMHoverProvider } from "./hover";
import { ASMSymbolDocumenter } from "./symbolDocumenter";

let symbolDocumenter: ASMSymbolDocumenter | undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "wladx-z80" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.initMsg', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('db wladx-z80!');
	});

	const languageSelector: vscode.DocumentFilter = { language: "wladx-z80", scheme: "file" };
	symbolDocumenter = new ASMSymbolDocumenter();

	context.subscriptions.push(
		disposable,
		vscode.languages.registerHoverProvider(languageSelector, new ASMHoverProvider(symbolDocumenter))
	);

}

// this method is called when your extension is deactivated
export function deactivate() {}
