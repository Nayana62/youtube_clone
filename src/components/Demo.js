import React, { useState } from "react";
import Sidebar from "react-sidebar";

const Demo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <Sidebar
      sidebar={<div>Content of the Sidebar</div>}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white", width: "250px" } }}
    >
      <div>
        <header>
          <button onClick={() => onSetSidebarOpen(true)}>Open Sidebar</button>
        </header>
        <main>
          <p>Main Content</p>
        </main>
      </div>
    </Sidebar>
  );
};

export default Demo;
