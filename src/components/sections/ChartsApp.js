import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import { getChartData } from "../../service/chartDataService";
import { useDispatch, useSelector } from "react-redux";
import { chartData } from "../../store/centeralDataSlice";
import { Box, CircularProgress } from "@mui/material";


export default function ChartsApp() {
  const chartState = useSelector((state) => state.optimus.chartData);
  let xLabels = []
  let gmDollar, gmPercent = []
  const dispatch = useDispatch();

  const getData = async () => {
    const responce = await getChartData();
    dispatch(chartData(responce));
  };

  const assignValues = () => {
 
   xLabels = chartState.map((data)=>(data.week))
   gmDollar = chartState.map((data)=>(Number(data?.gmDollor?.replace(/[^0-9.-]+/g, ""))))
   gmPercent = chartState.map((data)=>Number(data.gmPercent.replace("%","")))
    
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
          width={900}
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
          </Box>
        </div>
      )}
    </div>
  );
}
