import * as pyright from "pyright";

import * as monaco from 'monaco-editor';

// @ts-ignore
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId:any, label:string) : string {
		if (label === 'json') {
			return './json.worker.bundle.min.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.min.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.min.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.min.js';
		}
		return './editor.worker.bundle.min.js';
	}
}


monaco.editor.create(document.getElementById('container'), {
	value: [
		'def x() {',
		'   print("Hello world!")',
	].join('\n'),
	language: 'python'
});

/*
monaco.editor.create(document.body, {
  value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
  language: "typescript"
});*/