import React from "react";
import { noCase } from "change-case";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Typography,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import IconImg from "../assets/ic_notification_chat.svg";

const NotificationItem = ({ notification }) => {
  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }} src={IconImg.src} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            {notification.title}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              &nbsp; {noCase(notification.description)}
            </Typography>
          </Typography>
        }
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Icon
              icon="eva:clock-outline"
              style={{ marginRight: 2, width: 16, height: 16 }}
            />
            {notification.createdAt}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default NotificationItem;
