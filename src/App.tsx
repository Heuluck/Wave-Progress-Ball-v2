import WaveBall from "./components/ball/ball";
import { Button, Card, Collapse, ColorPicker, Flex, Form, Slider, Switch, Tabs, Tooltip } from "antd";
import type { TabsProps } from "antd";
import { useState } from "react";
import "./App.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

function App() {
    const [value, setValue] = useState<number>(50);
    const [size, setSize] = useState<number>(350);
    const [circleColor, setCircleColor] = useState<string>("#bdc3c7");
    const [circleLineWidth, setCircleLineWidth] = useState<number>(1);
    const [waveHeight, setWaveHeight] = useState<number>(30);
    const [isWaveGradient, setIsWaveGradient] = useState<boolean>(true);
    const [isWaveBgGradient, setIsWaveBgGradient] = useState<boolean>(true);
    const [waveColor, setWaveColor] = useState<string>("#43CF73");
    const [waveBgColor, setWaveBgColor] = useState<string>("rgba(130, 221, 95,0.5)");
    const [waveGradientColor, setWaveGradientColor] = useState<{ start: string; end: string }>({
        start: "#43CF73",
        end: "#BCEC4F",
    });
    const [waveBgGradientColor, setWaveBgGradientColor] = useState<{ start: string; end: string }>({
        start: "rgba(130, 221, 95,0.5)",
        end: "rgba(130, 221, 97,0.5)",
    });
    const [waveSpeed, setWaveSpeed] = useState<number>(3);
    const [waveBgSpeed, setWaveBgSpeed] = useState<number>(3);
    const [waveOffsetY, setWaveOffsetY] = useState<number>(0);
    const [waveBgOffsetY, setWaveBgOffsetY] = useState<number>(0);
    const [waveBgOffsetX, setWaveBgOffsetX] = useState<number>(1);
    const [showWaveBg, setShowWaveBg] = useState<boolean>(true);
    const [reverseWave, setReverseWave] = useState<boolean>(false);
    const [reverseWaveBg, setReverseWaveBg] = useState<boolean>(false);
    const setting = {
        size,
        circleColor,
        circleLineWidth,
        waveHeight,
        isWaveGradient,
        isWaveBgGradient,
        waveColor,
        waveBgColor,
        waveGradientColor,
        waveBgGradientColor,
        waveSpeed,
        waveBgSpeed,
        waveOffsetY,
        waveBgOffsetY,
        waveBgOffsetX,
        showWaveBg,
        reverseWave,
        reverseWaveBg,
    };

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "基本设置",
            children: (
                <>
                    <Form.Item label="液面高度">
                        <Slider key="height" defaultValue={value} onChange={setValue} min={0} max={100} step={1} />
                    </Form.Item>
                    <Form.Item label="球的大小">
                        <Slider key="size" defaultValue={size} onChange={setSize} min={10} max={1000} step={1} />
                    </Form.Item>
                </>
            ),
        },
        {
            key: "2",
            label: "外框设置",
            children: (
                <>
                    <Form.Item label="外框宽度">
                        <Slider
                            key="lineWidth"
                            defaultValue={circleLineWidth}
                            onChange={setCircleLineWidth}
                            min={0}
                            max={10}
                            step={1}
                        />
                    </Form.Item>
                    <Form.Item label="外框颜色">
                        <ColorPicker
                            key="circleColor"
                            value={circleColor}
                            onChange={(color) => setCircleColor(color.toRgbString())}
                            showText
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            key: "3",
            label: "波浪设置",
            children: (
                <>
                    <Form.Item label="波浪高度">
                        <Slider
                            key="waveHeight"
                            defaultValue={waveHeight}
                            onChange={setWaveHeight}
                            min={0}
                            max={175}
                            step={1}
                        />
                    </Form.Item>
                    <Flex gap="middle" wrap justify="center">
                        <Card title="前景波浪" type="inner">
                            <Form.Item
                                label={
                                    <>
                                        波浪速度&nbsp;
                                        <Tooltip title="越小越快">
                                            <QuestionCircleOutlined style={{ color: "gray" }} />
                                        </Tooltip>
                                    </>
                                }>
                                <Slider
                                    key="speed"
                                    defaultValue={waveSpeed}
                                    onChange={setWaveSpeed}
                                    min={0.1}
                                    max={10}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label="波浪Y轴偏移">
                                <Slider
                                    key="dy"
                                    defaultValue={waveOffsetY}
                                    onChange={setWaveOffsetY}
                                    min={-35}
                                    max={35}
                                    step={1}
                                />
                            </Form.Item>
                            <Form.Item label="反转波浪">
                                <Switch
                                    value={reverseWave}
                                    onChange={setReverseWave}
                                    checkedChildren="左移"
                                    unCheckedChildren="右移"
                                />
                            </Form.Item>
                            <Form.Item label="是否渐变">
                                <Switch
                                    value={isWaveGradient}
                                    onChange={setIsWaveGradient}
                                    checkedChildren="渐变"
                                    unCheckedChildren="单色"
                                />
                            </Form.Item>
                            {isWaveGradient ? (
                                <>
                                    <Form.Item label="开始颜色">
                                        <ColorPicker
                                            key="Color-1-1"
                                            value={waveGradientColor.start}
                                            onChange={(color) =>
                                                setWaveGradientColor((value) => {
                                                    return { start: color.toRgbString(), end: value.end };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                    <Form.Item label="结束颜色">
                                        <ColorPicker
                                            key="Color-1-2"
                                            value={waveGradientColor.end}
                                            onChange={(color) =>
                                                setWaveGradientColor((value) => {
                                                    return { start: value.start, end: color.toRgbString() };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            ) : (
                                <>
                                    <Form.Item label="颜色">
                                        <ColorPicker
                                            key="Color-1-3"
                                            value={waveColor}
                                            onChange={(color) => setWaveColor(color.toRgbString())}
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            )}
                        </Card>
                        <Card title="背景波浪" type="inner">
                            <Form.Item
                                label={
                                    <>
                                        波浪速度&nbsp;
                                        <Tooltip title="越小越快">
                                            <QuestionCircleOutlined style={{ color: "gray" }} />
                                        </Tooltip>
                                    </>
                                }>
                                <Slider
                                    key="speed-2"
                                    defaultValue={waveBgSpeed}
                                    onChange={setWaveBgSpeed}
                                    min={0.1}
                                    max={10}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label="波浪X轴偏移">
                                <Slider
                                    key="dx"
                                    defaultValue={waveBgOffsetX}
                                    onChange={setWaveBgOffsetX}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label="波浪Y轴偏移">
                                <Slider
                                    key="dy-2"
                                    defaultValue={waveBgOffsetY}
                                    onChange={setWaveBgOffsetY}
                                    min={-35}
                                    max={35}
                                    step={1}
                                />
                            </Form.Item>
                            <Form.Item label="是否显示">
                                <Switch
                                    value={showWaveBg}
                                    onChange={setShowWaveBg}
                                    checkedChildren="显示"
                                    unCheckedChildren="隐藏"
                                />
                            </Form.Item>
                            <Form.Item label="反转波浪">
                                <Switch
                                    value={reverseWaveBg}
                                    onChange={setReverseWaveBg}
                                    checkedChildren="左移"
                                    unCheckedChildren="右移"
                                />
                            </Form.Item>
                            <Form.Item label="是否渐变">
                                <Switch
                                    value={isWaveBgGradient}
                                    onChange={setIsWaveBgGradient}
                                    checkedChildren="渐变"
                                    unCheckedChildren="单色"
                                />
                            </Form.Item>
                            {isWaveBgGradient ? (
                                <>
                                    <Form.Item label="开始颜色">
                                        <ColorPicker
                                            key="Color-2-1"
                                            value={waveBgGradientColor.start}
                                            onChange={(color) =>
                                                setWaveBgGradientColor((value) => {
                                                    return { start: color.toRgbString(), end: value.end };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                    <Form.Item label="结束颜色">
                                        <ColorPicker
                                            key="Color-2-2"
                                            value={waveBgGradientColor.end}
                                            onChange={(color) =>
                                                setWaveBgGradientColor((value) => {
                                                    return { start: value.start, end: color.toRgbString() };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            ) : (
                                <>
                                    <Form.Item label="颜色">
                                        <ColorPicker
                                            key="Color-2-3"
                                            value={waveBgColor}
                                            onChange={(color) => setWaveBgColor(color.toRgbString())}
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            )}
                        </Card>
                    </Flex>
                </>
            ),
        },
        {
            key: "4",
            label: "导出设置",
            children: (
                <>
                    <Button block type="primary" onClick={() => navigator.clipboard.writeText(JSON.stringify(setting, null, 2))}>
                        复制
                    </Button>
                    <span className="output">{JSON.stringify(setting, null, 2)}</span>
                    <Collapse
                        items={[
                            {
                                key: "1",
                                label: "使用示例",
                                children: <ExampleCode setting={setting} />,
                            },
                        ]}
                    />
                </>
            ),
        },
    ];

    return (
        <>
            <WaveBall value={value} {...setting} />
            <Tabs defaultActiveKey="1" items={items} />
        </>
    );
}


function ExampleCode(props: { setting: BallSetting }) {
    return (
        <span
            style={{
                textAlign: "left",
                userSelect: "text",
                whiteSpace: "pre-wrap",
                display: "block",
                padding: "8px",
                borderRadius: "8px",
            }}>
            {`export function ExampleBall(){
  const [value, setValue] = useState(50)
  const settings = ${JSON.stringify(props.setting, null, 2)}
  return (
      <>
          <WaveBall value={value} {...settings} />
      </>
  )
}
`}
        </span>
    );
}

export default App;
