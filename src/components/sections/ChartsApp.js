import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import { getChartData } from "../../service/chartDataService";
import { useDispatch, useSelector } from "react-redux";
import { chartData } from "../../store/centeralDataSlice";
import { Box, CircularProgress } from "@mui/material";

const lol1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const lol2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];


export default function ChartsApp() {
  const chartState = useSelector((state) => state.optimus.chartData);
  let xLabels = []
  let gmDollar, gmPercent = []
  const dispatch = useDispatch();

  const getData = async () => {
    const responce = await getChartData();
    console.log(responce);
    dispatch(chartData(responce));
  };

  const assignValues = () => {
 
    xLabels = chartState.map((data)=>(data.week))
   gmDollar = chartState.map((data)=>(Number(data?.gmDollor?.replace(/[^0-9.-]+/g, ""))))
   gmPercent = chartState.map((data)=>Number(data.gmPercent.replace("%","")))
    console.log("hi", xLabels, gmDollar, gmPercent)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        {
            chartState.length>0 && assignValues()
        }
      {chartState.length > 0 ? (
        <LineChart
          width={1400}
          height={700}
          series={[
            { data: gmDollar, label: "GM Dollars", yAxisId: "leftAxisId" },
            { data: gmPercent, label: "GM %", yAxisId: "rightAxisId" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
          rightAxis="rightAxisId"
        />
      ) : (
        <div>
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>{" "}
        </div>
      )}
    </div>
  );
}
