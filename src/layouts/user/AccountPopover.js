import { useState, useContext, useRef } from "react";
import {
  IconButton,
  Avatar,
  Typography,
  Divider,
  Box,
  Stack,
  MenuItem,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { AuthContext } from "../../context/authContext";
import MenuPopover from "../../components/MenuPopover";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    linkTo: "/",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    linkTo: "#",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    linkTo: "#",
  },
];

const AccountPopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { onLogout, user } = useContext(AuthContext);

  const handleClose = () => setOpen(null);

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={(e) => setOpen(e.currentTarget)}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          sx={{ cursor: "pointer" }}
          src={`${
            user?.avatar
              ? user?.avatar
              : "https://mui.com/static/images/avatar/3.jpg"
          }`}
          alt="Remy"
        />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.username}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={() => onLogout()} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
};

export default AccountPopover;
