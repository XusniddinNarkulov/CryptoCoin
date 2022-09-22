import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
   Navbar,
   Home,
   Cryptocurrencies,
   CryptoDetails,
   Exchanges,
   News,
   Footer,
} from "./components";

function App() {
   return (
      <div className="app">
         <div className="navbar">
            <Navbar />
         </div>

         <div className="main">
            <Layout>
               <div className="routes">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/exchanges" element={<Exchanges />} />
                     <Route
                        path="/cryptocurrencies"
                        element={<Cryptocurrencies />}
                     />
                     <Route
                        path="/crypto/:coinId"
                        element={<CryptoDetails />}
                     />
                     <Route path="/news" element={<News />} />
                  </Routes>
               </div>
            </Layout>

            <Footer />
         </div>
      </div>
   );
}

export default App;
