import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const [isInviteDropdownOpen, setIsInviteDropdownOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const peopleOptions = ['Person 1', 'Person 2', 'Person 3'];
  const inviteOptions = ['Invite Option 1', 'Invite Option 2', 'Invite Option 3'];

  // Inject styles
  const styles = `
    .dashboard-container {
      display: flex;
      height: 100vh;
      background-color: #e4e4e4;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 8px;
      margin: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #e5e7eb;
    }

    .dashboard-header h1 {
      font-size: 24px;
      font-weight: 600;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .date-display {
      display: flex;
      align-items: center;
      color: #6b7280;
      font-size: 14px;
    }

    .calendar-icon {
      margin-right: 8px;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #3e4096;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .avatar-fallback {
      font-size: 16px;
    }

    .avatar.small {
      width: 24px;
      height: 24px;
    }

    .avatar-fallback.small {
      font-size: 12px;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
    }

    .toolbar-button {
      background: #3e4096;
      color: white;
      padding: 8px 24px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toolbar-button:hover {
      background: #5534a5;
    }

    .toolbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .message-button {
      background: #3e4096;
      color: white;
      padding: 8px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }

    .kanban-container {
      flex: 1;
      padding: 24px;
      overflow: auto;
    }

    .kanban-board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      height: 100%;
    }

    .kanban-column {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .column-header {
      padding: 12px;
      margin-bottom: 16px;
      border-radius: 6px;
      font-weight: 500;
    }

    .column-content {
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .kanban-card {
      background: rgba(165, 166, 203, 0.5);
      padding: 16px;
      border-radius: 6px;
      position: relative;
      min-height: 100px;
    }

    .kanban-card h3 {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .card-button {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: white;
      color: #3e4096;
      padding: 4px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }

    .card-button:hover {
      background: #f3f4f6;
    }

    .card-tag {
      margin-top: 8px;
    }

    .time-tag {
      background: #1bc9fa;
      color: white;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
    }

    .avatar-group {
      display: flex;
      margin-left: -8px;
    }

    .avatar.small {
      margin-left: 8px;
      border: 2px solid white;
    }

    .card-actions {
      display: flex;
      gap: 4px;
    }

    .action-button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: none;
      background: none;
      color: #3e4096;
      cursor: pointer;
    }

    .action-button.active {
      background: #3e4096;
      color: white;
    }

    .dropdown-container {
      position: relative;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      z-index: 10;
      min-width: 160px;
    }

    .dropdown-item {
      padding: 8px 16px;
      cursor: pointer;
    }

    .dropdown-item:hover {
      background: #f3f4f6;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Dash Board</h1>
          <div className="header-right">
            <div className="date-display">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={<button className="toolbar-button">📅 {currentDate}</button>}
              />
            </div>
            <div className="avatar">
              <span className="avatar-fallback">U</span>
            </div>
          </div>
        </header>

        <div className="toolbar">
          <div className="dropdown-container">
            <button
              className="toolbar-button"
              onClick={() => setIsPeopleDropdownOpen(!isPeopleDropdownOpen)}
            >
              People <span>▼</span>
            </button>
            {isPeopleDropdownOpen && (
              <div className="dropdown-menu">
                {peopleOptions.map((option, index) => (
                  <div key={index} className="dropdown-item">
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="toolbar-right">
            <div className="dropdown-container">
              <button
                className="toolbar-button"
                onClick={() => setIsInviteDropdownOpen(!isInviteDropdownOpen)}
              >
                Invite <span>▼</span>
              </button>
              {isInviteDropdownOpen && (
                <div className="dropdown-menu">
                  {inviteOptions.map((option, index) => (
                    <div key={index} className="dropdown-item">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="message-button">💬</button>
          </div>
        </div>

        <main className="kanban-container">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}

function KanbanBoard() {
  return (
    <div className="kanban-board">
      <KanbanColumn title="New" color="#ccd2e3">
        <KanbanCard title="Name#tag">
          <button className="card-button">Create</button>
        </KanbanCard>
      </KanbanColumn>

      <KanbanColumn title="in progress" color="#ccd2e3">
        <KanbanCard title="Event plans">
          <div className="card-tag">
            <span className="time-tag">Today 6:30</span>
          </div>
          <div className="card-footer">
            <div className="avatar-group">
              <div className="avatar small">
                <span className="avatar-fallback small">U1</span>
              </div>
              <div className="avatar small">
                <span className="avatar-fallback small">U2</span>
              </div>
            </div>
            <div className="card-actions">
              <button className="action-button">✓</button>
              <button className="action-button">⏰</button>
              <button className="action-button active">✓</button>
            </div>
          </div>
        </KanbanCard>
      </KanbanColumn>

      <KanbanColumn title="Event" color="#ccd2e3" />
    </div>
  );
}

function KanbanColumn({ title, color, children }) {
  return (
    <div className="kanban-column">
      <div className="column-header" style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className="column-content">{children}</div>
    </div>
  );
}

function KanbanCard({ title, children }) {
  return (
    <div className="kanban-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Dashboard;
