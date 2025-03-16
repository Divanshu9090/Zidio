// dash.js
import React, { useState } from 'react';
import {
  LayoutDashboard,
  PieChart,
  Grid,
  CheckSquare,
  Clock,
  Play,
  Plus,
  HelpCircle,
  Settings,
} from 'lucide-react';

// Main Home Component
function AllTasks() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <TaskBoard />
      </main>
    </div>
  );
}

// Sidebar Component
function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dash Board", href: "#", active: true, badge: null },
    { icon: PieChart, label: "Reports Analytics", href: "#", active: false, badge: null },
    { icon: Grid, label: "All Tasks", href: "#", active: false, badge: 2 },
    { icon: CheckSquare, label: "Completed Tasks", href: "#", active: false, badge: null },
    { icon: Clock, label: "Pending Tasks", href: "#", active: false, badge: null },
    { icon: Play, label: "In Progress Tasks", href: "#", active: false, badge: null },
    { icon: Plus, label: "Add New Tasks", href: "#", active: false, badge: null },
    { icon: HelpCircle, label: "Support", href: "#", active: false, badge: null },
    { icon: Settings, label: "Settings", href: "#", active: false, badge: null },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <a href="#" className="logo-link">
          <div className="logo">
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
          </div>
          <span className="logo-text">ZIDIO</span>
        </a>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <item.icon className={`nav-icon ${item.active ? 'active-icon' : ''}`} size={20} />
            {item.label}
            {item.badge && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// MobileSidebar Component
function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dash Board", href: "#", active: true, badge: null },
    { icon: PieChart, label: "Reports Analytics", href: "#", active: false, badge: null },
    { icon: Grid, label: "All Tasks", href: "#", active: false, badge: 2 },
    { icon: CheckSquare, label: "Completed Tasks", href: "#", active: false, badge: null },
    { icon: Clock, label: "Pending Tasks", href: "#", active: false, badge: null },
    { icon: Play, label: "In Progress Tasks", href: "#", active: false, badge: null },
    { icon: Plus, label: "Add New Tasks", href: "#", active: false, badge: null },
    { icon: HelpCircle, label: "Support", href: "#", active: false, badge: null },
    { icon: Settings, label: "Settings", href: "#", active: false, badge: null },
  ];

  return (
    <div className="mobile-sidebar">
      <button onClick={() => setOpen(true)} className="menu-button">
        <span>☰</span>
      </button>
      {open && (
        <div className="mobile-sheet">
          <div className="mobile-sheet-content">
            <div className="mobile-header">
              <a href="#" className="logo-link" onClick={() => setOpen(false)}>
                <div className="logo">
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
                </div>
                <span className="logo-text">ZIDIO</span>
              </a>
              <button onClick={() => setOpen(false)} className="close-button">
                <span>✖</span>
              </button>
            </div>
            <nav className="mobile-nav">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`mobile-nav-item ${item.active ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className={`nav-icon ${item.active ? 'active-icon' : ''}`} size={20} />
                  {item.label}
                  {item.badge && (
                    <span className="nav-badge">{item.badge}</span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

// TaskBoard Component
function TaskBoard() {
  const [tasks] = useState([
    { id: 1, icon: "🔥", progress: 70, status: "P0", date: "05/04/2023", assignee: "👤" },
    { id: 2, icon: "🌟", progress: 45, status: "P1", date: "05/10/2023", assignee: "👤" },
    { id: 3, icon: "🦁", progress: 60, status: "P1", date: "05/15/2023", assignee: "👤" },
    { id: 4, icon: "🍒", progress: 55, status: "P2", date: "05/20/2023", assignee: "👤" },
    { id: 5, icon: "🌶️", progress: 80, status: "P0", date: "05/25/2023", assignee: "👤" },
    { id: 6, icon: "🍎", progress: 85, status: "P1", date: "05/30/2023", assignee: "👤" },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "AT RISK": return "bg-green-100 text-green-800";
      case "OFF TRACK": return "bg-yellow-100 text-yellow-800";
      case "ON TRACK": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="task-board">
      <div className="task-header">
        <div className="header-left">
          <MobileSidebar />
          <h1>Project</h1>
        </div>
        <button className="refresh-button">
          <span>🔄</span>
        </button>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search tasks..." className="search-input" />
      </div>

      <div className="task-list">
        <div className="task-items">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-icon">{task.icon}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${task.progress}%` }}></div>
              </div>
              <div className={`status-badge ${getStatusColor(task.status)}`}>{task.status}</div>
              <div className="task-date">{task.date}</div>
              <div className="task-assignee">{task.assignee}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CSS Styles
const styles = `
  /* Dashboard Layout - Main container */
  .dashboard-layout {
    display: flex;
    height: 100vh; /* Full screen height */
    background-color: rgba(243, 244, 246, 0.4); /* Light gray with transparency */
  }

  /* Main Content - Right side */
  .main-content {
    flex: 1; /* Takes remaining space */
    overflow: auto; /* Scroll if content overflows */
    padding: 16px; /* Default padding */
  }

  @media (min-width: 768px) {
    .main-content {
      padding: 24px; /* Larger padding on medium screens */
    }
  }

  /* Sidebar - Left navigation */
  .sidebar {
    width: 256px; /* Fixed width */
    background-color: white;
    border-right: 1px solid #e5e7eb; /* Light gray border */
    padding: 16px; /* Inner spacing */
    display: none; /* Hidden by default */
  }

  @media (min-width: 768px) {
    .sidebar {
      display: block; /* Visible on medium screens and up */
    }
  }

  .logo-section {
    margin-bottom: 32px; /* Space below logo */
  }

  .logo-link {
    display: flex;
    align-items: center; /* Center vertically */
    text-decoration: none; /* No underline */
  }

  .logo {
    margin-right: 8px; /* Space from text */
  }

  .logo-text {
    font-size: 20px; /* Large text */
    font-weight: 700; /* Bold */
    color: black;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column; /* Vertical list */
    gap: 4px; /* Space between items */
  }

  .nav-item {
    display: flex;
    align-items: center; /* Center vertically */
    padding: 8px; /* Inner spacing */
    font-size: 14px; /* Text size */
    font-weight: 500; /* Medium weight */
    color: #4b5563; /* Gray text */
    border-radius: 6px; /* Rounded corners */
    text-decoration: none; /* No underline */
  }

  .nav-item:hover {
    background-color: #eef2ff; /* Light indigo on hover */
    color: #4338ca; /* Indigo text */
  }

  .nav-item.active {
    background-color: #eef2ff; /* Light indigo */
    color: #4338ca; /* Indigo text */
  }

  .nav-icon {
    margin-right: 12px; /* Space from text */
    font-size: 20px; /* Icon size */
    color: #9ca3af; /* Gray icon */
  }

  .nav-item:hover .nav-icon {
    color: #4338ca; /* Indigo on hover */
  }

  .nav-item.active .nav-icon {
    color: #4338ca; /* Indigo when active */
  }

  .nav-badge {
    margin-left: auto; /* Push to right */
    background-color: #4f46e5; /* Indigo background */
    color: white;
    font-size: 12px; /* Small text */
    padding: 2px 8px; /* Inner spacing */
    border-radius: 9999px; /* Fully rounded */
  }

  /* Mobile Sidebar */
  .mobile-sidebar {
    display: block; /* Visible by default */
  }

  @media (min-width: 768px) {
    .mobile-sidebar {
      display: none; /* Hidden on medium screens and up */
    }
  }

  .menu-button {
    padding: 8px; /* Inner spacing */
    background: none;
    border: none;
    cursor: pointer; /* Hand cursor */
  }

  .menu-button span {
    font-size: 24px; /* Icon size */
    color: #6b7280; /* Gray text */
  }

  .mobile-sheet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  }

  .mobile-sheet-content {
    width: 256px; /* Fixed width */
    height: 100%;
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column; /* Vertical layout */
  }

  .mobile-header {
    padding: 16px; /* Inner spacing */
    border-bottom: 1px solid #e5e7eb; /* Light gray border */
    display: flex;
    justify-content: space-between; /* Space items apart */
    align-items: center; /* Center vertically */
  }

  .close-button {
    padding: 8px; /* Inner spacing */
    background: none;
    border: none;
    cursor: pointer; /* Hand cursor */
  }

  .close-button span {
    font-size: 24px; /* Icon size */
    color: #6b7280; /* Gray text */
  }

  .mobile-nav {
    flex: 1; /* Takes remaining space */
    overflow: auto; /* Scroll if content overflows */
    padding: 16px; /* Inner spacing */
    display: flex;
    flex-direction: column; /* Vertical list */
    gap: 4px; /* Space between items */
  }

  .mobile-nav-item {
    display: flex;
    align-items: center; /* Center vertically */
    padding: 8px; /* Inner spacing */
    font-size: 14px; /* Text size */
    font-weight: 500; /* Medium weight */
    color: #4b5563; /* Gray text */
    border-radius: 6px; /* Rounded corners */
    text-decoration: none; /* No underline */
  }

  .mobile-nav-item:hover {
    background-color: #eef2ff; /* Light indigo on hover */
    color: #4338ca; /* Indigo text */
  }

  .mobile-nav-item.active {
    background-color: #eef2ff; /* Light indigo */
    color: #4338ca; /* Indigo text */
  }

  /* Task Board */
  .task-board {
    height: 100%; /* Full height */
    display: flex;
    flex-direction: column; /* Vertical layout */
  }

  .task-header {
    display: flex;
    justify-content: space-between; /* Space items apart */
    align-items: center; /* Center vertically */
    margin-bottom: 24px; /* Space below */
  }

  .header-left {
    display: flex;
    align-items: center; /* Center vertically */
  }

  .task-header h1 {
    font-size: 24px; /* Large text */
    font-weight: 700; /* Bold */
    margin-left: 8px; /* Space from mobile menu */
  }

  .refresh-button {
    padding: 8px; /* Inner spacing */
    border-radius: 50%; /* Circle shape */
    background: none;
    border: none;
    cursor: pointer; /* Hand cursor */
  }

  .refresh-button:hover {
    background-color: #f3f4f6; /* Light gray on hover */
  }

  .refresh-button span {
    font-size: 20px; /* Icon size */
    color: #6b7280; /* Gray text */
  }

  .search-bar {
    position: relative;
    margin-bottom: 24px; /* Space below */
  }

  .search-icon {
    position: absolute;
    left: 12px; /* Space from left */
    top: 50%; /* Center vertically */
    transform: translateY(-50%);
    font-size: 20px; /* Icon size */
    color: #9ca3af; /* Gray icon */
  }

  .search-input {
    padding: 8px 12px 8px 40px; /* Left padding for icon */
    width: 100%; /* Full width */
    background-color: #f3f4f6; /* Light gray background */
    border: none;
    border-radius: 6px; /* Rounded corners */
    font-size: 14px; /* Text size */
  }

  .task-list {
    background-color: rgba(224, 231, 255, 0.5); /* Light indigo with transparency */
    border-radius: 8px; /* Rounded corners */
    padding: 24px; /* Inner spacing */
    flex: 1; /* Takes remaining space */
    overflow: auto; /* Scroll if content overflows */
  }

  .task-items {
    display: flex;
    flex-direction: column; /* Vertical list */
    gap: 16px; /* Space between items */
  }

  .task-item {
    display: flex;
    align-items: center; /* Center vertically */
    gap: 16px; /* Space between elements */
    background-color: white;
    padding: 16px; /* Inner spacing */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Subtle shadow */
  }

  .task-icon {
    width: 40px;
    height: 40px;
    background-color: #f3f4f6; /* Light gray background */
    border-radius: 50%; /* Circle shape */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px; /* Icon size */
  }

  .progress-bar {
    flex: 1; /* Takes available space */
    height: 8px; /* Bar height */
    background-color: #e5e7eb; /* Gray background */
    border-radius: 9999px; /* Fully rounded */
    overflow: hidden;
  }

  .progress-fill {
    height: 100%; /* Full height */
    background-color: #4f46e5; /* Indigo fill */
    border-radius: 9999px; /* Fully rounded */
  }

  .status-badge {
    padding: 4px 12px; /* Inner spacing */
    font-size: 12px; /* Small text */
    font-weight: 500; /* Medium weight */
    border-radius: 9999px; /* Fully rounded */
  }

  .bg-green-100 {
    background-color: #dcfce7; /* Green background */
  }

  .text-green-800 {
    color: #166534; /* Green text */
  }

  .bg-yellow-100 {
    background-color: #fefcbf; /* Yellow background */
  }

  .text-yellow-800 {
    color: #854d0e; /* Yellow text */
  }

  .bg-red-100 {
    background-color: #fee2e2; /* Red background */
  }

  .text-red-800 {
    color: #991b1b; /* Red text */
  }

  .task-date {
    font-size: 12px; /* Small text */
    color: #6b7280; /* Gray text */
  }

  .task-assignee {
    width: 40px;
    height: 40px;
    border-radius: 50%; /* Circle shape */
    font-size: 20px; /* Icon size */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Inject styles into document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default AllTasks;
