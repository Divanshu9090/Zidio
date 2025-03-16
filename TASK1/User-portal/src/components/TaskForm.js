import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    priority: "P0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task data:", formData);
    alert("Admin only assign the task");
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Inject styles
  const styles = `
    .task-form-container {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      max-width: 800px;
      margin: 0 auto;
    }

    .task-form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .task-form-title {
      font-size: 24px;
      font-weight: 600;
      color: #1f2937;
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

    .search-container {
      position: relative;
      right:30px;
      width: 100px;
      
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ca3af;
    }

    .search-input {
      padding: 8px 12px 8px 36px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 14px;
    }

    .task-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 500;
      color: #6b7280;
      text-transform: uppercase;
    }

    .form-input, .form-textarea {
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 14px;
    }

    .form-textarea {
      resize: vertical;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .input-with-icon {
      position: relative;
    }

    .calendar-button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #9ca3af;
      cursor: pointer;
    }

    .select-container {
      position: relative;
    }

    .form-select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 14px;
      appearance: none;
    }

    .select-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ca3af;
    }

    .form-submit {
      display: flex;
      justify-content: flex-end;
    }

    .submit-button {
      background: #3e4096;
      color: white;
      padding: 8px 24px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }

    .submit-button:hover {
      background: #5534a5;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="task-form-container">
      <div className="task-form-header">
        <h1 className="task-form-title">Add New Tasks</h1>
        <div className="header-right">
          <div className="date-display">
            <Calendar className="calendar-icon" size={20} />
            <span>{currentDate}</span>
          </div>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label className="form-label">TITLE</label>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">DESCRIPTION</label>
          <textarea
            name="description"
            placeholder="Task description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="form-textarea"
          ></textarea>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">START DATE</label>
            <div className="input-with-icon">
              <input
                type="text"
                name="startDate"
                placeholder="dd/mm/yyyy"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
              />
              <button type="button" className="calendar-button">
                <Calendar size={20} />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">END DATE</label>
            <div className="input-with-icon">
              <input
                type="text"
                name="endDate"
                placeholder="dd/mm/yyyy"
                value={formData.endDate}
                onChange={handleChange}
                className="form-input"
              />
              <button type="button" className="calendar-button">
                <Calendar size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">STATUS</label>
            <div className="select-container">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <span className="select-arrow">▼</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">PRIORITY</label>
            <div className="select-container">
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-select"
              >
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </select>
              <span className="select-arrow">▼</span>
            </div>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="submit-button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
