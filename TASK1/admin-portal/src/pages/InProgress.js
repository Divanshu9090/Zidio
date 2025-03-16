import React from 'react';
import Sidebar from '../components/Sidebar';

function InProgress() {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description:", progress: 40 },
    { id: 2, title: "Task 2", description: "Description:", progress: 30 },
  ];

  // Inject styles
  const styles = `
    .main-container {
      display: flex;
      height: 100vh;
      background-color: #f3f4f6;
    }

    .main-content {
      flex: 1;
      overflow: auto;
    }

    .taskboard {
      padding: 24px;
      height: 100%;
    }

    .taskboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .taskboard-header h1 {
      font-size: 24px;
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
      background-color: #e0e7ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4f46e5;
      font-size: 18px;
    }

    .tasks-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      height: calc(100% - 80px);
    }

    @media (min-width: 768px) {
      .tasks-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .task-column {
      background-color: rgba(224, 231, 255, 0.5);
      border-radius: 8px;
      padding: 16px;
      height: 100%;
    }

    .empty-column {
      background-color: rgba(224, 231, 255, 0.5);
    }

    .task-card {
      background-color: #c7d2fe;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .task-card h3 {
      font-weight: 500;
      color: #1f2937;
      margin-bottom: 4px;
    }

    .task-card p {
      font-size: 14px;
      color: #4b5563;
      margin-bottom: 16px;
    }

    .task-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .progress-container {
      height: 8px;
      width: 100%;
      overflow: hidden;
      border-radius: 9999px;
      background-color: white;
    }

    .progress-indicator {
      height: 100%;
      width: 100%;
      transition: transform 0.3s;
    }

    .bg-green-400 {
      background-color: #4ade80;
    }

    .task-badge {
      background-color: #fef3c7;
      color: #92400e;
      border: 1px solid #fde68a;
    }

    .task-badge:hover {
      background-color: #fde68a;
    }

    .badge-container {
      display: flex;
      justify-content: flex-end;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="main-container">
      <Sidebar />
      <main className="main-content">
        <div className="taskboard">
          <div className="taskboard-header">
            <h1>In Progress Tasks</h1>
            <div className="header-info">
              <span>Tuesday, 6th March</span>
              <div className="avatar">
                <span>👤</span>
              </div>
            </div>
          </div>
          <div className="tasks-grid">
            {tasks.map((task) => (
              <div key={task.id} className="task-column">
                <TaskCard title={task.title} description={task.description} progress={task.progress} />
              </div>
            ))}
            <div className="task-column empty-column"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TaskCard({ title, description, progress }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="task-details">
        <Progress value={progress} className="task-progress" indicatorColor="bg-green-400" />
        <div className="badge-container">
          <Badge variant="outline" className="task-badge">Progress</Badge>
        </div>
      </div>
    </div>
  );
}

function Badge({ className, variant, children }) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
  const variantStyles = {
    default: "border-transparent bg-indigo-600 text-white hover-bg-indigo-700",
    secondary: "border-transparent bg-gray-200 text-gray-800 hover-bg-gray-300",
    destructive: "border-transparent bg-red-600 text-white hover-bg-red-700",
    outline: "text-gray-800 border-gray-300",
  };
  const styles = `${baseStyles} ${variantStyles[variant || 'default']} ${className || ''}`;
  return <div className={styles}>{children}</div>;
}

function Progress({ className, value, indicatorColor }) {
  const progressStyle = {
    transform: `translateX(-${100 - (value || 0)}%)`
  };
  return (
    <div className={`progress-container ${className || ''}`}>
      <div
        className={`progress-indicator ${indicatorColor || 'bg-green-400'}`}
        style={progressStyle}
      ></div>
    </div>
  );
}

export default InProgress;
