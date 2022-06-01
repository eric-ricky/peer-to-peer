import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  List,
  Badge,
  Button,
  Divider,
  Tooltip,
  IconButton,
  Typography,
  ListSubheader,
} from "@mui/material";

import MenuPopover from "../../components/MenuPopover";
import NotificationItem from "../../components/NotificationItem";
import ScrollBar from "../../components/ScrollBar";
import { useRouter } from "next/router";

const notifications = [
  {
    id: "1",
    title: "You have new message",
    description: "2 unread messages",
    avatar: null,
    createdAt: "now",
    type: "chat_message",
    isUnRead: true,
  },
  {
    id: "2",
    title: "You have new message",
    description: "5 unread messages",
    avatar: null,
    createdAt: "2 days ago",
    type: "chat_message",
    isUnRead: false,
  },
];

const NotificationPopover = () => {
  const router = useRouter();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(null);

  const handleOpen = (e) => setOpen(e.currentTarget);
  const handleClose = (e) => setOpen(null);

  return (
    <>
      <IconButton
        ref={anchorRef}
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40, cursor: "pointer" }}
      >
        <Badge badgeContent={2} color="error">
          <Icon icon="akar-icons:envelope" width={28} height={28} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have 2 unread messages
            </Typography>
          </Box>

          <Tooltip title=" Mark all as read">
            <IconButton color="primary">
              <Icon icon="eva:done-all-fill" width={20} height={20} />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <ScrollBar sx={{ height: { xs: 340, sm: "auto" } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications?.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </List>
        </ScrollBar>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple onClick={() => router.push("/user")}>
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
};

export default NotificationPopover;
