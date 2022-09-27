import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Home = () => {
   const { data, isFetching, isError } = useGetCryptosQuery(10);
   // console.log(useGetCryptosQuery());

   if (isFetching)
      return (
         <div
            style={{
               minHeight: "80vh",
               width: "100%",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Spin size="large" />
         </div>
      );

   if (isError) return "error";

   if (data) {
      const {
         total,
         total24hVolume,
         totalCoins,
         totalExchanges,
         totalMarketCap,
         totalMarkets,
      } = data?.data?.stats;

      return (
         <div style={{ paddingLeft: "3%" }}>
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
                  <Statistic
                     title="Total Markets"
                     value={millify(totalMarkets)}
                  />
               </Col>
            </Row>

            <div className="home-heading-container">
               <Title level={2} className="home-title">
                  Top 10 Cryptocurrencies in the world
               </Title>

               <Title level={4} className="show-more">
                  <Link to="/cryptocurrencies">Show more</Link>
               </Title>
            </div>

            <Cryptocurrencies simplified />

            <div className="home-heading-container">
               <Title level={2} className="home-title">
                  Latest Crypto News
               </Title>

               <Title level={4} className="show-more">
                  <Link to="/news">Show more</Link>
               </Title>
            </div>

            <News simplified />
         </div>
      );
   }
};

export default Home;
