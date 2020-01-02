import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { AreaChart } from "react-chartkick";
import "chart.js";

export function ChartkickAreaChart(props) {
  const { ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <AreaChart
        id="users-chart"
        width="100%"
        height="100%"
        // stacked={true}
        // discrete={true}
        // label={props.label}
        xtitle="Time"
        ytitle="Revenues"
        curve={true}
        // legend={true}
        legend="bottom"
        // donut={true}
        prefix="$"
        suffix="M"
        // thousands=","
        // decimal=","
        // precision={3}
        // round={2}
        // zeros={true}
        // bytes={true}
        // refresh={60} //Refresh data from a remote source every n seconds
        // download={{ background: "#fff" }} //Opens the image in a new window so to be downloadable
        messages={{ empty: "No data available" }}
        // dataset={{ borderWidth: 0 }}
        data={{
          "2017-01-01 00:00:00 -0800": 2,
          "2017-01-01 00:01:00 -0800": 5
        }}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickAreaChart, {
  ...generatePropertyControls()
});

ChartkickAreaChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
