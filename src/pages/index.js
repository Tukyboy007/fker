import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/layout";
import DashBoard from "./dashboard/dashBoard";
import Momentios from "./momemtios/momentios";
import Decision from "./desicion/decision";
import Supply from "./supply/supply";

const routes = [
  { path: "/moments", element: <Momentios />, name: "moments" },
  { path: "/supply", element: <Supply />, name: "supply" },
  { path: "/decision", element: <Decision />, name: "decision" },
  { path: "/decision", element: <Decision />, name: "decision" },
];

const userPermission = [1, 1];

const Index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main className="h-full w-full bg-[pink]">
          <Routes>
            <Route index element={<DashBoard />} />
            {routes.map((e, index) => {
              if (userPermission[index] !== 0) {
                return <Route key={index} path={e.path} element={e.element} />;
              }
            })}
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default Index;
