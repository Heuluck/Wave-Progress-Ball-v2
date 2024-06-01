import { CSSProperties } from "react";
import styleModule from "./ball.module.css";

export default function WaveBall(props: BallProps) {
    const {
        value,
        style,
        className,
        adaptive = defaultSetting.adaptive,
        bgColor = defaultSetting.bgColor,
        size = defaultSetting.size,
        circleColor = defaultSetting.circleColor,
        circleLineWidth = defaultSetting.circleLineWidth,
        waveHeight = defaultSetting.waveHeight,
        isWaveGradient = defaultSetting.isWaveGradient,
        isWaveBgGradient = defaultSetting.isWaveBgGradient,
        waveColor = defaultSetting.waveColor,
        waveBgColor = defaultSetting.waveBgColor,
        waveGradientColor = defaultSetting.waveGradientColor,
        waveBgGradientColor = defaultSetting.waveBgGradientColor,
        waveSpeed = defaultSetting.waveSpeed,
        waveBgSpeed = defaultSetting.waveBgSpeed,
        waveOffsetY = defaultSetting.waveOffsetY,
        waveBgOffsetY = defaultSetting.waveBgOffsetY,
        waveBgOffsetX = defaultSetting.waveBgOffsetX,
        showWaveBg = defaultSetting.showWaveBg,
        reverseWave = defaultSetting.reverseWave,
        reverseWaveBg = defaultSetting.reverseWaveBg,
    } = props;

    return (
        <>
            <svg
                style={style}
                className={className}
                width={adaptive ? "100%" : size}
                height={adaptive ? "100%" : size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 350">
                <circle cx="175" cy="175" r="170" fill={bgColor} stroke={circleColor} strokeWidth={circleLineWidth} />
                <g
                    clipPath="url(#cutCircle)"
                    style={{ "--offsetY": `${350 * ((100 - value) / 100)}px` } as CSSProperties}>
                    <use
                        className={styleModule.wave}
                        xlinkHref="#waveDef"
                        fill={showWaveBg ? (isWaveBgGradient ? "url(#Gradient-2)" : waveBgColor) : "transparent"}
                        x={waveBgOffsetX * 175}
                        y={waveBgOffsetY}
                        style={
                            {
                                "--time": `${waveBgSpeed}s`,
                                "--animeType": reverseWaveBg ? styleModule["move-reverse"] : styleModule["move"],
                            } as CSSProperties
                        }></use>
                    <use
                        className={styleModule.wave}
                        xlinkHref="#waveDef"
                        fill={isWaveGradient ? "url(#Gradient-1)" : waveColor}
                        x="0"
                        y={waveOffsetY}
                        style={
                            {
                                "--time": `${waveSpeed}s`,
                                "--animeType": reverseWave ? styleModule["move-reverse"] : styleModule["move"],
                            } as CSSProperties
                        }></use>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，以此类推，然后画出下面并自动闭合填充 */}
                    <path
                        d={`M -1050 0 Q -962.5 ${waveHeight}, -875 0 T -700 0
                        T -525 0 T -350 0
                        T -175 0 T 0 0
                        T 175 0 T 350 0
                        T 525 0 T 700 0
                        T 875 0 T 1050 0
                        T 1225 0 T 1400 0
                        T 1575 0 T 1750 0
                        L 1750 350 L -1050 350 Z`}
                        className={styleModule.waveDef}
                        id="waveDef"
                    />
                    <clipPath id="cutCircle">
                        <circle cx="175" cy="175" r={170 - circleLineWidth / 2} />
                    </clipPath>
                    <linearGradient id="Gradient-1" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor={waveGradientColor.start} />
                        <stop offset="12.5%" stopColor={waveGradientColor.end} />
                        <stop offset="25%" stopColor={waveGradientColor.start} />
                        <stop offset="37.5%" stopColor={waveGradientColor.end} />
                        <stop offset="50%" stopColor={waveGradientColor.start} />
                        <stop offset="62.5%" stopColor={waveGradientColor.end} />
                        <stop offset="75%" stopColor={waveGradientColor.start} />
                        <stop offset="87.5%" stopColor={waveGradientColor.end} />
                        <stop offset="100%" stopColor={waveGradientColor.start} />
                    </linearGradient>
                    <linearGradient id="Gradient-2" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor={waveBgGradientColor.start} />
                        <stop offset="12.5%" stopColor={waveBgGradientColor.end} />
                        <stop offset="25%" stopColor={waveBgGradientColor.start} />
                        <stop offset="37.5%" stopColor={waveBgGradientColor.end} />
                        <stop offset="50%" stopColor={waveBgGradientColor.start} />
                        <stop offset="62.5%" stopColor={waveBgGradientColor.end} />
                        <stop offset="75%" stopColor={waveBgGradientColor.start} />
                        <stop offset="87.5%" stopColor={waveBgGradientColor.end} />
                        <stop offset="100%" stopColor={waveBgGradientColor.start} />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}

const defaultSetting: BallSettingDefined = {
    adaptive: false,
    bgColor: "transparent",
    size: 350,
    circleColor: "#bdc3c7",
    circleLineWidth: 1,
    waveHeight: 30,
    isWaveGradient: true,
    isWaveBgGradient: true,
    waveColor: "#43CF73",
    waveBgColor: "rgba(130, 221, 95,0.5)",
    waveGradientColor: { start: "#43CF73", end: "#BCEC4F" },
    waveBgGradientColor: { start: "rgba(130, 221, 95,0.5)", end: "rgba(130, 221, 97,0.5)" },
    waveSpeed: 3,
    waveBgSpeed: 3,
    waveOffsetY: 0,
    waveBgOffsetY: 0,
    waveBgOffsetX: 1,
    showWaveBg: true,
    reverseWave: false,
    reverseWaveBg: false,
};

export interface BallProps extends BallSetting {
    /** 进度 */
    value: number;
    /** 样式 */
    style?: CSSProperties;
    /** 样式类名 */
    className?: string;
}

export interface BallSetting {
    /** 自适应大小 */
    adaptive?: boolean;
    /**背景颜色 */
    bgColor?: "transparent" | string;
    /** 圆环的半径 */
    size?: number;
    /** 圆环的颜色 */
    circleColor?: string;
    /** 圆环线条的宽度 */
    circleLineWidth?: number;
    /** 波浪的高度 */
    waveHeight?: number;
    /** 是否启用波浪渐变效果 */
    isWaveGradient?: boolean;
    /** 是否启用背景波浪渐变效果 */
    isWaveBgGradient?: boolean;
    /** 波浪的颜色 */
    waveColor?: string;
    /** 背景波浪的颜色 */
    waveBgColor?: string;
    /** 波浪渐变色的起始和结束颜色 */
    waveGradientColor?: {
        /** 渐变的起始颜色 */
        start: string;
        /** 渐变的结束颜色 */
        end: string;
    };
    /** 背景波浪渐变色的起始和结束颜色 */
    waveBgGradientColor?: {
        /** 背景波浪渐变的起始颜色 */
        start: string;
        /** 背景波浪渐变的结束颜色 */
        end: string;
    };
    /** 波浪的移动速度 */
    waveSpeed?: number;
    /** 背景波浪的移动速度 */
    waveBgSpeed?: number;
    /** 波浪的垂直偏移量 */
    waveOffsetY?: number;
    /** 背景波浪的垂直偏移量 */
    waveBgOffsetY?: number;
    /** 背景波浪的水平偏移量 */
    waveBgOffsetX?: number;
    /** 是否显示背景波浪 */
    showWaveBg?: boolean;
    /** 是否反转波浪 */
    reverseWave?: boolean;
    /** 是否反转背景波浪 */
    reverseWaveBg?: boolean;
}

export interface BallSettingDefined {
    /** 自适应大小 */
    adaptive: boolean;
    /**背景颜色 */
    bgColor: "transparent" | string;
    /** 圆环的半径 */
    size: number;
    /** 圆环的颜色 */
    circleColor: string;
    /** 圆环线条的宽度 */
    circleLineWidth: number;
    /** 波浪的高度 */
    waveHeight: number;
    /** 是否启用波浪渐变效果 */
    isWaveGradient: boolean;
    /** 是否启用背景波浪渐变效果 */
    isWaveBgGradient: boolean;
    /** 波浪的颜色 */
    waveColor: string;
    /** 背景波浪的颜色 */
    waveBgColor: string;
    /** 波浪渐变色的起始和结束颜色 */
    waveGradientColor: {
        /** 渐变的起始颜色 */
        start: string;
        /** 渐变的结束颜色 */
        end: string;
    };
    /** 背景波浪渐变色的起始和结束颜色 */
    waveBgGradientColor: {
        /** 背景波浪渐变的起始颜色 */
        start: string;
        /** 背景波浪渐变的结束颜色 */
        end: string;
    };
    /** 波浪的移动速度 */
    waveSpeed: number;
    /** 背景波浪的移动速度 */
    waveBgSpeed: number;
    /** 波浪的垂直偏移量 */
    waveOffsetY: number;
    /** 背景波浪的垂直偏移量 */
    waveBgOffsetY: number;
    /** 背景波浪的水平偏移量 */
    waveBgOffsetX: number;
    /** 是否显示背景波浪 */
    showWaveBg: boolean;
    /** 是否反转波浪 */
    reverseWave: boolean;
    /** 是否反转背景波浪 */
    reverseWaveBg: boolean;
}
