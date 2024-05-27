import { defaultSetting } from "./default";
import styled, { keyframes } from "styled-components";
import "./ball.css";

export interface BallProps extends BallSetting {
    /** 进度 */
    value: number;
}

export interface BallSetting {
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

export default function WaveBall(props: BallProps) {
    const {
        value,
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

    const move = keyframes`
    from{
        transform: translate(0);
    }
    to{
        transform: translate(700px);
    }`;

    const moveReverse = keyframes`
    from{
        transform: translate(0);
    }
    to{
        transform: translate(-700px);
    }`;

    const WavePath = styled.path`
        transform: translateY(${350 * ((100 - value) / 100)}px);
        transition: all 1s ease-in-out;
    `;
    const WaveBg = styled.use`
        animation: ${reverseWaveBg ? moveReverse : move} ${waveBgSpeed}s linear infinite;
    `;
    const Wave = styled.use`
        animation: ${reverseWave ? moveReverse : move} ${waveSpeed}s linear infinite;
    `;
    return (
        <>
            <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
                <circle
                    cx="175"
                    cy="175"
                    r="170"
                    fill="transparent"
                    stroke={circleColor}
                    strokeWidth={circleLineWidth}
                />
                <g clipPath="url(#cutCircle)">
                    <WaveBg
                        xlinkHref="#waveDef"
                        fill={showWaveBg ? (isWaveBgGradient ? "url(#Gradient-2)" : waveBgColor) : "transparent"}
                        x={waveBgOffsetX * 175}
                        y={waveBgOffsetY}></WaveBg>
                    <Wave
                        xlinkHref="#waveDef"
                        fill={isWaveGradient ? "url(#Gradient-1)" : waveColor}
                        x="0"
                        y={waveOffsetY}></Wave>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，以此类推，然后画出下面并自动闭合填充 */}
                    <WavePath
                        d={`M -875 0 Q -787.5 ${waveHeight}, -700 0 T -525 0
                        T -350 0 T -175 0
                        T 0 0 T 175 0
                        T 350 0 T 525 0
                        T 700 0 T 875 0
                        T 1050 0 T 1225 0
                        T 1400 0 T 1575 0
                        T 1750 0 T 1925 0
                        L 1750 350 L -875 350 Z`}
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
