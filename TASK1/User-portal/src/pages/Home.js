import React from "react";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";

function Home() {
  return (
    <>
      <style jsx>{`
        .home-container {
          display: flex;
          min-height: 100vh;
          background-color: #e4e4e4;
        }
        .main-content {
          flex: 1;
          padding: 24px;
        }
      `}</style>
      <div className="home-container">
        <Sidebar activePage="Add New Tasks" />
        <main className="main-content">
          <TaskForm />
        </main>
      </div>
    </>
  );
}

export default Home;
