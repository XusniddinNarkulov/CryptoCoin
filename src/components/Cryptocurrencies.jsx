import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
   const count = simplified ? 10 : 50;
   const { data, isFetching, isError } = useGetCryptosQuery(count);
   console.log(data);
   const [coins, setCoins] = useState();
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
      const filteredCoins = data?.data?.coins.filter((coin) =>
         coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setCoins(filteredCoins);
   }, [searchTerm]);

   if (isFetching) return "Loading...";

   if (isError) return "Error";

   if (data) {
      return (
         <div>
            {!simplified && (
               <div className="search-crypto">
                  <h1 style={{ textAlign: "center", fontSize: "24px" }}>
                     Cryptocurrencies
                  </h1>
                  <Input
                     type="text"
                     placeholder="Search coins"
                     value={searchTerm}
                     onChange={(e) => {
                        setSearchTerm(e.target.value);
                     }}
                  />
               </div>
            )}

            <Row gutters={[32, 32]} className="crypto-container">
               {coins?.map(
                  (
                     {
                        btcPrice,
                        change,
                        coinRankingUrl,
                        color,
                        iconUrl,
                        listedAt,
                        lowVolume,
                        marketCap,
                        name,
                        price,
                        rank,
                        sparkline,
                        symbol,
                        tier,
                        uuid,
                     },
                     i
                  ) => {
                     return (
                        <Col
                           xs={24}
                           sm={12}
                           lg={6}
                           className="crypto-card"
                           key={i}
                        >
                           <Link to={`/crypto/${uuid}`}>
                              <Card
                                 style={{ height: "100%" }}
                                 title={`${rank}. ${name}`}
                                 extra={
                                    <img
                                       className="crypto-image"
                                       src={iconUrl}
                                       style={{
                                          width: "40px",
                                          height: "40px",
                                          objectFit: "contain",
                                       }}
                                    />
                                 }
                                 hoverable
                              >
                                 <p>Price: {millify(price)}</p>
                                 <p>Market Cap: {millify(marketCap)}</p>
                                 <p>Daily Change: {millify(change)}</p>
                              </Card>
                           </Link>
                        </Col>
                     );
                  }
               )}
            </Row>
         </div>
      );
   }
};

export default Cryptocurrencies;
