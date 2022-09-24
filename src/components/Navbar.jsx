import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
   HomeOutlined,
   MoneyCollectOutlined,
   BulbOutlined,
   FundOutlined,
   MenuOutlined,
} from "@ant-design/icons";

import logo from "../images/cryptocurrency.png";

const items = [
   { label: <Link to="/">Home</Link>, key: "home", icon: <HomeOutlined /> },
   {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      key: "cryptocurrencies",
      icon: <FundOutlined />,
   },
   {
      label: <Link to="/exchanges">Exchanges</Link>,
      key: "exchanges",
      icon: <MoneyCollectOutlined />,
   },
   { label: <Link to="/news">News</Link>, key: "news", icon: <BulbOutlined /> },
];

const Navbar = () => {
   return (
      <div className="nav-container">
         <div className="logo-container">
            <Avatar src={logo} size="large" className="logo-img" />

            <Typography.Title level={2} className="logo-text">
               <Link to="/">CryptoCoins</Link>
            </Typography.Title>

            <Button className="menu-control-container"></Button>
         </div>

         <Menu theme="light" items={items} />
      </div>
   );
};

export default Navbar;
