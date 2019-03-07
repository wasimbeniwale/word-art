// class definition
export class WordArt extends HTMLElement {
    
    
    
    constructor() {
        super();
        console.log('init');

        // shadow root
        const shadowRoot = this.attachShadow({mode: 'open'});

        // text element
        const textContainer = document.createElement('span');

        // attribute values
        let text = 'Word Art!';
        let fontSize = 10;
        let fontColor = 'white';
        let artStyle = 'normal';
        let borderColor = 'black';

        if(this.hasAttribute('text')) {
            text = this.getAttribute('text');
        }

        if(this.hasAttribute('font-size')) {
            fontSize = parseInt(this.getAttribute('font-size'));
        }

        if(this.hasAttribute('art-style')) {
            artStyle = this.getAttribute('art-style');
        }

        if(this.hasAttribute('font-color')) {
            fontColor = this.getAttribute('font-color');
        }

        if(this.hasAttribute('border-color')) {
            borderColor = this.getAttribute('border-color');
        }

        setText();
        setFontSize();
        setFontColor();
        setArtStyle();

        shadowRoot.appendChild(textContainer);

        function setText() {
            textContainer.innerText = text;
        }

        function setFontSize() {
            textContainer.style.fontSize = fontSize + "px";
        }

        function setFontColor(fontColor) {
            textContainer.style.color = fontColor;
        }

        function setArtStyle() {
            if(artStyle === 'bordered') {
                textContainer.style.textShadow = '-1px 0 ' + borderColor+ ', 0 1px ' + borderColor + ', 1px 0 ' + borderColor + ', 0 -1px ' + borderColor;
            } else if(artStyle === 'glow') {
                textContainer.style.textShadow = 'red 0px 0px 15px';
            } else if(artStyle === 'shadowed') {
                textContainer.style.textShadow = '#6f6f6f 3px 3px 4px';
            }
        }
    }
}

customElements.define('word-art', WordArt);