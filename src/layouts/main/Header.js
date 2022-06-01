import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
  Avatar,
  Badge,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

import Logo from "../../components/Logo";
import NavLink from "../../components/NavLink";
import { AuthContext } from "../../context/authContext";
import AccountPopover from "../user/AccountPopover";
import NotificationPopover from "../user/NotificationPopover";

/////////////////////////////////////////////
const RootStyle = styled("section")({
  position: "fixed",
  width: "100%",
  background: "#f5f6f9",
  paddingTop: "0.675rem",
  paddingBottom: "0.675rem",
  display: "flex",
  alignItems: "center",
  zIndex: 999,
});

const MenuItems = [
  {
    id: 1,
    label: "Home",
    path: "home",
  },
  {
    id: 2,
    label: "How it works",
    path: "howitworks",
  },
  {
    id: 3,
    label: "Peer Learning",
    path: "peer",
  },
  {
    id: 4,
    label: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const { user } = useContext(AuthContext);

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />

          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack
              direction="row"
              gap={3}
              mr={2}
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                },
              }}
            >
              {MenuItems?.map((item) => (
                <NavLink
                  styles={{
                    marginRight: "1rem",
                  }}
                  key={item.id}
                  label={item.label}
                  path={item.path}
                />
              ))}
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>
              {user === null && (
                <Button
                  sx={{
                    color: "#123456",
                    textTransform: "inherit",
                    fontSize: "15px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    p: 0,
                    m: 0,
                    border: "1px solid blue",
                  }}
                  onClick={() => router.push("/user/auth/login")}
                >
                  login
                </Button>
              )}

              {!(user === null) && (
                <>
                  <Button
                    variant="outlined"
                    startIcon={<Icon icon="akar-icons:chat-question" />}
                    sx={{
                      textTransform: "inherit",
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                      },
                      display: {
                        md: "flex",
                        xs: "none",
                      },
                    }}
                    onClick={() => router.push("/user/ask")}
                  >
                    Ask a Question
                  </Button>
                  <NotificationPopover />
                  <AccountPopover />
                </>
              )}

              <IconButton
                sx={{
                  display: {
                    md: "none",
                    xs: "flex",
                  },
                }}
                onClick={() => setShowMenu(true)}
              >
                <Icon
                  style={{
                    fontSize: "2rem",
                    cursor: "pointer",
                    color: "#123456",
                  }}
                  icon="eva:menu-2-fill"
                />
              </IconButton>
            </Stack>
          </Stack>

          {/* Drawer */}
          {showMenu && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "280px",
                  height: "100vh",
                  background: "#eee",
                  display: "flex",
                  flexDirection: "column",
                  pt: 5,
                  px: 4,
                  zIndex: 100,
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Logo />

                  <IconButton
                    onClick={() => setShowMenu(false)}
                    sx={{ display: { md: "none" } }}
                  >
                    <Icon
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      icon="ant-design:close-outlined"
                    />
                  </IconButton>
                </Stack>

                <Stack spacing={4} sx={{ mt: 5 }}>
                  {MenuItems?.map((item, i) => (
                    <NavLink
                      styles={{
                        marginRight: "1rem",
                      }}
                      key={i}
                      label={item.label}
                      path={item.path}
                    />
                  ))}
                </Stack>

                <Stack sx={{ mt: 5 }} direction="row">
                  <Button
                    variant="contained"
                    startIcon={<Icon icon="akar-icons:chat-question" />}
                    sx={{
                      textTransform: "inherit",
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                      },
                      mt: 5,
                    }}
                    onClick={() => router.push("/user/ask")}
                  >
                    Ask a Question
                  </Button>
                  <Box sx={{ flex: 1 }} />
                </Stack>
              </Box>
              <Box
                onClick={() => setShowMenu(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  background: "rgba(0,0,0,0.5)",
                  zIndex: 10,
                }}
              />
            </>
          )}
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Header;
