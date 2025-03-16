import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  Grid,
  LayoutDashboard,
  LifeBuoy,
  MoreHorizontal,
  PieChart,
  Plus,
  RefreshCcw,
  Search,
  Settings,
  Square,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

function BarChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const data = [
      [2, 5], [1, 5], [1, 4], [2, 3.5], [1, 4], [1, 5], [2, 4],
    ];

    const chartWidth = rect.width;
    const chartHeight = rect.height - 30;
    const barWidth = chartWidth / 10;
    const spacing = (chartWidth - barWidth * days.length) / (days.length + 1);

    ctx.fillStyle = "#757575";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "right";

    for (let i = 0; i <= 5; i++) {
      const y = chartHeight - i * (chartHeight / 5);
      ctx.fillText(`${i}`, 20, y + 5);
    }

    days.forEach((day, i) => {
      const x = spacing + i * (barWidth + spacing);
      const [startHeight, endHeight] = data[i];

      ctx.fillStyle = "#e4e4e4";
      ctx.fillRect(x, 0, barWidth, chartHeight);

      ctx.fillStyle = "#734bdd";
      const barHeight = endHeight * (chartHeight / 5);
      const startY = chartHeight - startHeight * (chartHeight / 5);
      const height = barHeight - (chartHeight - startY);
      ctx.fillRect(x, startY, barWidth, height);

      ctx.fillStyle = "#757575";
      ctx.textAlign = "center";
      ctx.fillText(day, x + barWidth / 2, chartHeight + 20);
    });

    ctx.strokeStyle = "#e4e4e4";
    ctx.beginPath();
    ctx.moveTo(0, chartHeight);
    ctx.lineTo(chartWidth, chartHeight);
    ctx.stroke();
  }, []);

  return (
    <div style={{ height: "16rem", width: "100%" }}>
      <canvas ref={canvasRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

function AnalyticsDashboard() {
  const [activeTab] = useState("Reports Analytics");

  return (
    <>
      <style jsx global>{`
        :root {
          --white: #ffffff;
          --light-gray: #f8f8f8;
          --medium-gray: #757575;
          --dark-gray: #474747;
          --purple: #a75cf7;
          --light-purple: #bb84f7;
          --dark-purple: #734bdd;
          --blue: #4b7be5;
          --secondary-bg: #f3f2ff;
          --text-dark: #130f26;
          --border-color: #e4e4e4;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background-color: var(--light-gray);
          font-family: 'Inter', sans-serif;
        }
        .main-content {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .right-sidebar {
          width: 22rem;
          background-color: var(--secondary-bg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background-color: var(--white);
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
          margin-bottom: 2rem;
        }
        .header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .date-refresh {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--medium-gray);
          font-size: 0.875rem;
        }
        .refresh-button {
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .refresh-button:hover {
          background-color: var(--secondary-bg);
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background-color: var(--white);
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: var(--shadow);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-2px);
        }
        .card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .card p {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--dark-purple);
        }
        .tasks-progress {
          grid-column: span 2;
        }
        .tasks-progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .legend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .legend-box {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background-color: var(--purple);
        }
        .dropdown {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
          color: var(--text-dark);
        }
        .interest-card {
          text-align: center;
        }
        .interest-legend {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .interest-legend div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--text-dark);
          font-size: 0.875rem;
        }
        .interest-legend .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }
        .tasks-completion {
          grid-column: span 3;
        }
        .tasks-completion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--medium-gray);
          font-size: 0.875rem;
        }
        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 1rem;
          text-align: center;
          color: var(--medium-gray);
          font-size: 0.875rem;
          font-weight: 500;
        }
        .bars-container {
          margin-bottom: 1rem;
        }
        .bar-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .bar {
          height: 1.5rem;
          border-radius: 0.25rem;
          transition: width 0.3s ease;
        }
        .tasks-legend {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .tasks-legend div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-dark);
          font-size: 0.875rem;
        }
        .tasks-legend .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }
        .search-container {
          position: relative;
          margin-bottom: 1.5rem;
        }
        .search-input {
          width: 100%;
          background-color: var(--secondary-bg);
          border-radius: 0.5rem;
          padding: 0.625rem 1rem 0.625rem 2.5rem;
          font-size: 0.875rem;
          border: none;
          color: var(--text-dark);
        }
        .search-input:focus {
          outline: 1px solid var(--purple);
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--medium-gray);
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .add-task-button {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.25rem 0.75rem;
          color: var(--purple);
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .add-task-button:hover {
          background-color: var(--secondary-bg);
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.5rem;
          text-align: center;
        }
        .calendar-day {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .day-circle {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 0.25rem;
          color: var(--text-dark);
          font-weight: 500;
          border: 1px solid var(--border-color);
          transition: background-color 0.2s, color 0.2s;
        }
        .day-circle.active {
          background-color: var(--purple);
          color: var(--white);
          border-color: var(--purple);
        }
        .day-name {
          font-size: 0.75rem;
          color: var(--medium-gray);
        }
        .timeline {
          padding: 1rem;
          background-color: var(--white);
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
        }
        .time-slot {
          color: var(--medium-gray);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        .task-entry {
          position: relative;
          padding-left: 1.5rem;
          border-left: 2px solid var(--purple);
          margin-bottom: 0.75rem;
        }
        .task-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 0.5rem;
          height: 0.5rem;
          background-color: var(--purple);
          border-radius: 50%;
          transform: translateX(-50%);
        }
        .task-card {
          background-color: var(--secondary-bg);
          padding: 0.75rem;
          border-radius: 0.5rem;
        }
        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }
        .task-header h4 {
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--text-dark);
        }
        .task-time {
          color: var(--medium-gray);
          font-size: 0.75rem;
        }
        .tasks-summary {
          padding: 1rem;
          background-color: var(--white);
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
        }
        .tasks-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .tasks-summary h3 {
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-dark);
        }
        .tasks-count {
          background-color: var(--purple);
          color: var(--white);
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .tasks-progress {
          color: var(--medium-gray);
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .task-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background-color: var(--secondary-bg);
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .task-item h4 {
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--text-dark);
        }
        .task-item .date {
          color: var(--medium-gray);
          font-size: 0.75rem;
        }
        .task-item .progress {
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--dark-purple);
        }
        .task-item .status {
          color: var(--medium-gray);
          font-size: 0.75rem;
        }
      `}</style>

      <div className="dashboard-container">
        <Sidebar
          menuItems={[
            { icon: LayoutDashboard, label: "Dash Board", href: "#", active: false },
            { icon: PieChart, label: "Reports Analytics", href: "#", active: true },
            { icon: Grid, label: "All Tasks", href: "#", active: false, badge: 2 },
            { icon: Square, label: "Completed Tasks", href: "#", active: false },
            { icon: Clock, label: "Pending Tasks", href: "#", active: false },
            { icon: FileText, label: "In Progress Tasks", href: "#", active: false },
            { icon: Plus, label: "Add New Tasks", href: "#", active: false },
            { icon: LifeBuoy, label: "Support", href: "#", active: false },
            { icon: Settings, label: "Settings", href: "#", active: false },
          ]}
          logo={
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4H4V15H15V4Z" fill="#4F46E5" />
                <path d="M15 4H26V15H15V4Z" fill="#818CF8" />
                <path d="M4 15H15V26H4V15Z" fill="#818CF8" />
                <path d="M32 6H42V8H32V6Z" fill="#4F46E5" />
                <path d="M32 10H42V12H32V10Z" fill="#4F46E5" />
                <path d="M32 14H42V16H32V14Z" fill="#4F46E5" />
                <path d="M46 6H56V8H46V6Z" fill="#4F46E5" />
                <path d="M46 10H56V12H46V10Z" fill="#4F46E5" />
                <path d="M46 14H56V16H46V14Z" fill="#4F46E5" />
                <path d="M60 6H70V8H60V6Z" fill="#4F46E5" />
                <path d="M60 10H70V12H60V10Z" fill="#4F46E5" />
                <path d="M60 14H70V16H60V14Z" fill="#4F46E5" />
              </svg>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "black", marginLeft: "8px" }}>ZIDIO</span>
              <span style={{ fontSize: "12px", color: "#6b7280", marginLeft: "4px" }}>DEVELOPMENT</span>
            </div>
          }
        />
        <div className="main-content">
          <div className="header">
            <h1>Analytics</h1>
            <div className="date-refresh">
              <div className="date">
                <Calendar size={18} />
                <span>Tuesday, 4th March</span>
              </div>
              <button className="refresh-button">
                <RefreshCcw size={18} style={{ color: "var(--purple)" }} />
              </button>
            </div>
          </div>

          <div className="grid-container">
            <div className="card">
              <h3>Completed Tasks</h3>
              <p>20</p>
            </div>
            <div className="card">
              <h3>In Progress</h3>
              <p>9</p>
            </div>
            <div className="card">
              <h3>Pending</h3>
              <p>10</p>
            </div>
            <div className="card tasks-progress">
              <div className="tasks-progress-header">
                <h3>Tasks Progress</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div className="legend">
                    <div className="legend-box"></div>
                    <span style={{ fontSize: "0.875rem", color: "var(--medium-gray)" }}>Hours Spent</span>
                  </div>
                  <div className="dropdown">
                    <span>54 hours</span>
                  </div>
                  <div className="dropdown">
                    <span>Weekly</span>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
              <BarChart />
            </div>
            <div className="card interest-card">
              <h3>Your Interest</h3>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "12rem", position: "relative" }}>
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#474747" strokeWidth="20" />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#a75cf7"
                    strokeWidth="20"
                    strokeDasharray="377"
                    strokeDashoffset="94"
                    transform="rotate(-90 80 80)"
                  />
                </svg>
                <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-dark)" }}>54h</span>
                </div>
              </div>
              <div className="interest-legend">
                <div><div className="dot" style={{ backgroundColor: "var(--purple)" }}></div>Completed</div>
                <div><div className="dot" style={{ backgroundColor: "var(--light-purple)" }}></div>In Progress</div>
                <div><div className="dot" style={{ backgroundColor: "var(--dark-purple)" }}></div>Pending</div>
              </div>
            </div>
            <div className="card tasks-completion">
              <div className="tasks-completion-header">
                <h3>Tasks Completion</h3>
                <div className="time">
                  <Clock size={16} />
                  <span>6 hours 24 min</span>
                </div>
              </div>
              <div className="days-grid">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="bars-container">
                <div className="bar-row">
                  <div style={{ gridColumn: "2 / span 3" }}>
                    <div className="bar" style={{ backgroundColor: "var(--dark-purple)", width: "60%" }}></div>
                  </div>
                </div>
                <div className="bar-row">
                  <div style={{ gridColumn: "5 / span 3" }}>
                    <div className="bar" style={{ backgroundColor: "var(--purple)", width: "80%" }}></div>
                  </div>
                </div>
                <div className="bar-row">
                  <div style={{ gridColumn: "2 / span 3" }}>
                    <div className="bar" style={{ backgroundColor: "var(--blue)", width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="tasks-legend">
                <div><div className="dot" style={{ backgroundColor: "var(--dark-purple)" }}></div>Task 1</div>
                <div><div className="dot" style={{ backgroundColor: "var(--purple)" }}></div>Task 2</div>
                <div><div className="dot" style={{ backgroundColor: "var(--blue)" }}></div>Task 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search here..." className="search-input" />
          </div>
          <div className="card">
            <div className="calendar-header">
              <h3>March</h3>
              <button className="add-task-button">
                <Plus size={16} />
                <span>Add Task</span>
              </button>
            </div>
            <div className="calendar-grid">
              {["3", "4", "5", "6", "7", "8"].map((day, i) => {
                const isActive = day === "4";
                const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                return (
                  <div key={i} className="calendar-day">
                    <div className={`day-circle ${isActive ? "active" : ""}`}>{day}</div>
                    <span className="day-name">{dayNames[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="timeline">
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>Timeline</h3>
            <div className="time-slot">09:00</div>
            <div className="task-entry">
              <div className="task-dot"></div>
              <div className="task-card">
                <div className="task-header">
                  <h4>UI Motion</h4>
                  <button><MoreHorizontal size={16} /></button>
                </div>
                <p className="task-time">10:00am - 12:00pm</p>
              </div>
            </div>
            <div className="time-slot">10:00</div>
            <div className="time-slot">11:00</div>
            <div className="task-entry">
              <div className="task-dot"></div>
              <div className="task-card">
                <div className="task-header">
                  <h4>UI Design</h4>
                  <button><MoreHorizontal size={16} /></button>
                </div>
                <p className="task-time">12:00pm - 01:00pm</p>
              </div>
            </div>
            <div className="time-slot">12:00</div>
            <div className="time-slot">01:00</div>
          </div>
          <div className="tasks-summary">
            <div className="tasks-summary-header">
              <h3>Tasks (39)</h3>
              <span className="tasks-count">20/39 completed</span>
            </div>
            <div>
              {[
                { id: 1, date: "01 Mar 2025", progress: 86 },
                { id: 2, date: "01 Mar 2025", progress: 90 },
                { id: 3, date: "03 Mar 2025", progress: 15 },
                { id: 4, date: "06 Mar 2025", progress: 0, status: "To Do" },
              ].map((task) => (
                <div key={task.id} className="task-item">
                  <div>
                    <h4>Task {task.id}</h4>
                    <p className="date">{task.date}</p>
                  </div>
                  <div>
                    {task.progress > 0 ? (
                      <span className="progress">{task.progress} %</span>
                    ) : (
                      <span className="status">{task.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticsDashboard;
