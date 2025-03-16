import React from 'react';

function Profile() {
  // Inject styles
  const styles = `
    .profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f3f4f6;
    }

    .profile-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 800px;
      padding: 24px;
    }

    .profile-title {
      font-size: 24px;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 24px;
    }

    .profile-header {
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 24px;
      margin-bottom: 24px;
    }

    .profile-header-content {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .profile-avatar-container {
      flex-shrink: 0;
    }

    .profile-avatar {
      width: 128px;
      height: 128px;
      border-radius: 50%;
    }

    .profile-info {
      flex: 1;
    }

    .profile-name {
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .profile-job {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 12px;
    }

    .profile-user-btn {
      background: #3e4096;
      color: white;
      padding: 4px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      margin-bottom: 12px;
    }

    .profile-user-btn:hover {
      background: #5534a5;
    }

    .profile-schedule {
      font-size: 14px;
      color: #4b5563;
    }

    .profile-contacts {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .contact-icon {
      font-size: 18px;
    }

    .contact-text {
      font-size: 14px;
      color: #4b5563;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .profile-section {
      display: flex;
      flex-direction: column;
    }

    .section-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .info-icon {
      font-size: 18px;
    }

    .info-text {
      font-size: 14px;
      color: #4b5563;
    }

    .info-birthday {
      font-size: 14px;
      color: #4b5563;
    }

    .section-title {
      font-size: 18px;
      font-weight: 500;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .password-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
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

    .form-input {
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 14px;
    }

    .save-button {
      background: #3e4096;
      color: white;
      padding: 8px 24px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      align-self: flex-end;
    }

    .save-button:hover {
      background: #5534a5;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Profile</h1>

        <div className="profile-header">
          <div className="profile-header-content">
            <div className="profile-avatar-container">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Profile avatar"
                className="profile-avatar"
              />
            </div>

            <div className="profile-info">
              <h2 className="profile-name">Name</h2>
              <p className="profile-job">Add a job Title</p>
              <button className="profile-user-btn">User</button>
              <p className="profile-schedule">Your Work Schedules:</p>
            </div>

            <div className="profile-contacts">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">Email</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">Phone</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">Mobile Phone</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Location</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-section">
            <div className="section-content">
              <div className="info-item">
                <span className="info-icon">Ø</span>
                <span className="info-text">  Skype</span>
              </div>

              <div className="info-item">
                <p className="info-birthday">Birthday</p>
              </div>

              <div className="info-item">
                <span className="info-icon">📅</span>
                <span className="info-text">Work anniversary</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Password Changed</h3>
            <div className="password-form">
              <div className="form-group">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">New Password</label>
                <input type="password" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm New Password</label>
                <input type="password" className="form-input" />
              </div>

              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
