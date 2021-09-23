import React, { useState } from "react";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";

export default function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <ProjectDisplay />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      <div className="row header border">
        <div className="col-6">
          <Header />
        </div>
        <div className="col-6 d-flex justify-content-end align-items-end">
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {renderPage()}
    </div>
  );
}
