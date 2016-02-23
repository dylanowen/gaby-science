/// <reference path="UrlEncoderDecoder.ts" />
/// <reference path="ScienceObject.ts" />

class ScienceMaker {
    private input: HTMLInputElement;
    private output: HTMLElement;

    public constructor(input: HTMLInputElement, output: HTMLElement) {
        this.input = input;
        this.output = output;

        console.log(this.input, this.output);

        this.input.addEventListener('input', this.update, false);

        console.log('lets make science');
    }

    private update = () : void => {
        var value: string = this.input.value;

        var science: ScienceObject = {message: value};

        var encodedValue: string = UrlEncoderDecoder.encodeUrl(science);

        //clear the old output
        while (this.output.firstChild) {
            this.output.removeChild(this.output.firstChild);
        }

        var link: HTMLAnchorElement = document.createElement('a');
        link.textContent = '#' + encodedValue;
        link.href = '#' + encodedValue;
        link.target = '_blank';

        this.output.appendChild(link);
    }

}