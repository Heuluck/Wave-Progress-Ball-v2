import { useRef } from "react";

export default function Ball() {
    const setting = useRef({
        circleColor: "#bdc3c7",
        circleLineWidth: 1,
        waveHeight: 140,
    });
    return (
        <>
            <svg width={350} height={350} xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="175"
                    cy="175"
                    r="170"
                    fill="white"
                    stroke={setting.current.circleColor}
                    strokeWidth={setting.current.circleLineWidth}
                />
                <clipPath id="cutCircle">
                    <circle cx="175" cy="175" r="170" />
                </clipPath>
                {/* 先画半个曲线，然后自动画出另一半，然后画出下面并自动闭合填充，切掉圆形 */}
                <defs>
                    <path
                        d={`M -525 175 Q -437.5 ${setting.current.waveHeight}, -350 175 T -175 175 T 0 175 T 175 175 T 350 175 T 525 175 T 700 175 L 700 350 L -525 350 Z`}
                        fill="rgb(67,207,115)"
                        id="wave"
                    />
                </defs>
                <use className="wave" xlinkHref="#wave" fill="#4579e2" x="50" y="0">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        from="0 0"
                        to="-175 0"
                        dur="3.2s"
                        repeatCount="indefinite"
                    />
                </use>
            </svg>
        </>
    );
}
