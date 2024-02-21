import React from "react";

export const ServiceProviderDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card ">
            <div className="card-header ">
              <h4 className="card-title">Email Statistics</h4>
              <p className="card-category">Last Campaign Performance</p>
            </div>
            <div className="card-body ">
              <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
                {/* <svg
                  xmlns:ct="http://gionkunz.github.com/chartist-js/ct"
                  width="100%"
                  height="100%"
                  className="ct-chart-pie"
                  style={{ width: "100%", height: "100%" }}
                >
                  <g className="ct-series ct-series-c">
                    <path
                      d="M174,5A117.5,117.5,0,0,0,98.787,32.227L174,122.5Z"
                      className="ct-slice-pie"
                      ct:value={11}
                    />
                  </g>
                  <g className="ct-series ct-series-b">
                    <path
                      d="M99.103,31.965A117.5,117.5,0,0,0,152.386,237.995L174,122.5Z"
                      className="ct-slice-pie"
                      ct:value={36}
                    />
                  </g>
                  <g className="ct-series ct-series-a">
                    <path
                      d="M151.983,237.919A117.5,117.5,0,1,0,174,5L174,122.5Z"
                      className="ct-slice-pie"
                      ct:value={53}
                    />
                  </g>
                  <g>
                    <text
                      dx="232.48926542043094"
                      dy="128.02886340746272"
                      textAnchor="middle"
                      className="ct-label"
                    >
                      53%
                    </text>
                    <text
                      dx="117.09573928369292"
                      dy="137.11053087093524"
                      textAnchor="middle"
                      className="ct-label"
                    >
                      36%
                    </text>
                    <text
                      dx="154.0991471855891"
                      dy="67.22325482393927"
                      textAnchor="middle"
                      className="ct-label"
                    >
                      11%
                    </text>
                  </g>
                </svg> */}
              </div>
              <div className="legend">
                <i className="fa fa-circle text-info" /> Open
                <i className="fa fa-circle text-danger" /> Bounce
                <i className="fa fa-circle text-warning" /> Unsubscribe
              </div>
              <hr />
              <div className="stats">
                <i className="fa fa-clock-o" /> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card ">
            <div className="card-header ">
              <h4 className="card-title">Users Behavior</h4>
              <p className="card-category">24 Hours performance</p>
            </div>
            <div className="card-body ">
              <div id="chartHours" className="ct-chart">
                {/* <svg
                  xmlns:ct="http://gionkunz.github.com/chartist-js/ct"
                  width="100%"
                  height="245px"
                  className="ct-chart-line"
                  style={{ width: "100%", height: 245 }}
                >
                  <g className="ct-grids">
                    <line
                      y1={210}
                      y2={210}
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="185.625"
                      y2="185.625"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="161.25"
                      y2="161.25"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="136.875"
                      y2="136.875"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="112.5"
                      y2="112.5"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="88.125"
                      y2="88.125"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="63.75"
                      y2="63.75"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="39.375"
                      y2="39.375"
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1={15}
                      y2={15}
                      x1={50}
                      x2={743}
                      className="ct-grid ct-vertical"
                    />
                  </g>
                  <g>
                    <g className="ct-series ct-series-a">
                      <path
                        d="M50,210L50,140.044C78.875,140.044,107.75,116.156,136.625,116.156C165.5,116.156,194.375,90.563,223.25,90.563C252.125,90.563,281,90.075,309.875,90.075C338.75,90.075,367.625,74.963,396.5,74.963C425.375,74.963,454.25,67.163,483.125,67.163C512,67.163,540.875,39.863,569.75,39.863C598.625,39.863,627.5,40.594,656.375,40.594C685.25,40.594,714.125,26.7,743,26.7C771.875,26.7,800.75,17.925,829.625,17.925C858.5,17.925,887.375,3.787,916.25,3.787C945.125,3.787,974,-20.1,1002.875,-20.1L1002.875,210Z"
                        className="ct-area"
                        ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                      />
                    </g>
                    <g className="ct-series ct-series-b">
                      <path
                        d="M50,210L50,193.669C78.875,193.669,107.75,172.95,136.625,172.95C165.5,172.95,194.375,175.144,223.25,175.144C252.125,175.144,281,151.5,309.875,151.5C338.75,151.5,367.625,140.044,396.5,140.044C425.375,140.044,454.25,128.344,483.125,128.344C512,128.344,540.875,103.969,569.75,103.969C598.625,103.969,627.5,103.481,656.375,103.481C685.25,103.481,714.125,78.619,743,78.619C771.875,78.619,800.75,77.887,829.625,77.887C858.5,77.887,887.375,77.4,916.25,77.4C945.125,77.4,974,52.294,1002.875,52.294L1002.875,210Z"
                        className="ct-area"
                        ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                      />
                    </g>
                    <g className="ct-series ct-series-c">
                      <path
                        d="M50,210L50,204.394C78.875,204.394,107.75,182.456,136.625,182.456C165.5,182.456,194.375,193.669,223.25,193.669C252.125,193.669,281,183.675,309.875,183.675C338.75,183.675,367.625,163.688,396.5,163.688C425.375,163.688,454.25,151.744,483.125,151.744C512,151.744,540.875,135.169,569.75,135.169C598.625,135.169,627.5,134.925,656.375,134.925C685.25,134.925,714.125,102.994,743,102.994C771.875,102.994,800.75,110.063,829.625,110.063C858.5,110.063,887.375,110.063,916.25,110.063C945.125,110.063,974,85.931,1002.875,85.931L1002.875,210Z"
                        className="ct-area"
                        ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                      />
                    </g>
                  </g>
                  <g className="ct-labels">
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x={50}
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        9:00AM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="136.625"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        12:00AM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="223.25"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        3:00PM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="309.875"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        6:00PM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="396.5"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        9:00PM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="483.125"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        12:00PM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="569.75"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        3:00AM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="656.375"
                      y={215}
                      width="86.625"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 87, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        6:00AM
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="185.625"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        0
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="161.25"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        100
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="136.875"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        200
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="112.5"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        300
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="88.125"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        400
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="63.75"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        500
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="39.375"
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        600
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={15}
                      x={10}
                      height="24.375"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 24, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        700
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={-15}
                      x={10}
                      height={30}
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 30, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        800
                      </span>
                    </foreignObject>
                  </g>
                </svg> */}
              </div>
            </div>
            <div className="card-footer ">
              <div className="legend">
                <i className="fa fa-circle text-info" /> Open
                <i className="fa fa-circle text-danger" /> Click
                <i className="fa fa-circle text-warning" /> Click Second Time
              </div>
              <hr />
              <div className="stats">
                <i className="fa fa-history" /> Updated 3 minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-header ">
              <h4 className="card-title">2017 Sales</h4>
              <p className="card-category">All products including Taxes</p>
            </div>
            <div className="card-body ">
              <div id="chartActivity" className="ct-chart">
                {/* <svg
                  xmlns:ct="http://gionkunz.github.com/chartist-js/ct"
                  width="100%"
                  height="245px"
                  className="ct-chart-bar"
                  style={{ width: "100%", height: 245 }}
                >
                  <g className="ct-grids">
                    <line
                      y1={210}
                      y2={210}
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="188.33333333333334"
                      y2="188.33333333333334"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="166.66666666666666"
                      y2="166.66666666666666"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1={145}
                      y2={145}
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="123.33333333333333"
                      y2="123.33333333333333"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="101.66666666666667"
                      y2="101.66666666666667"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1={80}
                      y2={80}
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="58.33333333333334"
                      y2="58.33333333333334"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1="36.66666666666666"
                      y2="36.66666666666666"
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                    <line
                      y1={15}
                      y2={15}
                      x1={50}
                      x2={538}
                      className="ct-grid ct-vertical"
                    />
                  </g>
                  <g>
                    <g className="ct-series ct-series-a">
                      <line
                        x1="65.33333333333333"
                        x2="65.33333333333333"
                        y1={210}
                        y2="92.56666666666666"
                        className="ct-bar"
                        ct:value={542}
                      />
                      <line
                        x1="105.99999999999999"
                        x2="105.99999999999999"
                        y1={210}
                        y2="114.01666666666667"
                        className="ct-bar"
                        ct:value={443}
                      />
                      <line
                        x1="146.66666666666666"
                        x2="146.66666666666666"
                        y1={210}
                        y2="140.66666666666669"
                        className="ct-bar"
                        ct:value={320}
                      />
                      <line
                        x1="187.33333333333334"
                        x2="187.33333333333334"
                        y1={210}
                        y2={41}
                        className="ct-bar"
                        ct:value={780}
                      />
                      <line
                        x1={228}
                        x2={228}
                        y1={210}
                        y2="90.18333333333334"
                        className="ct-bar"
                        ct:value={553}
                      />
                      <line
                        x1="268.66666666666663"
                        x2="268.66666666666663"
                        y1={210}
                        y2="111.85"
                        className="ct-bar"
                        ct:value={453}
                      />
                      <line
                        x1="309.3333333333333"
                        x2="309.3333333333333"
                        y1={210}
                        y2="139.36666666666667"
                        className="ct-bar"
                        ct:value={326}
                      />
                      <line
                        x1="349.99999999999994"
                        x2="349.99999999999994"
                        y1={210}
                        y2="115.96666666666667"
                        className="ct-bar"
                        ct:value={434}
                      />
                      <line
                        x1="390.66666666666663"
                        x2="390.66666666666663"
                        y1={210}
                        y2="86.93333333333334"
                        className="ct-bar"
                        ct:value={568}
                      />
                      <line
                        x1="431.3333333333333"
                        x2="431.3333333333333"
                        y1={210}
                        y2="77.83333333333334"
                        className="ct-bar"
                        ct:value={610}
                      />
                      <line
                        x1="471.99999999999994"
                        x2="471.99999999999994"
                        y1={210}
                        y2="46.19999999999999"
                        className="ct-bar"
                        ct:value={756}
                      />
                      <line
                        x1="512.6666666666666"
                        x2="512.6666666666666"
                        y1={210}
                        y2="16.083333333333343"
                        className="ct-bar"
                        ct:value={895}
                      />
                    </g>
                    <g className="ct-series ct-series-b">
                      <line
                        x1="75.33333333333333"
                        x2="75.33333333333333"
                        y1={210}
                        y2="120.73333333333333"
                        className="ct-bar"
                        ct:value={412}
                      />
                      <line
                        x1="115.99999999999999"
                        x2="115.99999999999999"
                        y1={210}
                        y2="157.35"
                        className="ct-bar"
                        ct:value={243}
                      />
                      <line
                        x1="156.66666666666666"
                        x2="156.66666666666666"
                        y1={210}
                        y2="149.33333333333334"
                        className="ct-bar"
                        ct:value={280}
                      />
                      <line
                        x1="197.33333333333334"
                        x2="197.33333333333334"
                        y1={210}
                        y2="84.33333333333333"
                        className="ct-bar"
                        ct:value={580}
                      />
                      <line
                        x1={238}
                        x2={238}
                        y1={210}
                        y2="111.85"
                        className="ct-bar"
                        ct:value={453}
                      />
                      <line
                        x1="278.66666666666663"
                        x2="278.66666666666663"
                        y1={210}
                        y2="133.51666666666665"
                        className="ct-bar"
                        ct:value={353}
                      />
                      <line
                        x1="319.3333333333333"
                        x2="319.3333333333333"
                        y1={210}
                        y2={145}
                        className="ct-bar"
                        ct:value={300}
                      />
                      <line
                        x1="359.99999999999994"
                        x2="359.99999999999994"
                        y1={210}
                        y2="131.13333333333333"
                        className="ct-bar"
                        ct:value={364}
                      />
                      <line
                        x1="400.66666666666663"
                        x2="400.66666666666663"
                        y1={210}
                        y2="130.26666666666665"
                        className="ct-bar"
                        ct:value={368}
                      />
                      <line
                        x1="441.3333333333333"
                        x2="441.3333333333333"
                        y1={210}
                        y2="121.16666666666667"
                        className="ct-bar"
                        ct:value={410}
                      />
                      <line
                        x1="481.99999999999994"
                        x2="481.99999999999994"
                        y1={210}
                        y2="72.19999999999999"
                        className="ct-bar"
                        ct:value={636}
                      />
                      <line
                        x1="522.6666666666666"
                        x2="522.6666666666666"
                        y1={210}
                        y2="59.41666666666666"
                        className="ct-bar"
                        ct:value={695}
                      />
                    </g>
                  </g>
                  <g className="ct-labels">
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x={50}
                      y={215}
                      width="40.666666666666664"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Jan
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="90.66666666666666"
                      y={215}
                      width="40.666666666666664"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Feb
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="131.33333333333331"
                      y={215}
                      width="40.66666666666667"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Mar
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x={172}
                      y={215}
                      width="40.66666666666666"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Apr
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="212.66666666666666"
                      y={215}
                      width="40.66666666666666"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Mai
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="253.33333333333331"
                      y={215}
                      width="40.666666666666686"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Jun
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x={294}
                      y={215}
                      width="40.66666666666663"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Jul
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="334.66666666666663"
                      y={215}
                      width="40.666666666666686"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Aug
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="375.3333333333333"
                      y={215}
                      width="40.666666666666686"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Sep
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x={416}
                      y={215}
                      width="40.66666666666663"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Oct
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="456.66666666666663"
                      y={215}
                      width="40.666666666666686"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Nov
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      x="497.3333333333333"
                      y={215}
                      width="40.666666666666686"
                      height={20}
                    >
                      <span
                        className="ct-label ct-horizontal ct-end"
                        style={{ width: 41, height: 20 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        Dec
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="188.33333333333334"
                      x={10}
                      height="21.666666666666668"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        0
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="166.66666666666669"
                      x={10}
                      height="21.666666666666668"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        100
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={145}
                      x={10}
                      height="21.666666666666664"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        200
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="123.33333333333333"
                      x={10}
                      height="21.66666666666667"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        300
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="101.66666666666667"
                      x={10}
                      height="21.666666666666657"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        400
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={80}
                      x={10}
                      height="21.66666666666667"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        500
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="58.33333333333334"
                      x={10}
                      height="21.666666666666657"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        600
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y="36.66666666666666"
                      x={10}
                      height="21.666666666666686"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        700
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={15}
                      x={10}
                      height="21.666666666666657"
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 22, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        800
                      </span>
                    </foreignObject>
                    <foreignObject
                      style={{ overflow: "visible" }}
                      y={-15}
                      x={10}
                      height={30}
                      width={30}
                    >
                      <span
                        className="ct-label ct-vertical ct-start"
                        style={{ height: 30, width: 30 }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      >
                        900
                      </span>
                    </foreignObject>
                  </g>
                </svg> */}
              </div>
            </div>
            <div className="card-footer ">
              <div className="legend">
                <i className="fa fa-circle text-info" /> Tesla Model S
                <i className="fa fa-circle text-danger" /> BMW 5 Series
              </div>
              <hr />
              <div className="stats">
                <i className="fa fa-check" /> Data information certified
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card  card-tasks">
            <div className="card-header ">
              <h4 className="card-title">Tasks</h4>
              <p className="card-category">Backend development</p>
            </div>
            <div className="card-body ">
              <div className="table-full-width">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>
                        Sign contract for "What are conference organizers afraid
                        of?"
                      </td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              defaultChecked=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              defaultChecked=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>
                        Flooded: One year later, assessing what was lost and
                        what was found when a ravaging rain swept through metro
                        Detroit
                      </td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>
                        Create 4 Invisible User Experiences you Never Knew About
                      </td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>Read "Following makes Medium better"</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              disabled=""
                            />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td>Unfollow 5 enemies from twitter</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-simple btn-link"
                          data-original-title="Edit Task"
                        >
                          <i className="fa fa-edit" />
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-simple btn-link"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer ">
              <hr />
              <div className="stats">
                <i className="now-ui-icons loader_refresh spin" /> Updated 3
                minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
