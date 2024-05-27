import { BallSettingDefined } from "./ball";

export const defaultSetting:BallSettingDefined = {
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
}