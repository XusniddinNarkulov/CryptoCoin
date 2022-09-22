import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="footer">
         <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
         >
            Cryptoverse <br />
            All rights reserved
         </Typography.Title>

         <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
         </Space>
      </div>
   );
};

export default Footer;
