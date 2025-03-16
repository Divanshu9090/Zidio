import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Completed() {
  const [activeTab, setActiveTab] = useState("completed");

  const completedTasks = [
    { id: 1, title: "Task 1", description: "Description" },
    { id: 2, title: "Task 2", description: "Description" },
    { id: 3, title: "Task 3", description: "Description" },
  ];

  const today = new Date();
  const options = { weekday: "long", day: "2-digit", month: "long" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  // Inject styles
  const styles = `
    .taskboard-container {
      display: flex;
      height: 100vh; /* Full viewport height */
      background-color: #f3f4f6;
    }

    .main-content {
      flex: 1;
      overflow: auto;
      height: 100vh; /* Full viewport height */
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    .completed-tasks-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      padding: 24px;
    }

    .completed-tasks-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .completed-tasks-header h1 {
      font-size: 20px;
      font-weight: 600;
    }

    .date-and-avatar {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #6b7280;
    }

    .avatar {
      margin-left: 8px;
      height: 32px;
      width: 32px;
      background-color: #e5e7eb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar span {
      font-size: 12px;
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
      background-color: rgba(233, 227, 245, 0.5);
      border-radius: 6px;
      border: none;
    }

    .task-card-header {
      padding: 16px 16px 8px 16px;
    }

    .task-card-header h3 {
      font-size: 14px;
      font-weight: 500;
    }

    .task-card-content {
      padding: 0 16px 16px 16px;
    }

    .task-card-content p {
      font-size: 14px;
      color: #4b5563;
      margin-bottom: 16px;
    }

    .badge {
      background-color: #22c55e;
      color: white;
      padding: 4px 16px;
      border-radius: 20px;
      font-size: 12px;
    }

    .badge:hover {
      background-color: #16a34a;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="taskboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="completed-tasks-container">
            <div className="completed-tasks-header">
              <h1>Completed Tasks</h1>
              <div className="date-and-avatar">
                {formattedDate}
                <div className="avatar">
                  <span>👤</span>
                </div>
              </div>
            </div>

            <div className="tasks-grid">
              {completedTasks.map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-card-header">
                    <h3>{task.title}</h3>
                  </div>
                  <div className="task-card-content">
                    <p>{task.description}</p>
                    <span className="badge">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
