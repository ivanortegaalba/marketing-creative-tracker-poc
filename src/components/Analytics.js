import React from "react";
import cx from "classnames";
import { Responsive, WidthProvider } from "react-grid-layout";
import numeral from "numeral";
import {
    ComposedChart,
    Line,
    Legend,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { Stack, Text } from "office-ui-fabric-react";
import { getTheme } from "@uifabric/styling";
import Data from "../services/data";
import uaData from "../ua-data.json";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Analytics() {
    const theme = getTheme();
    const chartColorPalette = [
        theme.palette.themePrimary,
        theme.palette.yellowDark,
        theme.palette.blueMid
    ];
    const layouts = [
        { i: "touchpoints", x: 0, y: 0, w: 3, h: 1, static: true },
        { i: "installs", x: 3, y: 0, w: 3, h: 1, static: true },
        { i: "conversion rate", x: 6, y: 0, w: 3, h: 1, static: true },
        { i: "revenue", x: 9, y: 0, w: 3, h: 1, static: true },
        { i: "chart", x: 0, y: 1, w: 12, h: 2, static: true },
        { i: "chart2", x: 0, y: 3, w: 12, h: 2, static: true }
    ];

    const layoutsSingleCol = [
        { i: "touchpoints", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "installs", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "conversion rate", x: 0, y: 2, w: 1, h: 1, static: true },
        { i: "revenue", x: 0, y: 3, w: 1, h: 1, static: true },
        { i: "chart", x: 0, y: 4, w: 1, h: 2, static: true },
        { i: "chart2", x: 0, y: 6, w: 1, h: 2, static: true }
    ];

    const dataService = new Data(uaData);

    return (
        <ResponsiveReactGridLayout
            layouts={{
                lg: layouts,
                md: layouts,
                sm: layoutsSingleCol,
                xs: layoutsSingleCol,
                xxs: layoutsSingleCol
            }}
            cols={{ lg: 12, md: 12, sm: 1, xs: 1, xxs: 1 }}
            preventCollision={true}
        >
            <div key="touchpoints">
                <DashboardWidget>
                    <Billboard
                        cells={[
                            {
                                label: "Impressions",
                                value: numeral(14656234).format("0,0")
                            },
                            {
                                label: "Clicks",
                                value: numeral(dataService.clicks()).format(
                                    "0,0"
                                )
                            }
                        ]}
                        footer="TOUCH POINTS"
                    ></Billboard>
                </DashboardWidget>
            </div>
            <div key="installs">
                <DashboardWidget>
                    <Billboard
                        cells={[
                            {
                                label: "Non-organic",
                                value: "10"
                            },
                            {
                                label: "Organic",
                                value: dataService.installs()
                            }
                        ]}
                        footer={`TOTAL INSTALLS: ${dataService.installs()}`}
                    ></Billboard>{" "}
                </DashboardWidget>
            </div>
            <div key="conversion rate">
                <DashboardWidget>
                    <Billboard
                        cells={[
                            {
                                label: "Clicks to Installs",
                                value: numeral(
                                    dataService.clicks() *
                                        dataService.conversionRate()
                                ).format("0,0")
                            }
                        ]}
                        footer={`CONVERSION RATE: ${numeral(
                            dataService.conversionRate()
                        ).format("0.0000")}`}
                    ></Billboard>
                </DashboardWidget>
            </div>
            <div key="revenue">
                <DashboardWidget>
                    <Billboard
                        cells={[
                            {
                                label: "Non-organic",
                                value: "10 $"
                            },
                            {
                                label: "Organic",
                                value: "50 $"
                            }
                        ]}
                        footer="TOTAL REVENUE: 179.987 $"
                    ></Billboard>
                </DashboardWidget>
            </div>
            <div key="chart">
                <DashboardWidget header="User aggregated data">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={dataService.byCampaign()}>
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Bar
                                yAxisId="left"
                                dataKey="installs"
                                fill={chartColorPalette[0]}
                            />
                            <Line
                                yAxisId="right"
                                dataKey="clicks"
                                stroke={chartColorPalette[1]}
                                fill={chartColorPalette[1]}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </DashboardWidget>
            </div>
            <div key="chart2">
                <DashboardWidget header="By ad network">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={dataService.byMediaSource()}>
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <XAxis dataKey="name" interval={0} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar
                                dataKey="installs"
                                fill={chartColorPalette[0]}
                            />
                            <Line
                                dataKey="clicks"
                                fill={chartColorPalette[1]}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </DashboardWidget>
            </div>
        </ResponsiveReactGridLayout>
    );
}

function DashboardWidget({ children, header, className }) {
    return (
        <div className={cx("Widget", className)}>
            {header && (
                <header className="Widget-header">
                    <Text>{header}</Text>
                </header>
            )}
            <section className="Widget-body">{children}</section>
        </div>
    );
}

function Billboard({ cells, footer, className }) {
    return (
        <div className={cx("Billboard", className)}>
            <header className="Billboard-cells">
                {cells.map(cell => {
                    return (
                        <div className="Billboard-cell">
                            <Stack>
                                <Text variant="xLarge">{cell.value}</Text>
                                <Text variant="mediumPlus">{cell.label}</Text>
                            </Stack>
                        </div>
                    );
                })}
            </header>
            <footer className="Billboard-footer">
                <Text>{footer}</Text>
            </footer>
        </div>
    );
}
