/// <reference path="ScienceMaker.ts" />
/// <reference path="ScienceViewer.ts" />
/// <reference path="UrlEncoderDecoder.ts" />

function ready(): void {
    var urlObject: Object = UrlEncoderDecoder.decodeUrl();
    if (urlObject != null) {
        var output: HTMLElement = document.getElementById('science-text');
        var scienceObject: ScienceObject = <ScienceObject>urlObject;

        new ScienceViewer(output, scienceObject);
    }
    else {
        var input: HTMLInputElement = <HTMLInputElement>document.getElementById('science-input');
        var output: HTMLElement = document.getElementById('science-link');

        new ScienceMaker(input, output);
    }
}

if (document.readyState != 'loading') {
    ready();
}
else {
    document.addEventListener('DOMContentLoaded', ready);
}