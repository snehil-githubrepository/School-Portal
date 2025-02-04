import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";


const TeacherSidebar = ({ setSelectedContent, isSidebarOpen }) => {
  
  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div
      className={`sm:absolute lg:relative min-h-[91.5vh] sm:z-10 bg-gray-700 text-white pt-5 ${
        !isSidebarOpen ? "hidden" : "block"
      }`}
    >
      <List>
        <ListItem
          onClick={() => handleItemClick("Manage Attendance")}
          style={{ cursor: "pointer" }}
        >
          <ListItemIcon>
            <PlaylistAddCheckIcon style={{ fontSize: "28px" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Attendance" />
        </ListItem>
        <ListItem
          onClick={() => handleItemClick("Update Marks")}
          style={{ cursor: "pointer" }}
        >
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText primary="Update Marks" />
        </ListItem>
        <ListItem
          onClick={() => handleItemClick("Student Lists")}
          style={{ cursor: "pointer" }}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Student Lists" />
        </ListItem>
        <ListItem
          onClick={() => handleItemClick("Classes")}
          style={{ cursor: "pointer" }}
        >
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Classes" />
        </ListItem>
        <ListItem
          onClick={() => handleItemClick("Gradebook")}
          style={{ cursor: "pointer" }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Gradebook" />
        </ListItem>
      </List>
    </div>
  );
};

export default TeacherSidebar;
