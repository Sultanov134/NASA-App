import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

    constructor() {
        super();
        this.title = '';
        this.source = '';
        this.alt = '';
        this.secondary_creator = '';
    }

    static get properties() {
        return {
            source: {type: String},
            title: {type: String},
            alt: { type: String},
            secondary_creator: { type: String},
        };
    }

    static get styles() {
        return css`
    
             .card {
                display: inline-block;
                width: 240px;
                text-decoration: none;
                color: inherit;
                transition: background-color 0.3s;
                background-color: var(--ddd-theme-default-disabled);
                
                padding: 0;
            }

            .card:hover {
                background-color: skyblue;
                border-radius:8px;

            }

            .image-container {
                width: 100%;
                height: auto;
            
            }

            .image-container img {
                width: 100%;
                height: auto;
                display: block;
                
            }

            .info-container {
                padding: 16px 16px;
                
              
            }

            .info {
                font-size: 16px;
                font-weight: bold;
                margin: 3px;
                padding: 8px;

            }

            .creator {
                font-size: 14px;
                color: var(--ddd-theme-default-potentialMidnight);
                margin-top: var(--ddd-spacing-1);
            }
            
            
            `;
        }
    

    render() {
        return html`
           
            <a class="card" href="${this.source}" target="_blank" rel="noopener noreferrer">
                <div class="image-container">
                    <img src="${this.source}" alt="${this.alt}" />
                </div>
                <div class="info">${this.title}</div>
                <div class="creator">Owner: ${this.secondary_creator}</div>
            </a>
    
        `;
    }
    static get tag() {
        return "nasa-image";
    }
}
customElements.define(NasaImage.tag, NasaImage);