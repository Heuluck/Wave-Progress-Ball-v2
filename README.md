# 波浪进度球 Wave Progress Ball for React

<div align="center">

![NPM Version](https://img.shields.io/npm/v/react-wave-progress-ball-svg?style=flat-square) ![NPM Downloads](https://img.shields.io/npm/d18m/react-wave-progress-ball-svg?style=flat-square) ![NPM Type Definitions](https://img.shields.io/npm/types/react-wave-progress-ball-svg?style=flat-square)
![NPM License](https://img.shields.io/npm/l/react-wave-progress-ball-svg?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-wave-progress-ball-svg?style=flat-square) [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

中文 · [English](./README-EN.md)

</div>

这是一个基于 React，使用`<svg>`实现的波浪进度球组件。进度球可以自定义颜色、大小、进度、渐变、速度等23种参数。自定义内容详见[自定义](#自定义)。

## 预览

[波浪进度球 Demo](https://heuluck.github.io/Wave-Progress-Ball-Demo/)

## 安装

使用`npm`或`yarn`等包管理器安装后，即可在项目中使用。

```bash
$ npm i react-wave-progress-ball-svg
```

```bash
$ yarn add react-wave-progress-ball-svg
```

然后在需要处引入即可 (注意需要手动引入样式)：

```jsx
import WaveBall from "react-wave-progress-ball-svg";
import "react-wave-progress-ball-svg/dist/style.css";
```

## 使用

### 基本用法

```jsx
const [value, setValue] = useState(50);
return <WaveBall value={value} />;
```

### 自定义

#### 快速生成

只需要在[波浪进度球 Demo 页面](https://heuluck.github.io/Wave-Progress-Ball-Demo/)中配置好参数，在“导出设置”选项卡点击复制按钮即可。

#### 示例

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

#### 参数 Props

| 参数                | 说明                           | 类型                              | 默认值                                                           | 必填  |
| ------------------- | ------------------------------ | --------------------------------- | ---------------------------------------------------------------- | ----- |
| value               | 进度百分比                     | `number`                          | -                                                                | true  |
| style               | 样式                           | `CSSProperties`                   | -                                                                | false |
| className           | 类名                           | `string`                          | -                                                                | false |
| adaptive            | 是否自适应大小                 | `boolean`                         | false                                                            | false |
| bgColor             | 背景颜色                       | `transparent\|string`             | "transparent"                                                    | false |
| size                | 球的大小                       | `number`                          | 350                                                              | false |
| circleColor         | 圆环的颜色                     | `string`                          | "#bdc3c7"                                                        | false |
| circleLineWidth     | 圆环线条的宽度                 | `number`                          | 1                                                                | false |
| waveHeight          | 波浪的高度                     | `number`                          | 30                                                               | false |
| isWaveGradient      | 是否启用波浪渐变效果           | `boolean`                         | true                                                             | false |
| isWaveBgGradient    | 是否启用背景波浪渐变效果       | `boolean`                         | true                                                             | false |
| waveColor           | 波浪的颜色                     | `string`                          | "#43CF73"                                                        | false |
| waveBgColor         | 背景波浪的颜色                 | `string`                          | "rgba(130,221,95,0.5)"                                           | false |
| waveGradientColor   | 波浪渐变色的起始和结束颜色     | `{ start: string; end: string; }` | {start: "#43CF73",end: "#BCEC4F",}                               | false |
| waveBgGradientColor | 背景波浪渐变色的起始和结束颜色 | `{ start: string; end: string; }` | {start: "rgba(130, 221, 95,0.5)",end: "rgba(130, 221, 97,0.5)",} | false |
| waveSpeed           | 波浪的移动速度                 | `number`                          | 3                                                                | false |
| waveBgSpeed         | 背景波浪的移动速度             | `number`                          | 3                                                                | false |
| waveOffsetY         | 波浪的垂直偏移量               | `number`                          | 0                                                                | false |
| waveBgOffsetY       | 背景波浪的垂直偏移量           | `number`                          | 0                                                                | false |
| waveBgOffsetX       | 背景波浪的水平偏移量           | `number`                          | 1                                                                | false |
| showWaveBg          | 是否显示背景波浪               | `boolean`                         | true                                                             | false |
| reverseWave         | 是否反转波浪                   | `boolean`                         | false                                                            | false |
| reverseWaveBg       | 是否反转背景波浪               | `boolean`                         | false                                                            | false |

## 更新日志

[更新日志](./CHANGELOG.md)
