interface BallProps {
    /** 进度 */
    value: number;
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