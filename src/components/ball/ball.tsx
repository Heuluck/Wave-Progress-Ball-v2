import { useRef } from "react";
import "./ball.css";

export default function Ball() {
    const setting = useRef({
        circleColor: "#bdc3c7",
        circleLineWidth: 1,
        waveHeight: 140,
        waveColor: "",
        waveGradientColor: { start: "#43CF73", end: "#BCEC4F" },
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
                    <use className="wave" xlinkHref="#wave" fill="url(#Gradient)" x="0" y="0"></use>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，然后画出下面并自动闭合填充，切掉圆形 */}
                    <path
                        d={`M -875 175 Q -787.5 ${setting.current.waveHeight}, -700 175 T -525 175
                        T -350 175 T -175 175
                        T 0 175 T 175 175
                        T 350 175 T 525 175
                        T 700 175 T 875 175
                        T 1050 175 T 1225 175
                        T 1400 175 T 1575 175
                        T 1750 175 T 1925 175
                        L 1050 350 L -875 350 Z`}
                        id="wave"
                    />
                    <clipPath id="cutCircle">
                        <circle cx="175" cy="175" r="170" />
                    </clipPath>
                    <linearGradient id="Gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stop-color={setting.current.waveGradientColor.start} />
                        <stop offset="12.5%" stop-color={setting.current.waveGradientColor.end} />
                        <stop offset="25%" stop-color={setting.current.waveGradientColor.start} />
                        <stop offset="37.5%" stop-color={setting.current.waveGradientColor.end} />
                        <stop offset="50%" stop-color={setting.current.waveGradientColor.start} />
                        <stop offset="62.5%" stop-color={setting.current.waveGradientColor.end} />
                        <stop offset="75%" stop-color={setting.current.waveGradientColor.start} />
                        <stop offset="87.5%" stop-color={setting.current.waveGradientColor.end} />
                        <stop offset="100%" stop-color={setting.current.waveGradientColor.start} />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}
