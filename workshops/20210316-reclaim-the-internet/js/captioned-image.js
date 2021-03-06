class CaptionedImage extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create divs
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const imageCaption = document.createElement('div');

        image.setAttribute("src", this.getAttribute("img-file"));
        imageCaption.textContent = ""
        if (this.getAttribute("caption")) imageCaption.textContent = this.getAttribute("caption");

        imageContainer.setAttribute("class", "image-container");
        imageCaption.setAttribute("class", "image-caption");

        let whiteBackground = "";
        if (this.getAttribute("white-bg") == "true") {
            whiteBackground = "background-color: white;";
        }

        let imgFloat = "float: none; margin: 0 auto;";
        if (this.getAttribute("float") == "right") {
            imgFloat = "float: right; margin-left: 1rem; margin-right: -4rem;";
        }
        else if (this.getAttribute("float") == "left") {
            imgFloat = "float: left; margin-right: 1rem; margin-left: -4rem;";
        }
        
        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
        .image-container {
            ` + imgFloat + `
            ` + "width:" + this.getAttribute("img-width") + `vw;
        }

        img {
            width: 100%;
            display: block;
            ` + whiteBackground + `
        }
          
        .image-caption {
            font-size: 0.8rem;
            text-align: right;
        }
        `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(imageContainer);
        imageContainer.appendChild(image);
        imageContainer.appendChild(imageCaption);
    }

    static get observedAttributes() {
        return ['img-file', 'img-width', 'caption', 'white-bg', "float"];
    }
}

customElements.define('captioned-image', CaptionedImage)