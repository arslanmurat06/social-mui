import React from "react";
import { Box, Switch } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Home";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed ">
        <List>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AddAlertIcon />
              </ListItemIcon>
              <ListItemText primary="Alarm" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AddAlarmIcon />
              </ListItemIcon>
              <ListItemText primary="SetTime" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AddLocationAltIcon />
              </ListItemIcon>
              <ListItemText primary="Location" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary="Emojis" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
