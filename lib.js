function scn(el, groupEl) { // show colour name
    let label = groupEl.parentElement.getElementById('l' + el.id);
    label.style.display = 'block';
}

function hcn(el, groupEl) { // hide colour name
    let label = groupEl.parentElement.getElementById('l' + el.id);
    label.style.display = 'none';
}

function aiv(el, groupEl) { // assign input value
    InputPalette.updateValue(el, groupEl.parentElement);
}

function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

function boc(element, groupEl) { // button onclick
    let buttonDiv = groupEl.parentElement.parentElement;
    let hostID = buttonDiv.id.slice(8);
    let hostElement = document.getElementById(hostID);
    if (hostElement !== null) hostElement.renderSelector();
    else {
        hostElement = document.querySelector('input-palette');
        hostElement.renderSelector();
    }
}

const codeOf = {
                white: "#FFFFFF", ivory: "#FFFFF0", lightyellow: "#FFFFE0", yellow: "#FFFF00", snow: "#FFFAFA", floralwhite: "#FFFAF0",
                lemonchiffon: "#FFFACD", cornsilk: "#FFF8DC", seashell: "#FFF5EE", lavenderblush: "#FFF0F5", papayawhip: "#FFEFD5",
                blanchedalmond: "#FFEBCD", mistyrose: "#FFE4E1", bisque: "#FFE4C4", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", peachpuff: "#FFDAB9",
                gold: "#FFD700", pink: "#FFC0CB", lightpink: "#FFB6C1", orange: "#FFA500", lightsalmon: "#FFA07A", darkorange: "#FF8C00",
                coral: "#FF7F50", hotpink: "#FF69B4", tomato: "#FF6347", orangered: "#FF4500", deeppink: "#FF1493", magenta: "#FF00FF",
                fuchsia: "#FF00FF", red: "#FF0000", oldlace: "#FDF5E6", lightgoldenrodyellow: "#FAFAD2", linen: "#FAF0E6", antiquewhite: "#FAEBD7",
                salmon: "#FA8072", ghostwhite: "#F8F8FF", mintcream: "#F5FFFA", whitesmoke: "#F5F5F5", beige: "#F5F5DC", wheat: "#F5DEB3",
                sandybrown: "#F4A460", azure: "#F0FFFF", honeydew: "#F0FFF0", aliceblue: "#F0F8FF", khaki: "#F0E68C", lightcoral: "#F08080",
                palegoldenrod: "#EEE8AA", violet: "#EE82EE", darksalmon: "#E9967A", lavender: "#E6E6FA", lightcyan: "#E0FFFF", burlywood: "#DEB887",
                plum: "#DDA0DD", gainsboro: "#DCDCDC", crimson: "#DC143C", palevioletred: "#DB7093", goldenrod: "#DAA520", orchid: "#DA70D6",
                thistle: "#D8BFD8", lightgrey: "#D3D3D3", lightgray: "#D3D3D3",tan: "#D2B48C", chocolate: "#D2691E", peru: "#CD853F",
                indianred: "#CD5C5C", mediumvioletred: "#C71585", silver: "#C0C0C0", darkkhaki: "#BDB76B", rosybrown: "#BC8F8F", mediumorchid: "#BA55D3",
                darkgoldenrod: "#B8860B", firebrick: "#B22222", powderblue: "#B0E0E6", lightsteelblue: "#B0C4DE", paleturquoise: "#AFEEEE",
                greenyellow: "#ADFF2F", lightblue: "#ADD8E6", darkgrey: "#A9A9A9", darkgray: "#A9A9A9", brown: "#A52A2A", sienna: "#A0522D",
                yellowgreen: "#9ACD32", darkorchid: "#9932CC", palegreen: "#98FB98", darkviolet: "#9400D3", mediumpurple: "#9370DB", lightgreen: "#90EE90",
                darkseagreen: "#8FBC8F", saddlebrown: "#8B4513", darkmagenta: "#8B008B", darkred: "#8B0000", blueviolet: "#8A2BE2", lightskyblue: "#87CEFA",
                skyblue: "#87CEEB", grey: "#808080", gray: "#808080", olive: "#808000", purple: "#800080", maroon: "#800000", aquamarine: "#7FFFD4",
                chartreuse: "#7FFF00", lawngreen: "#7CFC00", mediumslateblue: "#7B68EE", lightslategrey: "#778899", lightslategray: "#778899",
                slategrey: "#708090", slategray: "#708090", olivedrab: "#6B8E23", slateblue: "#6A5ACD", dimgrey: "#696969", dimgray: "#696969",
                mediumaquamarine: "#66CDAA", rebeccapurple: "#663399", cornflowerblue: "#6495ED", cadetblue: "#5F9EA0", darkolivegreen: "#556B2F",
                indigo: "#4B0082", mediumturquoise: "#48D1CC", darkslateblue: "#483D8B", steelblue: "#4682B4", royalblue: "#4169E1", turquoise: "#40E0D0",
                mediumseagreen: "#3CB371", limegreen: "#32CD32", darkslategrey: "#2F4F4F", darkslategray: "#2F4F4F", seagreen: "#2E8B57",
                forestgreen: "#228B22", lightseagreen: "#20B2AA", dodgerblue: "#1E90FF", midnightblue: "#191970", cyan: "#00FFFF", aqua: "#00FFFF",
                springgreen: "#00FF7F", lime: "#00FF00", mediumspringgreen: "#00FA9A", darkturquoise: "#00CED1", deepskyblue: "#00BFFF",
                darkcyan: "#008B8B", teal: "#008080", green: "#008000", darkgreen: "#006400", blue: "#0000FF", mediumblue: "#0000CD",
                darkblue: "#00008B", navy: "#000080", black: "#000000", rose: "#F33A6A", rubyred: "#E0115F", cerise: "#DE3163", lily: "#C8AABF",
                lilac: "#AA98A9", bloodred: "#880808", wine: "#722F37", sagegreen: "#8A9A5B", emeraldgreen: "#50C878", armygreen: "#454B1B",
                jade: "#00A36C", sapphireblue: "#0F52BA", citrine: "#E4D00A", bronze: "#CD7F32", sand: "#C2B280", copper: "#B87333", coffee: "#6F4E37",
                ice: "#D6FFFA", hazel: "#AE7250", amber: "#FFBF00", sunsetorange: "#FA5F55", iron: "#61666A"
            };

class InputPalette extends HTMLElement {

    static observedAttributes = ['value', 'dial-side', 'prim-side', 'v-type'];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.codeOf = codeOf;

        // Initialize state with fallback defaults
        this.vType = 'name';
        this.buttonSide = 20;
        this.label = 'Black';
        this.primSide = 10;
    }

    // Defines which external attributes the component should observe.
    static get observedAttributes() {
        return ['value', 'dial-side', 'prim-side', 'v-type'];
    }

    style() {
        return ` <style>
            input-palette {
                display: block;
                min-height: 400px; /* Or whatever size it needs */
                width: 100%;
            }
            svg {
                overflow: visible;
            } </style> `;
    }

    connectedCallback() {
        const initialValue = this.getAttribute('value') || 'Black';
        this.vType = this.getAttribute("v-type") || 'name';
        this.buttonSide = this.getAttribute('dial-side') || '20'; // icon side
        this.label = (initialValue.charAt(0) == '#' ? this.textContent : capitalize(initialValue));
        this.primSide = this.getAttribute('prim-side') || '10';  // primitive side

        this.shadowRoot.innerHTML = this.style() + this.drawElement();
        this.hiddenInput = this.shadowRoot.getElementById('hidden-' + this.id);
    }

    static updateValue(element, paletteSVG) {
        const label = paletteSVG.getElementById('l' + element.id);
        const selectorDiv = paletteSVG.parentElement;
        const hostID = selectorDiv.id.slice(13);
        let hostElement = document.getElementById(hostID);
        if (hostElement === null) {
            hostElement = document.querySelector('input-palette');
        }
        const valueType = hostElement.getAttribute("v-type");

        hostElement.shadowRoot.getElementById("palette-button").style.fill = element.getAttribute("fill");
        hostElement.shadowRoot.getElementById("label-palette-button").textContent = label.textContent;

        let colour;
        if(valueType == 'hex') colour = element.getAttribute("fill");
        else colour = element.getAttribute("data-name");
        hostElement.setAttribute("value", colour);
        hostElement.hiddenInput.value = colour;

        hostElement.vType = valueType;
        hostElement.label = label.textContent;

        selectorDiv.remove();

        const changeEvent = new Event('change', { bubbles: true });
        hostElement.dispatchEvent(changeEvent);
    }

    setValue(colour) {
        const label = (colour.charAt(0) != '#' ? capitalize(colour) : colour);

        this.shadowRoot.getElementById("palette-button").style.fill = colour;
        this.shadowRoot.getElementById("label-palette-button").textContent = label;

        this.setAttribute("value", colour);
        this.hiddenInput.value = colour;

        const changeEvent = new Event('change', { bubbles: true });
        this.dispatchEvent(changeEvent);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'dial-side') {
            this.buttonSide = newValue;
            this.shadowRoot.innerHTML = this.style() + this.drawElement();
        }else if (name == 'prim-side') {
            this.primSide = newValue;
        }
    }

    // Native getter to access the property via JavaScript (.value)
    get value() {
        return this.hiddenInput ? this.hiddenInput.value : this.getAttribute('value');
    }

    set value(val) { this.setValue(val); }

    drawElement() {
        const label = this.label;
        const hexagonSide = parseInt(this.buttonSide);  // icon side
        const triangleHeight = hexagonSide*0.866025;  // side times square root of 3 divided by 2
        const tX = hexagonSide*1.5;
        const tY = hexagonSide/2;

        return `
<div id="btn-box-${this.id}">

<!-- It is used to send data along with a form without displaying it on the screen to the user -->
<input type="hidden" id="hidden-${this.id}" value="${this.value}">

<svg width="100%" height="${2*hexagonSide}" viewBox="0 0 400 ${2*hexagonSide}" xmlns="http://www.w3.org/2000/svg">
<style>
    #palette-button {
         stroke: black;
         stroke-width: 2;
         fill: ${this.value};
    }
    #label-palette-button {
        font-family: Verdana;
        font-size: ${hexagonSide}px;
        fill: #000000;
        stroke: #FFFFFF;
        stroke-width: ${hexagonSide/20}px;
        paint-order: stroke fill;
    }
</style>
    <g id="dial" transform="translate(0, ${triangleHeight})">
        <path id='palette-button' d="M ${hexagonSide/2} ${triangleHeight} L ${hexagonSide} 0 ${hexagonSide/2} -${triangleHeight} L -${hexagonSide/2} -${triangleHeight} L -${hexagonSide} 0 L -${hexagonSide/2} ${triangleHeight} z" onclick="boc(this, this.parentElement)"/>
        <text id='label-palette-button' x="${tX}" y="${tY}">${label}</text>
    </g>
</svg></div>`;
    }

    renderSelector() {
        // Retrieve attributes saved in the state
        const s = this.primSide;  // primitive side

        const selectorBox = document.createElement("div");
        selectorBox.setAttribute("id", "selector-box-" + this.id);
        selectorBox.style.backgroundColor = '#F0F0F0';
        selectorBox.style.position = "absolute";
        selectorBox.style.top = "0px";
        selectorBox.innerHTML = `
<svg width="${(s/10)*400}" height="${(s/10)*400}" viewBox="0 0 ${(s/10)*400} ${(s/10)*400}" xmlns="http://www.w3.org/2000/svg">

<defs>
    <!-- hexagon width 10px | triangle height width*0.866025 -->
    <path id='hexagon' d="M 5 8.66025 L 10 0 5 -8.66025 L -5 -8.66025 L -10 0 L -5 8.66025 z" stroke="black" stroke-width="0.5"/>
</defs>

<style>
    .colour-name {
        font-family: Verdana;
        font-size: 10px;
        display: none;
        fill: #000000;
        stroke: #FFFFFF;
        stroke-width: 0.5px;
        paint-order: stroke fill;
    }
    .colour-name-inverted {
        font-family: Verdana;
        font-size: 10px;
        display: none;
        fill: #FFFFFF;
        stroke: #000000;
        stroke-width: 0.5px;
        paint-order: stroke fill;
    }
</style>

<g id="palette" transform="scale(${(s/10)}, ${(s/10)})">
    <use id='1' data-name="white" href="#hexagon" x="200" y="200" fill="#FFFFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/>  <!-- translate -->

    <use id='2' data-name="ivory" href="#hexagon" x="215" y="191.33975" fill="#FFFFF0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='3' data-name="lightyellow" href="#hexagon" x="200" y="182.6795" fill="#FFFFE0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='4' data-name="yellow" href="#hexagon" x="185" y="191.33975" fill="#FFFF00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='5' data-name="snow" href="#hexagon" x="185" y="208.66025" fill="#FFFAFA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais lado raiz de 3 sobre 2 -->
    <use id='6' data-name="floralwhite" href="#hexagon" x="200" y="217.3205" fill="#FFFAF0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 2 vezes lado raiz de 3 sobre 2 -->
    <use id='7' data-name="lemonchiffon" href="#hexagon" x="215" y="208.66025" fill="#FFFACD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais lado raiz de 3 sobre 2 -->

    <use id='8' data-name="cornsilk" href="#hexagon" x="230" y="200" fill="#FFF8DC" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, mesmo y -->
    <use id='9' data-name="seashell" href="#hexagon" x="230" y="182.6795" fill="#FFF5EE" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='10' data-name="lavenderblush" href="#hexagon" x="215" y="174.01925" fill="#FFF0F5" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='11' data-name="papayawhip" href="#hexagon" x="200" y="165.359" fill="#FFEFD5" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='12' data-name="blanchedalmond" href="#hexagon" x="185" y="174.01925" fill="#FFEBCD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='13' data-name="mistyrose" href="#hexagon" x="170" y="182.6795" fill="#FFE4E1" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='14' data-name="bisque" href="#hexagon" x="170" y="200" fill="#FFE4C4" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, mesmo y -->
    <use id='15' data-name="moccasin" href="#hexagon" x="170" y="217.3205" fill="#FFE4B5" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->
    <use id='16' data-name="navajowhite" href="#hexagon" x="185" y="225.98075" fill="#FFDEAD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='17' data-name="peachpuff" href="#hexagon" x="200" y="234.641" fill="#FFDAB9" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='18' data-name="gold" href="#hexagon" x="215" y="225.98075" fill="#FFD700" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='19' data-name="pink" href="#hexagon" x="230" y="217.3205" fill="#FFC0CB" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->

    <use id='20' data-name="lightpink" href="#hexagon" x="245" y="191.33975" fill="#FFB6C1" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='21' data-name="orange" href="#hexagon" x="245" y="174.01925" fill="#FFA500" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='22' data-name="lightsalmon" href="#hexagon" x="230" y="165.359" fill="#FFA07A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='23' data-name="darkorange" href="#hexagon" x="215" y="156.69875" fill="#FF8C00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='24' data-name="coral" href="#hexagon" x="200" y="148.0385" fill="#FF7F50" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='25' data-name="hotpink" href="#hexagon" x="185" y="156.69875" fill="#FF69B4" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='26' data-name="tomato" href="#hexagon" x="170" y="165.359" fill="#FF6347" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='27' data-name="orangered" href="#hexagon" x="155" y="174.01925" fill="#FF4500" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='28' data-name="deeppink" href="#hexagon" x="155" y="191.33975" fill="#FF1493" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='29' data-name="magenta" href="#hexagon" x="155" y="208.66025" fill="#FF00FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->
    <use id='30' data-name="fuchsia" href="#hexagon" x="155" y="225.98075" fill="#FF00FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='31' data-name="red" href="#hexagon" x="170" y="234.641" fill="#FF0000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='32' data-name="oldlace" href="#hexagon" x="185" y="243.30125" fill="#FDF5E6" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='33' data-name="lightgoldenrodyellow" href="#hexagon" x="200" y="251.9615" fill="#FAFAD2" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='34' data-name="linen" href="#hexagon" x="215" y="243.30125" fill="#FAF0E6" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='35' data-name="antiquewhite" href="#hexagon" x="230" y="234.641" fill="#FAEBD7" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='36' data-name="salmon" href="#hexagon" x="245" y="225.98075" fill="#FA8072" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='37' data-name="ghostwhite" href="#hexagon" x="245" y="208.66025" fill="#F8F8FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->

    <use id='38' data-name="mintcream" href="#hexagon" x="260" y="200" fill="#F5FFFA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, mesmo y -->
    <use id='39' data-name="whitesmoke" href="#hexagon" x="260" y="182.6795" fill="#F5F5F5" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='40' data-name="beige" href="#hexagon" x="260" y="165.359" fill="#F5F5DC" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='41' data-name="wheat" href="#hexagon" x="245" y="156.69875" fill="#F5DEB3" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='42' data-name="sandybrown" href="#hexagon" x="230" y="148.0385" fill="#F4A460" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='43' data-name="azure" href="#hexagon" x="215" y="139.37825" fill="#F0FFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='44' data-name="honeydew" href="#hexagon" x="200" y="130.718" fill="#F0FFF0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='45' data-name="aliceblue" href="#hexagon" x="185" y="139.37825" fill="#F0F8FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='46' data-name="khaki" href="#hexagon" x="170" y="148.0385" fill="#F0E68C" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='47' data-name="lightcoral" href="#hexagon" x="155" y="156.69875" fill="#F08080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='48' data-name="palegoldenrod" href="#hexagon" x="140" y="165.359" fill="#EEE8AA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='49' data-name="violet" href="#hexagon" x="140" y="182.6795" fill="#EE82EE" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='50' data-name="darksalmon" href="#hexagon" x="140" y="200" fill="#E9967A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, mesmo y -->
    <use id='51' data-name="lavender" href="#hexagon" x="140" y="217.3205" fill="#E6E6FA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->
    <use id='52' data-name="lightcyan" href="#hexagon" x="140" y="234.641" fill="#E0FFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='53' data-name="burlywood" href="#hexagon" x="155" y="243.30125" fill="#DEB887" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='54' data-name="plum" href="#hexagon" x="170" y="251.9615" fill="#DDA0DD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='55' data-name="gainsboro" href="#hexagon" x="185" y="260.6235" fill="#DCDCDC" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='56' data-name="crimson" href="#hexagon" x="200" y="269.282" fill="#DC143C" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='57' data-name="palevioletred" href="#hexagon" x="215" y="260.6235" fill="#DB7093" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='58' data-name="goldenrod" href="#hexagon" x="230" y="251.9615" fill="#DAA520" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='59' data-name="orchid" href="#hexagon" x="245" y="243.30125" fill="#DA70D6" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='60' data-name="thistle" href="#hexagon" x="260" y="234.641" fill="#D8BFD8" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='61' data-name="lightgrey" href="#hexagon" x="260" y="217.3205" fill="#D3D3D3" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->

    <use id='62' data-name="lightgray" href="#hexagon" x="275" y="191.33975" fill="#D3D3D3" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='63' data-name="tan" href="#hexagon" x="275" y="174.01925" fill="#D2B48C" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='64' data-name="chocolate" href="#hexagon" x="275" y="156.69875" fill="#D2691E" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='65' data-name="peru" href="#hexagon" x="260" y="148.0385" fill="#CD853F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='66' data-name="indianred" href="#hexagon" x="245" y="139.37825" fill="#CD5C5C" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='67' data-name="mediumvioletred" href="#hexagon" x="230" y="130.718" fill="#C71585" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='68' data-name="silver" href="#hexagon" x="215" y="122.05775" fill="#C0C0C0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='69' data-name="darkkhaki" href="#hexagon" x="200" y="113.3975" fill="#BDB76B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 10 vezes lado raiz de 3 sobre 2 -->
    <use id='70' data-name="rosybrown" href="#hexagon" x="185" y="122.05775" fill="#BC8F8F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='71' data-name="mediumorchid" href="#hexagon" x="170" y="130.718" fill="#BA55D3" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='72' data-name="darkgoldenrod" href="#hexagon" x="155" y="139.37825" fill="#B8860B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='73' data-name="firebrick" href="#hexagon" x="140" y="148.0385" fill="#B22222" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='74' data-name="powderblue" href="#hexagon" x="125" y="156.69875" fill="#B0E0E6" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='75' data-name="lightsteelblue" href="#hexagon" x="125" y="174.01925" fill="#B0C4DE" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='76' data-name="paleturquoise" href="#hexagon" x="125" y="191.33975" fill="#AFEEEE" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='77' data-name="greenyellow" href="#hexagon" x="125" y="208.66025" fill="#ADFF2F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->
    <use id='78' data-name="lightblue" href="#hexagon" x="125" y="225.98075" fill="#ADD8E6" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='79' data-name="darkgrey" href="#hexagon" x="125" y="243.30125" fill="#A9A9A9" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='80' data-name="darkgray" href="#hexagon" x="140" y="251.9615" fill="#A9A9A9" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='81' data-name="brown" href="#hexagon" x="155" y="260.6235" fill="#A52A2A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='82' data-name="sienna" href="#hexagon" x="170" y="269.282" fill="#A0522D" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='83' data-name="yellowgreen" href="#hexagon" x="185" y="277.94225" fill="#9ACD32" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='84' data-name="darkorchid" href="#hexagon" x="200" y="286.6025" fill="#9932CC" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 10 vezes lado raiz de 3 sobre 2 -->
    <use id='85' data-name="palegreen" href="#hexagon" x="215" y="277.94225" fill="#98FB98" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='86' data-name="darkviolet" href="#hexagon" x="230" y="269.282" fill="#9400D3" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='87' data-name="mediumpurple" href="#hexagon" x="245" y="260.6235" fill="#9370DB" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='88' data-name="lightgreen" href="#hexagon" x="260" y="251.9615" fill="#90EE90" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='89' data-name="darkseagreen" href="#hexagon" x="275" y="243.30125" fill="#8FBC8F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='90' data-name="saddlebrown" href="#hexagon" x="275" y="225.98075" fill="#8B4513" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='91' data-name="darkmagenta" href="#hexagon" x="275" y="208.66025" fill="#8B008B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->

    <use id='92' data-name="darkred" href="#hexagon" x="290" y="200" fill="#8B0000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, mesmo y -->
    <use id='93' data-name="blueviolet" href="#hexagon" x="290" y="182.6795" fill="#8A2BE2" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='94' data-name="lightskyblue" href="#hexagon" x="290" y="165.359" fill="#87CEFA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='95' data-name="skyblue" href="#hexagon" x="290" y="148.0385" fill="#87CEEB" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='96' data-name="grey" href="#hexagon" x="275" y="139.37825" fill="#808080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='97' data-name="gray" href="#hexagon" x="260" y="130.718" fill="#808080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='98' data-name="olive" href="#hexagon" x="245" y="122.05775" fill="#808000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='99' data-name="purple" href="#hexagon" x="230" y="113.3975" fill="#800080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 10 vezes lado raiz de 3 sobre 2 -->
    <use id='100' data-name="maroon" href="#hexagon" x="215" y="104.73725" fill="#800000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 11 vezes lado raiz de 3 sobre 2 -->
    <use id='101' data-name="aquamarine" href="#hexagon" x="200" y="96.077" fill="#7FFFD4" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 12 vezes lado raiz de 3 sobre 2 -->
    <use id='102' data-name="chartreuse" href="#hexagon" x="185" y="104.73725" fill="#7FFF00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 11 vezes lado raiz de 3 sobre 2 -->
    <use id='103' data-name="lawngreen" href="#hexagon" x="170" y="113.3975" fill="#7CFC00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 10 vezes lado raiz de 3 sobre 2 -->
    <use id='104' data-name="mediumslateblue" href="#hexagon" x="155" y="122.05775" fill="#7B68EE" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='105' data-name="lightslategrey" href="#hexagon" x="140" y="130.718" fill="#778899" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='106' data-name="lightslategray" href="#hexagon" x="125" y="139.37825" fill="#778899" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='107' data-name="slategrey" href="#hexagon" x="110" y="148.0385" fill="#708090" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y menos 6 vezes lado raiz de 3 sobre 2 -->
    <use id='108' data-name="slategray" href="#hexagon" x="110" y="165.359" fill="#708090" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y menos 4 vezes lado raiz de 3 sobre 2 -->
    <use id='109' data-name="olivedrab" href="#hexagon" x="110" y="182.6795" fill="#6B8E23" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y menos 2 vezes lado raiz de 3 sobre 2 -->
    <use id='110' data-name="slateblue" href="#hexagon" x="110" y="200" fill="#6A5ACD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, mesmo y -->
    <use id='111' data-name="dimgrey" href="#hexagon" x="110" y="217.3205" fill="#696969" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->
    <use id='112' data-name="dimgray" href="#hexagon" x="110" y="234.641" fill="#696969" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='113' data-name="mediumaquamarine" href="#hexagon" x="110" y="251.9615" fill="#66CDAA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='114' data-name="rebeccapurple" href="#hexagon" x="125" y="260.6235" fill="#663399" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='115' data-name="cornflowerblue" href="#hexagon" x="140" y="269.282" fill="#6495ED" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='116' data-name="cadetblue" href="#hexagon" x="155" y="277.94225" fill="#5F9EA0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='117' data-name="darkolivegreen" href="#hexagon" x="170" y="286.6025" fill="#556B2F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 10 vezes lado raiz de 3 sobre 2 -->
    <use id='118' data-name="indigo" href="#hexagon" x="185" y="295.26275" fill="#4B0082" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 11 vezes lado raiz de 3 sobre 2 -->
    <use id='119' data-name="mediumturquoise" href="#hexagon" x="200" y="303.923" fill="#48D1CC" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 12 vezes lado raiz de 3 sobre 2 -->
    <use id='120' data-name="darkslateblue" href="#hexagon" x="215" y="295.26275" fill="#483D8B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 11 vezes lado raiz de 3 sobre 2 -->
    <use id='121' data-name="steelblue" href="#hexagon" x="230" y="286.6025" fill="#4682B4" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 10 vezes lado raiz de 3 sobre 2 -->
    <use id='122' data-name="royalblue" href="#hexagon" x="245" y="277.94225" fill="#4169E1" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='123' data-name="turquoise" href="#hexagon" x="260" y="269.282" fill="#40E0D0" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='124' data-name="mediumseagreen" href="#hexagon" x="275" y="260.6235" fill="#3CB371" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='125' data-name="limegreen" href="#hexagon" x="290" y="251.9615" fill="#32CD32" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y mais 6 vezes lado raiz de 3 sobre 2 -->
    <use id='126' data-name="darkslategrey" href="#hexagon" x="290" y="234.641" fill="#2F4F4F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y mais 4 vezes lado raiz de 3 sobre 2 -->
    <use id='127' data-name="darkslategray" href="#hexagon" x="290" y="217.3205" fill="#2F4F4F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y mais 2 vezes lado raiz de 3 sobre 2 -->

    <use id='128' data-name="seagreen" href="#hexagon" x="305" y="191.33975" fill="#2E8B57" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->
    <use id='129' data-name="forestgreen" href="#hexagon" x="305" y="174.01925" fill="#228B22" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='130' data-name="lightseagreen" href="#hexagon" x="305" y="156.69875" fill="#20B2AA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='131' data-name="dodgerblue" href="#hexagon" x="305" y="139.37825" fill="#1E90FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='132' data-name="midnightblue" href="#hexagon" x="290" y="130.718" fill="#191970" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='133' data-name="cyan" href="#hexagon" x="275" y="122.05775" fill="#00FFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='134' data-name="aqua" href="#hexagon" x="260" y="113.3975" fill="#00FFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y menos 10 vezes lado raiz de 3 sobre 2 -->
    <use id='135' data-name="springgreen" href="#hexagon" x="245" y="104.73725" fill="#00FF7F" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y menos 11 vezes lado raiz de 3 sobre 2 -->
    <use id='136' data-name="lime" href="#hexagon" x="230" y="96.077" fill="#00FF00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y menos 12 vezes lado raiz de 3 sobre 2 -->
    <use id='137' data-name="mediumspringgreen" href="#hexagon" x="215" y="87.41675" fill="#00FA9A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y menos 13 vezes lado raiz de 3 sobre 2 -->
    <use id='138' data-name="darkturquoise" href="#hexagon" x="200" y="78.7565" fill="#00CED1" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y menos 14 vezes lado raiz de 3 sobre 2 -->
    <use id='139' data-name="deepskyblue" href="#hexagon" x="185" y="87.41675" fill="#00BFFF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y menos 13 vezes lado raiz de 3 sobre 2 -->
    <use id='140' data-name="darkcyan" href="#hexagon" x="170" y="96.077" fill="#008B8B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y menos 12 vezes lado raiz de 3 sobre 2 -->
    <use id='141' data-name="teal" href="#hexagon" x="155" y="104.73725" fill="#008080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y menos 11 vezes lado raiz de 3 sobre 2 -->
    <use id='142' data-name="green" href="#hexagon" x="140" y="113.3975" fill="#008000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y menos 10 vezes lado raiz de 3 sobre 2 -->
    <use id='143' data-name="darkgreen" href="#hexagon" x="125" y="122.05775" fill="#006400" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y menos 9 vezes lado raiz de 3 sobre 2 -->
    <use id='144' data-name="blue" href="#hexagon" x="110" y="130.718" fill="#0000FF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y menos 8 vezes lado raiz de 3 sobre 2 -->
    <use id='145' data-name="mediumblue" href="#hexagon" x="95" y="139.37825" fill="#0000CD" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y menos 7 vezes lado raiz de 3 sobre 2 -->
    <use id='146' data-name="darkblue" href="#hexagon" x="95" y="156.69875" fill="#00008B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y menos 5 vezes lado raiz de 3 sobre 2 -->
    <use id='147' data-name="navy" href="#hexagon" x="95" y="174.01925" fill="#000080" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y menos 3 vezes lado raiz de 3 sobre 2 -->
    <use id='148' data-name="black" href="#hexagon" x="95" y="191.33975" fill="#000000" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y menos lado raiz de 3 sobre 2 -->


<!-- These next colours codes does not have names in HTML, they are just a suggestion -->
    <use id='149' data-name="${codeOf.rose}" href="#hexagon" x="95" y="208.66025" fill="#F33A6A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->
    <use id='150' data-name="${codeOf.cerise}" href="#hexagon" x="95" y="225.98075" fill="#DE3163" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='151' data-name="${codeOf.lily}" href="#hexagon" x="95" y="243.30125" fill="#C8AABF" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='152' data-name="${codeOf.lilac}" href="#hexagon" x="95" y="260.6235" fill="#AA98A9" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 10 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='153' data-name="${codeOf.rubyred}" href="#hexagon" x="110" y="269.282" fill="#C81626" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 9 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='154' data-name="${codeOf.bloodred}" href="#hexagon" x="125" y="277.94225" fill="#880808" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 7 vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='155' data-name="${codeOf.wine}" href="#hexagon" x="140" y="286.6025" fill="#722F37" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 6 vez o lado, y mais 10 vezes lado raiz de 3 sobre 2 -->
    <use id='156' data-name="${codeOf.sagegreen}" href="#hexagon" x="155" y="295.26275" fill="#8A9A5B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 4 vez e meia o lado, y mais 11 vezes lado raiz de 3 sobre 2 -->
    <use id='157' data-name="${codeOf.emeraldgreen}" href="#hexagon" x="170" y="303.923" fill="#50C878" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos 3 vez o lado, y mais 12 vezes lado raiz de 3 sobre 2 -->
    <use id='158' data-name="${codeOf.armygreen}" href="#hexagon" x="185" y="312.58325" fill="#454B1B" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x menos uma vez e meia o lado, y mais 13 vezes lado raiz de 3 sobre 2 -->
    <use id='159' data-name="${codeOf.jade}" href="#hexagon" x="200" y="321.2435" fill="#00A36C" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- mesmo x, y mais 14 vezes lado raiz de 3 sobre 2 -->
    <use id='160' data-name="${codeOf.sapphireblue}" href="#hexagon" x="215" y="312.58325" fill="#0F52BA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais uma vez e meia o lado, y mais 13 vezes lado raiz de 3 sobre 2 -->
    <use id='161' data-name="${codeOf.citrine}" href="#hexagon" x="230" y="303.923" fill="#E4D00A" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 3 vez o lado, y mais 12 vezes lado raiz de 3 sobre 2 -->
    <use id='162' data-name="${codeOf.bronze}" href="#hexagon" x="245" y="295.26275" fill="#CD7F32" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 4 vez e meia o lado, y mais 11 vezes lado raiz de 3 sobre 2 -->
    <use id='163' data-name="${codeOf.sand}" href="#hexagon" x="260" y="286.6025" fill="#C2B280" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 6 vez o lado, y mais 10 vezes lado raiz de 3 sobre 2 -->
    <use id='164' data-name="${codeOf.copper}" href="#hexagon" x="275" y="277.94225" fill="#B87333" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 7 vez e meia o lado, y mais 9 vezes lado raiz de 3 sobre 2 -->
    <use id='165' data-name="${codeOf.coffee}" href="#hexagon" x="290" y="269.282" fill="#6F4E37" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 9 vez o lado, y mais 8 vezes lado raiz de 3 sobre 2 -->
    <use id='166' data-name="${codeOf.ice}" href="#hexagon" x="305" y="260.6235" fill="#D6FFFA" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y mais 7 vezes lado raiz de 3 sobre 2 -->
    <use id='167' data-name="${codeOf.hazel}" href="#hexagon" x="305" y="243.30125" fill="#AE7250" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y mais 5 vezes lado raiz de 3 sobre 2 -->
    <use id='168' data-name="${codeOf.amber}" href="#hexagon" x="305" y="225.98075" fill="#FFBF00" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y mais 3 vezes lado raiz de 3 sobre 2 -->
    <use id='169' data-name="${codeOf.sunsetorange}" href="#hexagon" x="305" y="208.66025" fill="#FA5F55" onmouseover="scn(this, this.parentElement)" onmouseout="hcn(this, this.parentElement)" onclick="aiv(this, this.parentElement)"/> <!-- x mais 10 vez e meia o lado, y mais lado raiz de 3 sobre 2 -->


    <text id='l1' class="colour-name" x="200" y="200">White</text>
    <text id='l2' class="colour-name" x="215" y="191.33975">Ivory</text>
    <text id='l3' class="colour-name" x="200" y="182.6795">Light Yellow</text>
    <text id='l4' class="colour-name" x="185" y="191.33975">Yellow</text>
    <text id='l5' class="colour-name" x="185" y="208.66025">Snow</text>
    <text id='l6' class="colour-name" x="200" y="217.3205">Floral White</text>
    <text id='l7' class="colour-name" x="215" y="208.66025">Lemon Chiffon</text>
    <text id='l8' class="colour-name" x="230" y="200">Corn Silk</text>
    <text id='l9' class="colour-name" x="230" y="182.6795">Sea Shell</text>
    <text id='l10' class="colour-name" x="215" y="174.01925">Lavender Blush</text>
    <text id='l11' class="colour-name" x="200" y="165.359">Papaya Whip</text>
    <text id='l12' class="colour-name" x="185" y="174.01925">Blanched Almond</text>
    <text id='l13' class="colour-name" x="170" y="182.6795">Misty Rose</text>
    <text id='l14' class="colour-name" x="170" y="200">Bisque</text>
    <text id='l15' class="colour-name" x="170" y="217.3205">Moccasin</text>
    <text id='l16' class="colour-name" x="185" y="225.98075">Navajo White</text>
    <text id='l17' class="colour-name" x="200" y="234.641">Peach Puff</text>
    <text id='l18' class="colour-name" x="215" y="225.98075">Gold</text>
    <text id='l19' class="colour-name" x="230" y="217.3205">Pink</text>
    <text id='l20' class="colour-name" x="245" y="191.33975">Light Pink</text>
    <text id='l21' class="colour-name" x="245" y="174.01925">Orange</text>
    <text id='l22' class="colour-name" x="230" y="165.359">Light Salmon</text>
    <text id='l23' class="colour-name" x="215" y="156.69875">Dark Orange</text>
    <text id='l24' class="colour-name" x="200" y="148.0385">Coral</text>
    <text id='l25' class="colour-name" x="185" y="156.69875">Hot Pink</text>
    <text id='l26' class="colour-name" x="170" y="165.359">Tomato</text>
    <text id='l27' class="colour-name" x="155" y="174.01925">Orange Red</text>
    <text id='l28' class="colour-name" x="155" y="191.33975">Deep Pink</text>
    <text id='l29' class="colour-name" x="155" y="208.66025">Magenta</text>
    <text id='l30' class="colour-name" x="155" y="225.98075">Fuchsia</text>
    <text id='l31' class="colour-name" x="170" y="234.641">Red</text>
    <text id='l32' class="colour-name" x="185" y="243.30125">Old Lace</text>
    <text id='l33' class="colour-name" x="200" y="251.9615">Light Golden Rod Yellow</text>
    <text id='l34' class="colour-name" x="215" y="243.30125">Linen</text>
    <text id='l35' class="colour-name" x="230" y="234.641">Antique White</text>
    <text id='l36' class="colour-name" x="245" y="225.98075">Salmon</text>
    <text id='l37' class="colour-name" x="245" y="208.66025">Ghost White</text>
    <text id='l38' class="colour-name" x="260" y="200">Mint Cream</text>
    <text id='l39' class="colour-name" x="260" y="182.6795">White Smoke</text>
    <text id='l40' class="colour-name" x="260" y="165.359">Beige</text>
    <text id='l41' class="colour-name" x="245" y="156.69875">Wheat</text>
    <text id='l42' class="colour-name" x="230" y="148.0385">Sandy Brown</text>
    <text id='l43' class="colour-name" x="215" y="139.37825">Azure</text>
    <text id='l44' class="colour-name" x="200" y="130.718">Honey Dew</text>
    <text id='l45' class="colour-name" x="185" y="139.37825">Alice Blue</text>
    <text id='l46' class="colour-name" x="170" y="148.0385">Khaki</text>
    <text id='l47' class="colour-name" x="155" y="156.69875">Light Coral</text>
    <text id='l48' class="colour-name" x="140" y="165.359">Pale Golden Rod</text>
    <text id='l49' class="colour-name" x="140" y="182.6795">Violet</text>
    <text id='l50' class="colour-name" x="140" y="200">Dark Salmon</text>
    <text id='l51' class="colour-name" x="140" y="217.3205">Lavender</text>
    <text id='l52' class="colour-name" x="140" y="234.641">Light Cyan</text>
    <text id='l53' class="colour-name" x="155" y="243.30125">Burly Wood</text>
    <text id='l54' class="colour-name" x="170" y="251.9615">Plum</text>
    <text id='l55' class="colour-name" x="185" y="260.6235">Gainsboro</text>
    <text id='l56' class="colour-name" x="200" y="269.282">Crimson</text>
    <text id='l57' class="colour-name" x="215" y="260.6235">Pale Violet Red</text>
    <text id='l58' class="colour-name" x="230" y="251.9615">Golden Rod</text>
    <text id='l59' class="colour-name" x="245" y="243.30125">Orchid</text>
    <text id='l60' class="colour-name" x="260" y="234.641">Thistle</text>
    <text id='l61' class="colour-name" x="260" y="217.3205">Light Grey</text>
    <text id='l62' class="colour-name" x="275" y="191.33975">Light Gray</text>
    <text id='l63' class="colour-name" x="275" y="174.01925">Tan</text>
    <text id='l64' class="colour-name" x="275" y="156.69875">Chocolate</text>
    <text id='l65' class="colour-name" x="260" y="148.0385">Peru</text>
    <text id='l66' class="colour-name" x="245" y="139.37825">Indian Red</text>
    <text id='l67' class="colour-name" x="230" y="130.718">Medium Violet Red</text>
    <text id='l68' class="colour-name" x="215" y="122.05775">Silver</text>
    <text id='l69' class="colour-name" x="200" y="113.3975">Dark Khaki</text>
    <text id='l70' class="colour-name" x="185" y="122.05775">Rosy Brown</text>
    <text id='l71' class="colour-name" x="170" y="130.718">Medium Orchid</text>
    <text id='l72' class="colour-name" x="155" y="139.37825">Dark Golden Rod</text>
    <text id='l73' class="colour-name" x="140" y="148.0385">Fire Brick</text>
    <text id='l74' class="colour-name" x="125" y="156.69875">Powder Blue</text>
    <text id='l75' class="colour-name" x="125" y="174.01925">Light Steel Blue</text>
    <text id='l76' class="colour-name" x="125" y="191.33975">Pale Turquoise</text>
    <text id='l77' class="colour-name" x="125" y="208.66025">Green Yellow</text>
    <text id='l78' class="colour-name" x="125" y="225.98075">Light Blue</text>
    <text id='l79' class="colour-name" x="125" y="243.30125">Dark Grey</text>
    <text id='l80' class="colour-name" x="140" y="251.9615">Dark Gray</text>
    <text id='l81' class="colour-name" x="155" y="260.6235">Brown</text>
    <text id='l82' class="colour-name" x="170" y="269.282">Sienna</text>
    <text id='l83' class="colour-name" x="185" y="277.94225">Yellow Green</text>
    <text id='l84' class="colour-name" x="200" y="286.6025">Dark Orchid</text>
    <text id='l85' class="colour-name" x="215" y="277.94225">Pale Green</text>
    <text id='l86' class="colour-name" x="230" y="269.282">Dark Violet</text>
    <text id='l87' class="colour-name" x="245" y="260.6235">Medium Purple</text>
    <text id='l88' class="colour-name" x="260" y="251.9615">Light Green</text>
    <text id='l89' class="colour-name" x="275" y="243.30125">Dark Sea Green</text>
    <text id='l90' class="colour-name" x="275" y="225.98075">Saddle Brown</text>
    <text id='l91' class="colour-name" x="275" y="208.66025">Dark Magenta</text>
    <text id='l92' class="colour-name" x="290" y="200">Dark Red</text>
    <text id='l93' class="colour-name" x="290" y="182.6795">Blue Violet</text>
    <text id='l94' class="colour-name" x="290" y="165.359">Light Sky Blue</text>
    <text id='l95' class="colour-name" x="290" y="148.0385">Sky Blue</text>
    <text id='l96' class="colour-name-inverted" x="275" y="139.37825">Grey</text>
    <text id='l97' class="colour-name-inverted" x="260" y="130.718">Gray</text>
    <text id='l98' class="colour-name-inverted" x="245" y="122.05775">Olive</text>
    <text id='l99' class="colour-name-inverted" x="230" y="113.3975">Purple</text>
    <text id='l100' class="colour-name-inverted" x="215" y="104.73725">Maroon</text>
    <text id='l101' class="colour-name" x="200" y="96.077">Aquamarine</text>
    <text id='l102' class="colour-name" x="185" y="104.73725">Chartreuse</text>
    <text id='l103' class="colour-name" x="170" y="113.3975">Lawn Green</text>
    <text id='l104' class="colour-name-inverted" x="155" y="122.05775">Medium Slate Blue</text>
    <text id='l105' class="colour-name-inverted" x="140" y="130.718">Light Slate Grey</text>
    <text id='l106' class="colour-name-inverted" x="125" y="139.37825">Light Slate Gray</text>
    <text id='l107' class="colour-name-inverted" x="110" y="148.0385">Slate Grey</text>
    <text id='l108' class="colour-name-inverted" x="110" y="165.359">Slate Gray</text>
    <text id='l109' class="colour-name-inverted" x="110" y="182.6795">Olive Drab</text>
    <text id='l110' class="colour-name-inverted" x="110" y="200">Slate Blue</text>
    <text id='l111' class="colour-name-inverted" x="110" y="217.3205">Dim Grey</text>
    <text id='l112' class="colour-name-inverted" x="110" y="234.641">Dim Gray</text>
    <text id='l113' class="colour-name" x="110" y="251.9615">Medium Aqua Marine</text>
    <text id='l114' class="colour-name-inverted" x="125" y="260.6235">Rebecca Purple</text>
    <text id='l115' class="colour-name" x="140" y="269.282">Cornflower Blue</text>
    <text id='l116' class="colour-name" x="155" y="277.94225">Cadet Blue</text>
    <text id='l117' class="colour-name-inverted" x="170" y="286.6025">Dark Olive Green</text>
    <text id='l118' class="colour-name-inverted" x="185" y="295.26275">Indigo</text>
    <text id='l119' class="colour-name" x="200" y="303.923">Medium Turquoise</text>
    <text id='l120' class="colour-name" x="215" y="295.26275">Dark Slate Blue</text>
    <text id='l121' class="colour-name" x="230" y="286.6025">Steel Blue</text>
    <text id='l122' class="colour-name" x="245" y="277.94225">Royal Blue</text>
    <text id='l123' class="colour-name" x="260" y="269.282">Turquoise</text>
    <text id='l124' class="colour-name" x="275" y="260.6235">Medium Sea Green</text>
    <text id='l125' class="colour-name" x="290" y="251.9615">Lime Green</text>
    <text id='l126' class="colour-name" x="290" y="234.641">Dark Slate Grey</text>
    <text id='l127' class="colour-name" x="290" y="217.3205">Dark Slate Gray</text>
    <text id='l128' class="colour-name" x="305" y="191.33975">Sea Green</text>
    <text id='l129' class="colour-name" x="305" y="174.01925">Forest Green</text>
    <text id='l130' class="colour-name" x="305" y="156.69875">Light Sea Green</text>
    <text id='l131' class="colour-name" x="305" y="139.37825">Dodger Blue</text>
    <text id='l132' class="colour-name" x="290" y="130.718">Midnight Blue</text>
    <text id='l133' class="colour-name" x="275" y="122.05775">Cyan</text>
    <text id='l134' class="colour-name" x="260" y="113.3975">Aqua</text>
    <text id='l135' class="colour-name" x="245" y="104.73725">Spring Green</text>
    <text id='l136' class="colour-name" x="230" y="96.077">Lime</text>
    <text id='l137' class="colour-name" x="215" y="87.41675">Medium Spring Green</text>
    <text id='l138' class="colour-name" x="200" y="78.7565">Dark Turquoise</text>
    <text id='l139' class="colour-name" x="185" y="87.41675">Deep Sky Blue</text>
    <text id='l140' class="colour-name-inverted" x="170" y="96.077">Dark Cyan</text>
    <text id='l141' class="colour-name-inverted" x="155" y="104.73725">Teal</text>
    <text id='l142' class="colour-name-inverted" x="140" y="113.3975">Green</text>
    <text id='l143' class="colour-name-inverted" x="125" y="122.05775">Dark Green</text>
    <text id='l144' class="colour-name-inverted" x="110" y="130.718">Blue</text>
    <text id='l145' class="colour-name-inverted" x="95" y="139.37825">Medium Blue</text>
    <text id='l146' class="colour-name-inverted" x="95" y="156.69875">Dark Blue</text>
    <text id='l147' class="colour-name-inverted" x="95" y="174.01925">Navy</text>
    <text id='l148' class="colour-name-inverted" x="95" y="191.33975">Black</text>

<!-- These next colours names are just a suggestion, they do not exist in HTML -->
    <text id='l149' class="colour-name-inverted" x="95" y="208.66025">Rose</text>
    <text id='l150' class="colour-name-inverted" x="95" y="225.98075">Cerise</text>
    <text id='l151' class="colour-name-inverted" x="95" y="243.30125">Lily</text>
    <text id='l152' class="colour-name-inverted" x="95" y="260.6235">Lilac</text>
    <text id='l153' class="colour-name-inverted" x="110" y="269.282">Ruby Red</text>
    <text id='l154' class="colour-name-inverted" x="125" y="277.94225">Blood Red</text>
    <text id='l155' class="colour-name-inverted" x="140" y="286.6025">Wine</text>
    <text id='l156' class="colour-name-inverted" x="155" y="295.26275">Sage Green</text>
    <text id='l157' class="colour-name-inverted" x="170" y="303.923">Emerald Green</text>
    <text id='l158' class="colour-name-inverted" x="185" y="312.58325">Army Green</text>
    <text id='l159' class="colour-name" x="200" y="321.2435">Jade</text>
    <text id='l160' class="colour-name" x="215" y="312.58325">Sapphire Blue</text>
    <text id='l161' class="colour-name" x="230" y="303.923">Citrine</text>
    <text id='l162' class="colour-name" x="245" y="295.26275">Bronze</text>
    <text id='l163' class="colour-name" x="260" y="286.6025">Sand</text>
    <text id='l164' class="colour-name" x="275" y="277.94225">Copper</text>
    <text id='l165' class="colour-name" x="290" y="269.282">Coffee</text>
    <text id='l166' class="colour-name" x="305" y="260.6235">Ice</text>
    <text id='l167' class="colour-name" x="305" y="243.30125">Hazel</text>
    <text id='l168' class="colour-name" x="305" y="225.98075">Amber</text>
    <text id='l169' class="colour-name" x="305" y="208.66025">Sunset Orange</text>
</g>
</svg>`;
        document.body.appendChild(selectorBox);
    }
}

customElements.define("input-palette", InputPalette);
