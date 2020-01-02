import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { GeoChart } from "react-chartkick";
import "chart.js";

export function ChartkickGeoChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <GeoChart
        id="users-chart"
        width="100%"
        height="100%"
        // stacked={true}
        // discrete={true}
        label="Value"
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
        data={[
          ["United States", 44],
          ["Germany", 23],
          ["Brazil", 22]
        ]}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickGeoChart, {});

ChartkickGeoChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
