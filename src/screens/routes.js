import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

// Read subrouter in each subfolder
let routes = [];
const rf = require.context("./", true, /^.*_subrouter.js$/);
rf.keys().forEach((fileName) => {
  routes = routes.concat(rf(fileName).default);
});

const Root = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <Layout.Sidebar />
        <Layout.Main className="bg-slate-100 dark:bg-primaryDark">
          <Layout.Header setIsOpen={setIsOpen} />
          <Layout.Body>
            <Routes>
              {routes?.map((r, i) => {
                return <Route key={i} path={r?.path} element={<r.element />} />;
              })}
              {/* redirect */}
              <Route
                path="*"
                element={<Navigate to="/data-tables" replace />}
              />
            </Routes>
          </Layout.Body>
        </Layout.Main>
        <Navigation.Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Layout>
    </BrowserRouter>
  );
};

export default Root;
