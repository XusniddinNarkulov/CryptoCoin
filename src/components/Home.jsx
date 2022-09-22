import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Home = () => {
   const { data, isFetching } = useGetCryptosQuery();
   console.log(data);
   const {
      total,
      total24hVolume,
      totalCoins,
      totalExchanges,
      totalMarketCap,
      totalMarkets,
   } = data?.data?.stats;

   if (isFetching) return "loading...";

   return (
      <>
         <Title level={2} className="heading">
            Global Crypto Stats
         </Title>

         <Row gutter={[20, 20]}>
            <Col span={12}>
               <Statistic title="Total Cryptocurrencies" value={total} />
            </Col>

            <Col span={12}>
               <Statistic
                  title="Total Exchanges"
                  value={millify(totalExchanges)}
               />
            </Col>

            <Col span={12}>
               <Statistic
                  title="Total Market Cap"
                  value={millify(totalMarketCap)}
               />
            </Col>

            <Col span={12}>
               <Statistic
                  title="Total 24h Volume"
                  value={millify(total24hVolume)}
               />
            </Col>

            <Col span={12}>
               <Statistic title="Total Markets" value={millify(totalMarkets)} />
            </Col>
         </Row>
      </>
   );
};

export default Home;
