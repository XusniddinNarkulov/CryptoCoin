import React, { useState, useEffect } from "react";
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
   const [activeMenu, setActiveMenu] = useState();
   const [screenSize, setScreenSize] = useState();

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (screenSize < 768) {
         setActiveMenu(false);
      } else {
         setActiveMenu(true);
      }
   }, [screenSize]);

   window.onclick = (e) => {
      setActiveMenu(false);
   };

   return (
      <div className="nav-container">
         <div className="logo-container">
            <Avatar src={logo} size="large" className="logo-img" />

            <Typography.Title level={2} className="logo-text">
               <Link to="/">CryptoCoins</Link>
            </Typography.Title>

            <Button
               className="menu-control-container"
               onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu((prev) => !prev);
               }}
            >
               <MenuOutlined />
            </Button>
         </div>

         {activeMenu && <Menu theme="dark" items={items} />}
      </div>
   );
};

export default Navbar;
