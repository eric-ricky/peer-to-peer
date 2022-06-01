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
} from "@mui/material";
import { Icon } from "@iconify/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

import Logo from "../../components/Logo";
import NavLink from "../../components/NavLink";
import { AuthContext } from "../../context/authContext";

/////////////////////////////////////////////
const RootStyle = styled("section")({
  position: "fixed",
  width: "100%",
  background: "#f5f6f9",
  paddingTop: "1.75rem",
  paddingBottom: "1.75rem",
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

          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <Stack direction="row">
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

            {user === null ? (
              <Stack direction="row">
                <Button
                  sx={{
                    color: "#123456",
                    textTransform: "inherit",
                    fontSize: "15px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    p: 0,
                    m: 0,
                    borderBottom: "1px solid blue",
                  }}
                  onClick={() => router.push("/user/auth/signup")}
                >
                  signup
                </Button>
                <span>/</span>
                <Button
                  sx={{
                    color: "#123456",
                    textTransform: "inherit",
                    fontSize: "15px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    p: 0,
                    borderBottom: "1px solid blue",
                  }}
                  onClick={() => router.push("/user/auth/login")}
                >
                  login
                </Button>
              </Stack>
            ) : (
              <Stack direction="row">
                <Button
                  variant="contained"
                  startIcon={<Icon icon="akar-icons:chat-question" />}
                  sx={{
                    textTransform: "inherit",
                    fontSize: {
                      md: "14px",
                      xs: "12px",
                    },
                  }}
                  onClick={() => router.push("/user/ask")}
                >
                  Ask a Question
                </Button>
              </Stack>
            )}
          </Stack>

          <Box sx={{ display: { md: "none" } }}>
            <IconButton
              onClick={() => setShowMenu(true)}
              sx={{ display: { md: "none" } }}
            >
              <Avatar
                sx={{ cursor: "pointer" }}
                src="https://mui.com/static/images/avatar/3.jpg"
                alt="Remy"
              />
            </IconButton>
            <IconButton onClick={() => setShowMenu(true)}>
              <Icon
                style={{ fontSize: "2.5rem", cursor: "pointer" }}
                icon="eva:menu-2-fill"
              />
            </IconButton>
          </Box>

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
