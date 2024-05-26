import { CSSProperties, useRef } from "react";
import "./ball.css";

export default function Ball(props: { value: number }) {
    const { value } = props;
    const setting = useRef({
        circleColor: "#bdc3c7",
        circleLineWidth: 1,
        waveHeight: 30,
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
                    <use
                        className="wave"
                        xlinkHref="#waveDef"
                        fill="url(#Gradient)"
                        x="0"
                        style={{ "--time": "2s" } as CSSProperties}></use>
                </g>
                <defs>
                    {/* 先画半个曲线，然后自动画出另一半，然后画出下面并自动闭合填充，切掉圆形 */}
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
                    <linearGradient id="Gradient" x1="0" x2="1" y1="0" y2="0">
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
                </defs>
            </svg>
        </>
    );
}
