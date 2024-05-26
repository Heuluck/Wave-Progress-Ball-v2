import { CSSProperties } from "react";
import { defaultSetting } from "./default";
import "./ball.css";

export default function WaveBall(props: BallProps) {
    const {
        value,
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
            <svg width={350} height={350} xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="175"
                    cy="175"
                    r="170"
                    fill="transparent"
                    stroke={circleColor}
                    strokeWidth={circleLineWidth}
                />
                <g clipPath="url(#cutCircle)">
                    <use
                        className="wave wave-2"
                        xlinkHref="#waveDef"
                        fill={showWaveBg?(isWaveBgGradient ? "url(#Gradient-2)" : waveBgColor):"transparent"}
                        x={waveBgOffsetX * 175}
                        y={waveBgOffsetY}
                        style={
                            {
                                "--time": `${waveBgSpeed}s`,
                                "--animeType": reverseWaveBg ? "move-reverse" : "move",
                            } as CSSProperties
                        }></use>
                    <use
                        className="wave wave-1"
                        xlinkHref="#waveDef"
                        fill={isWaveGradient ? "url(#Gradient-1)" : waveColor}
                        x="0"
                        y={waveOffsetY}
                        style={
                            {
                                "--time": `${waveSpeed}s`,
                                "--animeType": reverseWave ? "move-reverse" : "move",
                            } as CSSProperties
                        }></use>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，以此类推，然后画出下面并自动闭合填充 */}
                    <path
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
                        style={{ "--offsetY": `${350 * ((100 - value) / 100)}px` } as CSSProperties}
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
