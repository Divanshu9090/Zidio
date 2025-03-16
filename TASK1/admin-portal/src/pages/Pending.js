import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Pending() {
  const [activeTab, setActiveTab] = useState("pending");

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Inject styles
  const styles = `
    .dashboard-container {
      display: flex;
      height: 100vh;
      background-color: #f3f4f6;
    }

    .main-content {
      flex: 1;
      overflow: auto;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    .task-panel {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .task-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid #f3f4f6;
    }

    .task-header h2 {
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
    }

    .header-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .header-info span {
      font-size: 14px;
      color: #6b7280;
    }

    .avatar {
      width: 32px;
      height: 32px;
      background-color: #dbeafe;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2563eb;
      font-size: 18px;
    }

    .task-grid-container {
      background-color: #e8e9f5;
      padding: 16px;
    }

    .tasks-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }

    @media (min-width: 768px) {
      .tasks-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .task-card {
      background-color: #b1b4e3;
      border-radius: 8px;
      padding: 16px;
      height: 160px;
    }

    .task-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .task-info {
      margin-bottom: 8px;
    }

    .task-info h3 {
      font-weight: 500;
      color: #1f2937;
    }

    .task-info p {
      font-size: 14px;
      color: #374151;
    }

    .task-status {
      margin-top: auto;
    }

    .task-status span {
      display: inline-block;
      padding: 4px 12px;
      font-size: 12px;
      border-radius: 9999px;
      background-color: #ffc0a9;
      color: #1f2937;
    }

    .empty-task-slot {
      height: 160px;
    }

    @media (min-width: 768px) {
      .empty-task-slot {
        height: auto;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="task-panel">
            <div className="task-header">
              <h2>Pending Tasks</h2>
              <div className="header-info">
                <span>{currentDate}</span>
                <div className="avatar">
                  <span>👤</span>
                </div>
              </div>
            </div>
            <div className="task-grid-container">
              <div className="tasks-grid">
                <TaskCard title="Task 1" description="Description:" status="Pending" />
                <TaskCard title="Task 2" description="Description:" status="Pending" />
                <div className="empty-task-slot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskCard({ title, description, status }) {
  return (
    <div className="task-card">
      <div className="task-content">
        <div className="task-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="task-status">
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default Pending;
