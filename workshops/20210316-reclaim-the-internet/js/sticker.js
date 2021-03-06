class HelloSticker extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create divs
        const stickerContainer = document.createElement('div');
        const stickerUpperRegion = document.createElement('div');
        const stickerHello = document.createElement('div');
        const stickerMyNameIs = document.createElement('span');
        const stickerName = document.createElement('div');
        const stickerLowerRegion = document.createElement('div');

        stickerContainer.setAttribute("class", "sticker-container");
        stickerUpperRegion.setAttribute("class", "sticker-upper-region");
        stickerHello.setAttribute("class", "sticker-hello");
        stickerName.setAttribute("class", "sticker-name");
        stickerLowerRegion.setAttribute("class", "sticker-lower-region");

        stickerHello.textContent = "Hello";
        stickerMyNameIs.textContent = "my name is"
        stickerName.textContent = this.getAttribute("name");

        let stickerColor = this.getAttribute("sticker-color");

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
        .sticker-container {
            font-size: 2rem;
            text-align: center;
            background-color: ` + stickerColor + `;
            width: 50%;
            margin: 0 auto;
            border-radius: 2rem;
          }
          
          .sticker-upper-region {
            color: white;
          }
          
          .sticker-hello {
            font-size: 5rem;
          }
          
          .sticker-name {
            background-color: white;
            color: black;
            margin: 2%;
            font-size: 4rem;
            line-height: 8rem;
          }
          
          .sticker-lower-region {
            color: white;
            font-size: 1.6rem;
            height: 2rem;
            text-align: right;
            padding-right: 5%;
            padding-bottom: 1rem;
          }
        `;

        // Apply external styles to the shadow dom
        // const linkElem = document.createElement('link');
        // linkElem.setAttribute('rel', 'stylesheet');
        // linkElem.setAttribute('href', '../css/style.css');
        // Attach the created element to the shadow dom
        // shadow.appendChild(linkElem);

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(stickerContainer);
        stickerContainer.appendChild(stickerUpperRegion);
        stickerUpperRegion.appendChild(stickerHello);
        stickerUpperRegion.appendChild(stickerMyNameIs);
        stickerContainer.appendChild(stickerName);
        stickerContainer.appendChild(stickerLowerRegion);
    }

    static get observedAttributes() {
        return ['name', 'color'];
    }
}

customElements.define('hello-sticker', HelloSticker)