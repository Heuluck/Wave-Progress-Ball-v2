import { CSSProperties, useRef } from "react";
import "./ball.css";

export default function Ball(props: { value: number }) {
    const { value } = props;
    const setting = useRef({
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
    });
    return (
        <>
            <svg width={350} height={350} xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="175"
                    cy="175"
                    r="170"
                    fill="transparent"
                    stroke={setting.current.circleColor}
                    strokeWidth={setting.current.circleLineWidth}
                />
                <g clipPath="url(#cutCircle)">
                    {setting.current.showWaveBg && (
                        <use
                            className="wave wave-2"
                            xlinkHref="#waveDef"
                            fill={setting.current.isWaveBgGradient?"url(#Gradient-2)":setting.current.waveBgColor}
                            x={setting.current.waveBgOffsetX * 175}
                            y={setting.current.waveBgOffsetY}
                            style={
                                {
                                    "--time": `${setting.current.waveBgSpeed}s`,
                                    "--animeType": setting.current.reverseWaveBg ? "move-reverse" : "move",
                                } as CSSProperties
                            }></use>
                    )}
                    <use
                        className="wave wave-1"
                        xlinkHref="#waveDef"
                        fill={setting.current.isWaveGradient?"url(#Gradient-1)":setting.current.waveColor}
                        x="0"
                        y={setting.current.waveOffsetY}
                        style={
                            {
                                "--time": `${setting.current.waveSpeed}s`,
                                "--animeType": setting.current.reverseWave ? "move-reverse" : "move",
                            } as CSSProperties
                        }></use>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，以此类推，然后画出下面并自动闭合填充 */}
                    <path
                        d={`M -875 0 Q -787.5 ${setting.current.waveHeight}, -700 0 T -525 0
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
                        <circle cx="175" cy="175" r="170" />
                    </clipPath>
                    <linearGradient id="Gradient-1" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor={setting.current.waveGradientColor.start} />
                        <stop offset="12.5%" stopColor={setting.current.waveGradientColor.end} />
                        <stop offset="25%" stopColor={setting.current.waveGradientColor.start} />
                        <stop offset="37.5%" stopColor={setting.current.waveGradientColor.end} />
                        <stop offset="50%" stopColor={setting.current.waveGradientColor.start} />
                        <stop offset="62.5%" stopColor={setting.current.waveGradientColor.end} />
                        <stop offset="75%" stopColor={setting.current.waveGradientColor.start} />
                        <stop offset="87.5%" stopColor={setting.current.waveGradientColor.end} />
                        <stop offset="100%" stopColor={setting.current.waveGradientColor.start} />
                    </linearGradient>
                    <linearGradient id="Gradient-2" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor={setting.current.waveBgGradientColor.start} />
                        <stop offset="12.5%" stopColor={setting.current.waveBgGradientColor.end} />
                        <stop offset="25%" stopColor={setting.current.waveBgGradientColor.start} />
                        <stop offset="37.5%" stopColor={setting.current.waveBgGradientColor.end} />
                        <stop offset="50%" stopColor={setting.current.waveBgGradientColor.start} />
                        <stop offset="62.5%" stopColor={setting.current.waveBgGradientColor.end} />
                        <stop offset="75%" stopColor={setting.current.waveBgGradientColor.start} />
                        <stop offset="87.5%" stopColor={setting.current.waveBgGradientColor.end} />
                        <stop offset="100%" stopColor={setting.current.waveBgGradientColor.start} />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}
