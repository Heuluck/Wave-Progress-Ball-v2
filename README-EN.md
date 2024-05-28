# Wave Progress Ball for React
<div align="center">

![NPM Version](https://img.shields.io/npm/v/react-wave-progress-ball-svg?style=flat-square) ![NPM Downloads](https://img.shields.io/npm/dm/react-wave-progress-ball-svg?style=flat-square) ![NPM Type Definitions](https://img.shields.io/npm/types/react-wave-progress-ball-svg?style=flat-square)
 ![NPM License](https://img.shields.io/npm/l/react-wave-progress-ball-svg?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-wave-progress-ball-svg?style=flat-square) [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[中文](./README.md) · English

</div>

This is a React component that uses `<svg>` to implement a wave progress ball. The progress ball can be customized in terms of color, size, progress, gradient, speed, etc. Custom content is detailed in [Customization](#Customization).

## Preview

[Demo of Wave Progress Ball](https://heuluck.github.io/Wave-Progress-Ball-Demo/)

## Install

After installing the package with `npm` or `yarn`, you can use it in your project.

```bash
$ npm i react-wave-progress-ball-svg
```

```bash
$ yarn add react-wave-progress-ball-svg
```

And then import it in your project (Css file should be imported manually):

```jsx
import WaveBall from "react-wave-progress-ball-svg";
import "react-wave-progress-ball-svg/dist/style.css";
```

## Usage

### Basic Usage

```jsx
const [value, setValue] = useState(50);
return <WaveBall value={value} />;
```

### Customization

#### Setting Generator

Simply open the [Demo Page (Chinese)](https://heuluck.github.io/Wave-Progress-Ball-Demo/), and copy the settings from "导出设置".

#### Example

```jsx
import WaveBall from "react-wave-progress-ball-svg";
import "react-wave-progress-ball-svg/dist/style.css";

export function ExampleBall() {
    const [value, setValue] = useState(50);
    const settings = {
        size: 350,
        adaptive: false,
        circleColor: "#bdc3c7",
        circleLineWidth: 1,
        waveHeight: 30,
        isWaveGradient: true,
        isWaveBgGradient: true,
        waveColor: "#43CF73",
        waveBgColor: "rgba(130, 221, 95,0.5)",
        waveGradientColor: {
            start: "#43CF73",
            end: "#BCEC4F",
        },
        waveBgGradientColor: {
            start: "rgba(130, 221, 95,0.5)",
            end: "rgba(130, 221, 97,0.5)",
        },
        waveSpeed: 3,
        waveBgSpeed: 3,
        waveOffsetY: 0,
        waveBgOffsetY: 0,
        waveBgOffsetX: 1,
        showWaveBg: true,
        reverseWave: false,
        reverseWaveBg: false,
    };
    return (
        <>
            <WaveBall value={value} {...settings} />
        </>
    );
}
```

#### Props

| Property               | Description                                                 | Type                            | Default Value                                                           | is required  |
| ------------------- | ---------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------- | ----- |
| value               | To set the completion percentage                     | number                          | -                                                                | true  |
| style               | style of the `svg` tag                               | CSSProperties                   | -                                                                | false |
| className           | className of the `svg` tag                           | string                          | -                                                                | false |
| adaptive            | Whether to adapt to size                             | boolean                         | false                                                            | false |
| size                | Size of the ball                                     | number                          | 350                                                              | false |
| circleColor         | Color of the circle ring                             | string                          | "#bdc3c7"                                                        | false |
| circleLineWidth     | Width of the circle ring line                        | number                          | 1                                                                | false |
| waveHeight          | Height of the wave                                   | number                          | 30                                                               | false |
| isWaveGradient      | Whether to enable foreground wave gradient effect    | boolean                         | true                                                             | false |
| isWaveBgGradient    | Whether to enable background wave gradient effect    | boolean                         | true                                                             | false |
| waveColor           | Color of the foreground wave                         | string                          | "#43CF73"                                                        | false |
| waveBgColor         | Color of the background wave                         | string                          | "rgba(130,221,95,0.5)"                                           | false |
| waveGradientColor   | Start and end colors of the foreground wave gradient | { start: string; end: string; } | {start: "#43CF73",end: "#BCEC4F",}                               | false |
| waveBgGradientColor | Start and end colors of the background wave gradient | { start: string; end: string; } | {start: "rgba(130, 221, 95,0.5)",end: "rgba(130, 221, 97,0.5)",} | false |
| waveSpeed           | Speed of the foreground wave movement                | number                          | 3                                                                | false |
| waveBgSpeed         | Speed of the background wave movement                | number                          | 3                                                                | false |
| waveOffsetY         | Vertical offset of the foreground wave               | number                          | 0                                                                | false |
| waveBgOffsetY       | Vertical offset of the background wave               | number                          | 0                                                                | false |
| waveBgOffsetX       | Horizontal offset of the background wave             | number                          | 1                                                                | false |
| showWaveBg          | Whether to show the background wave                  | boolean                         | true                                                             | false |
| reverseWave         | Whether to reverse the wave                          | boolean                         | false                                                            | false |
| reverseWaveBg       | Whether to reverse the background wave               | boolean                         | false                                                            | false |
