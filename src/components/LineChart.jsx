import React from "react";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { Col, Row, Typography } from "antd";

const { Title: T } = Typography;

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend
);

const LineChart = ({
   coinHistory,
   currentPrice,
   coinName,
   isFetchingHistory,
   isErrorHistory,
}) => {
   console.log(coinHistory);

   // console.log(coinPrice);
   // console.log(coinTimeStamp);

   if (isErrorHistory) return "Error";
   if (isFetchingHistory) return "Loading...";

   if (coinHistory) {
      let coinPrice = [];
      let coinTimeStamp = [];
      let updatedCoinTimeStamp = [];

      coinHistory?.data?.history.forEach(({ price, timestamp }, i) => {
         coinPrice = [...coinPrice, price];
      });

      for (let i = 1; i < 24; i++) {
         coinTimeStamp = [...coinTimeStamp, i];
      }

      coinTimeStamp.forEach((val) => {
         if (val === 1) {
            updatedCoinTimeStamp = [...updatedCoinTimeStamp, val + " hour ago"];
         } else {
            updatedCoinTimeStamp = [
               ...updatedCoinTimeStamp,
               val + " hours ago",
            ];
         }
      });

      const data = {
         labels: updatedCoinTimeStamp,
         datasets: [
            {
               fill: true,
               label: "Price In USD",
               data: coinPrice.slice(0, 24).map((price, i) => price),
               borderColor: "rgb(53, 162, 235)",
               backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
         ],
      };

      const options = {
         responsive: true,
         plugins: {
            legend: {
               position: "top",
            },
            // title: {
            //    display: true,
            //    text: "Chart.js Line Chart",
            // },
         },
      };

      return (
         <div>
            <Row className="chart-header">
               <T level={2} className="chart-title">
                  {coinName} Price Chart
               </T>

               <Col className="price-container">
                  <T level={5} className="price-change">
                     {coinHistory?.data?.change} %
                  </T>
                  <T level={5} className="current-price">
                     Current {coinName} Price: <b>$ {currentPrice}</b>
                  </T>
               </Col>
            </Row>

            <Line data={data} options={options} />
         </div>
      );
   }
};

export default LineChart;
