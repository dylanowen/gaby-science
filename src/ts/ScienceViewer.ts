/// <reference path="ScienceObject.ts" />

//TODO this doesn't really require it's own class
class ScienceViewer {
    constructor(output: HTMLElement, scienceObject: ScienceObject) {
        output.textContent = scienceObject.message;
    }
}