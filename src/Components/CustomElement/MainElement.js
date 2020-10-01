class MainElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div id="app"></div>
        `
    }
}
customElements.define("react-container", MainElement)