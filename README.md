# Input Palette

A lightweight, reusable **Web Component** for selecting colors by their HTML/CSS color names.

🌐 **Demo:** [https://input.palette.des.br](https://input.palette.des.br)

## Overview

**Input Palette** is a custom HTML element that provides a user-friendly color selector based on the standard named colors available in HTML/CSS.

Instead of requiring users to enter hexadecimal or RGB values manually, the component allows them to select a color by its name, making it particularly useful for forms, design tools, educational applications, configuration interfaces, and other web applications that need a simple color input.

Because it is implemented as a **Web Component**, it can be embedded in an existing web page without requiring a particular JavaScript framework.

## Features

* 🎨 Selection of named HTML/CSS colors
* 🧩 Implemented as a reusable Web Component
* 🌐 Framework-independent
* 📦 Can be embedded directly into an HTML page
* 🔌 Designed to work as a form input
* 🖥️ Uses standard browser technologies
* ♻️ Can be reused multiple times on the same page
* 🚀 No framework such as React, Vue, or Angular is required

## Demo

Try the component online:

**[input.palette.des.br](https://input.palette.des.br)**

## Installation

The component can be included directly in an HTML document using a `<script>` tag.

For example:

html
<script
    src="https://input.palette.des.br/lib.js">
</script>


> Adjust the script URL if the published package uses a different filename or distribution path.

## Basic Usage

Once the component has been loaded, use its custom HTML element in your page:

html
<input-palette></input-palette>


For example:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Input Palette Example</title>

    <script
        src="https://input.palette.des.br/lib.js">
    </script>
</head>

<body>

    <h1>Select a color</h1>

    <input-palette></input-palette>

</body>
</html>

Two elements without an ID will not work. Ideally, you should always include the `id` attribute.

## Using the Selected Color

The component is intended to behave as an input control, allowing the selected color to be consumed by JavaScript.

A typical integration can listen for changes and retrieve the selected value:

javascript
const palette = document.querySelector('input-palette');

palette.addEventListener('change', (event) => {
    console.log('Selected color:', event.target.value);
});


The resulting value can then be used anywhere a CSS color is required:

javascript
document.body.style.backgroundColor = palette.value;


## Example

The following example uses the selected color to dynamically change the background of an element:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <script
        src="https://input.palette.des.br/lib.js">
    </script>

    <style>
        #preview {
            width: 200px;
            height: 100px;
            border: 1px solid #ccc;
        }
    </style>
</head>

<body>

    <input-palette id="palette"></input-palette>

    <div id="preview"></div>

    <script>
        const palette = document.querySelector('#palette');
        const preview = document.querySelector('#preview');

        palette.addEventListener('change', () => {
            preview.style.backgroundColor = palette.value;
        });
    </script>

</body>
</html>


## HTML Color Names

The component is intended for selecting colors identified by their standard CSS/HTML names.

Examples include:

| Color name | CSS value |
| ---------- | --------- |
|  red       |  red      |
|  blue      |  blue     |
|  green     |  green    |
|  yellow    |  yellow   |
|  orange    |  orange   |
|  purple    |  purple   |
|  pink      |  pink     |
|  cyan      |  cyan     |
|  magenta   |  magenta  |
|  white     |  white    |
|  black     |  black    |
|  gray      |  gray     |

The selected name can subsequently be used directly as a CSS color value.
The selector includes the 148 named colors, as well as another 21 colors that lack official HTML names; these are hexadecimal codes accompanied by suggested color names.

## Why a Web Component?

The component uses the browser's native **Web Components** technology.

This makes it possible to use the color selector in different environments without coupling it to a specific JavaScript framework.

For example, it can be used in:

* Plain HTML/CSS/JavaScript applications
* React applications
* Vue applications
* Angular applications
* Static websites
* Server-rendered applications
* Educational projects
* Design systems
* Internal tools

The basic integration remains an HTML element:

html
<input-palette></input-palette>


## Multiple Components

Multiple instances can be placed on the same page:

html
<input-palette id="backgroundColor"></input-palette>

<input-palette id="textColor"></input-palette>

<input-palette id="borderColor"></input-palette>


Each instance can be accessed independently:

javascript
const background = document.querySelector('#backgroundColor');
const text = document.querySelector('#textColor');
const border = document.querySelector('#borderColor');


## Integration with Forms

The component can also be used as part of a larger form interface.

For example:

<form id="settings">

    <label>
        Background color
        <input-palette id="background"></input-palette>
    </label>

    <button type="submit">
        Save
    </button>

</form>


JavaScript can then retrieve the selected value:

const form = document.querySelector('#settings');
const background = document.querySelector('#background');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log({
        backgroundColor: background.value
    });
});


## Framework Integration

Since the component is a standard custom HTML element, it can be incorporated into applications built with popular frameworks.

### React

jsx
<input-palette></input-palette>


The element can be accessed through a reference when programmatic interaction is required.

### Vue

html
<input-palette></input-palette>


### Angular

html
<input-palette></input-palette>


Framework-specific configuration may be necessary to allow custom elements, depending on the framework and its configuration.

## Browser Compatibility

The component relies on standard Web Components APIs, including Custom Elements.

It is intended for modern browsers with support for Web Components.

Current versions of major browsers such as:

* Chrome
* Edge
* Firefox
* Safari

support the underlying technologies required by the component.

## Project Structure

A typical Web Component project can be organized as follows:

text
input-palette/
├── index.html
├── input-palette.js
├── input-palette.css
├── README.md
└── package.json


The actual structure may differ depending on the build and distribution configuration.

## API

The public API should be documented around the custom element and its supported properties, attributes, methods, and events.

### Element

html
<input-palette></input-palette>


### Value

The selected color can be accessed through the component's value:

javascript
const color = document.querySelector('input-palette').value;


### Change Event

Applications can react to changes in the selected color:

javascript
document
    .querySelector('input-palette')
    .addEventListener('change', (event) => {
        console.log(event.target.value);
    });


> The exact event/property API should be kept synchronized with the implementation if the component exposes additional attributes, properties, or custom events.

## Accessibility

When integrating the component into an application, provide an appropriate accessible label.

For example:

html
<label for="pageColor">
    Page color
</label>

<input-palette id="pageColor"></input-palette>


Applications embedding the component should also ensure that surrounding form controls and instructions are accessible to keyboard and assistive-technology users.

## Styling

The component's appearance depends on how its internal markup and styles are implemented.

If the component exposes CSS custom properties or `::part()` selectors, those can be used by consuming applications to customize its appearance.

For example, an implementation that exposes a custom property could support:

css
input-palette {
    --palette-size: 2rem;
}


Only styling hooks actually exposed by the component should be used.

## Use Cases

Input Palette can be useful in applications such as:

### Web forms

Allow users to choose a color for a configurable field.

### Theme editors

Provide a simple interface for selecting colors used by a website theme.

### Design tools

Allow designers or developers to select named CSS colors.

### Educational applications

Demonstrate the relationship between HTML elements, CSS colors, and JavaScript.

### Configuration interfaces

Provide a standardized color-selection control for application settings.

### Reusable UI libraries

Use the same color input across multiple independent applications.

## Advantages

Compared with implementing a different color selector in every application, a Web Component provides a reusable interface that can be distributed and integrated as a normal HTML element.

The main advantages are:

* **Reusability** — define the component once and use it in multiple projects.
* **Encapsulation** — implementation details remain inside the component.
* **Framework independence** — no dependency on a particular frontend framework.
* **Simple integration** — applications interact with an ordinary HTML element.
* **Standards-based** — built on browser-native Web Components APIs.

## Contributing

Contributions and suggestions are welcome.

## License MIT

## Author

**Fabio Martins do Carmo**

## Links

* 🌐 **Demo:** [https://input.palette.des.br](https://input.palette.des.br)
* 📦 **Web Component:** Input Palette
