import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchButtons from "./SearchButtons";
import MainComponent from "./MainComponent";

const Layout = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Header />
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <div>
          <SearchButtons />
          <MainComponent />
        </div>
      </div>
      <div className="block sm:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
