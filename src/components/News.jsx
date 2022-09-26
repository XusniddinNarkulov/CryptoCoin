import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const demoImgUrl =
   "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
   const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
   const { data, isError, isFetching } = useGetCryptoNewsQuery({
      newsCategory,
      count: simplified ? 8 : 16,
   });
   console.log(data);

   const {
      data: coins,
      isError: coinsIsError,
      isFetching: coinsIsFetching,
   } = useGetCryptosQuery(100);

   if (isFetching) return "Loading...";

   if (isError) return "Error";

   if (data) {
      return (
         <Row gutter={[24, 24]}>
            {!simplified && (
               <Col span={24}>
                  <Select
                     showSearch
                     className="select-news"
                     placeholder="Select a category"
                     optionFilterProp="children"
                     onChange={(value) => {
                        setNewsCategory(value);
                     }}
                     filterOption={(input, option) =>
                        option.children
                           .toLowerCase()
                           .indexOf(input.toLowerCase()) >= 0
                     }
                     value={newsCategory}
                  >
                     <Option value="Cryptocurrency">Cryptocurrency</Option>
                     {coins?.data?.coins.map((coin) => (
                        <Option value={coin.name}>{coin.name}</Option>
                     ))}
                  </Select>
               </Col>
            )}

            {data.value.map((news, i) => {
               return (
                  <Col xs={24} sm={12} lg={8} key={i}>
                     <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                           <div className="news-image-container">
                              <Title className="news-title" level={4}>
                                 {news.name}
                              </Title>

                              <img
                                 src={
                                    news?.image?.thumbnail?.contentUrl ||
                                    demoImgUrl
                                 }
                                 alt={news?.image?.name || "news"}
                                 style={{
                                    maxWidth: "100px",
                                    maxHeight: "100px",
                                 }}
                              />
                           </div>

                           <p>
                              {news.description > 100
                                 ? `${news.description.substring(0, 100)} ...`
                                 : news.description}
                           </p>

                           <div className="provider-container">
                              <div className="provider-container-left">
                                 <Avatar
                                    src={
                                       news.provider[0]?.image?.thumbnail
                                          ?.contentUrl || demoImgUrl
                                    }
                                 />

                                 <Text className="provider-name">
                                    {news.provider[0]?.name}
                                 </Text>
                              </div>

                              <Text>
                                 {moment(news.datePublished)
                                    .startOf("ss")
                                    .fromNow()}
                              </Text>
                           </div>
                        </a>
                     </Card>
                  </Col>
               );
            })}
         </Row>
      );
   }
};

export default News;
