import React from 'react';
import { Link } from 'react-router-dom';
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

function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dash Board", href: "/" },
    { icon: PieChart, label: "Reports Analytics", href: "/analytics" },
    { icon: Grid, label: "All Tasks", href: "/all-tasks", badge: 2 },
    { icon: CheckSquare, label: "Completed Tasks", href: "/completed" },
    { icon: Clock, label: "Pending Tasks", href: "/pending" },
    { icon: Play, label: "In Progress Tasks", href: "/in-progress" },
    { icon: Plus, label: "Add New Tasks", href: "/add-task" },
  ];

  const footerItems = [
    { icon: HelpCircle, label: "Support", href: "https://www.google.com/search?q=zidio+development+contact&sca_esv=11e630708d7d7dea&sxsrf=AHTn8zq0NJszZ39gzLG3NGnZTYbnRpo2OA%3A1742046156055&ei=zIPVZ-mFA9eLnesPmMaD0Ao&ved=0ahUKEwjpm8HSm4yMAxXXRWcHHRjjAKoQ4dUDCBA&uact=5&oq=zidio+development+contact&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXppZGlvIGRldmVsb3BtZW50IGNvbnRhY3QyBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEipF1C0A1jyD3ABeAGQAQCYAYEEoAGpGKoBCTItMi4xLjMuMrgBA8gBAPgBAZgCCaAC3hjCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAcICBRAAGIAEwgIKEAAYgAQYQxiKBcICEBAuGIAEGEMYxwEYigUYrwHCAggQABiABBjLAcICBRAAGO8FwgIHECEYoAEYCpgDAIgGAZAGELoGBggBEAEYCZIHCTEuMC4yLjEuNaAHozU&sclient=gws-wiz-serp" },
    { icon: Settings, label: "Settings", href: "/profile" },
  ];

  // Inject styles (unchanged)
  const styles = `
    .sidebar {
      width: 256px;
      background: white;
      height: 100%;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }



    .logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 250px; /* Set the width */
  height: 100px; /* Set the height */
  object-fit: contain; /* Ensures the image maintains aspect ratio */
}



    .sidebar-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sidebar-footer {
      margin-top: auto;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
      border-radius: 6px;
      text-decoration: none;
      color: #4b5563;
      font-size: 14px;
    }

    .nav-item.active {
      color: #3e4096;
      font-weight: 500;
    }

    .nav-item:hover:not(.active) {
      background: #f3f4f6;
    }

    .nav-icon {
      color: #6b7280;
    }

    .badge {
      margin-left: auto;
      background: #3e4096;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  return (
    <aside className="sidebar">
      <div className="logo-section">
  <Link to="/" className="logo-link">
    <div className="logo">
      <img 
        src="https://zidio.in/assets/img/logo/logo.png" 
        alt="Zidio Logo" 
        className="logo-image" 
      />
    </div>
  </Link>
</div>


      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`nav-item ${window.location.pathname === item.href ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" size={20} />
            <span>{item.label}</span>
            {item.badge && <span className="badge">{item.badge}</span>}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        {footerItems.map((item, index) => (
          <Link key={index} to={item.href} className="nav-item">
            <item.icon className="nav-icon" size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
