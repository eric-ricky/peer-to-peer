import { useState, useContext } from "react";
import Link from "next/link";
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
import Logo from "../../components/Logo";
import { AuthContext } from "../../context/authContext";
import AccountPopover from "./AccountPopover";

const MenuItems = [
  {
    id: 1,
    label: "Recent questions",
    path: "/user",
  },
  {
    id: 2,
    label: "My questions",
    path: "/user/my-questions",
  },
];

/////////////////////////////////////////////
const RootStyle = styled("section")({
  position: "fixed",
  width: "100%",
  background: "#f5f6f9",
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  display: "flex",
  alignItems: "center",
  zIndex: 999,
  boxShadow: "0.2px 0.2px 15px rgba(0,0,0,0.2)",
});

const LinkStyle = styled(Box)({
  "& a": {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 600,
    cursor: "pointer",
    "&.active": {
      borderBottom: "1px solid blue",
    },
  },
});

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const { onLogout, user } = useContext(AuthContext);

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
              {MenuItems?.map(({ path, label }, i) => (
                <LinkStyle
                  key={i}
                  sx={{
                    color: `${router.asPath === path ? "blue" : "#123456"}`,
                    cursor: "pointer",
                  }}
                >
                  <Link href={path}>{label}</Link>
                </LinkStyle>
              ))}
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>
              <Stack direction="row" alignItems="center" gap={2}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#123456",
                    fontSize: "14pxm",
                    cursor: "pointer",
                    display: {
                      md: "flex",
                      xs: "none",
                    },
                  }}
                >
                  {user?.username}
                </Typography>

                <AccountPopover />
              </Stack>

              <IconButton
                color={!false ? "primary" : "default"}
                onClick={() => console.log("opening..")}
                sx={{ width: 40, height: 40 }}
              >
                <Badge badgeContent="4" color="error">
                  <Icon icon="akar-icons:envelope" width={28} height={28} />
                </Badge>
              </IconButton>

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
                  right: 0,
                  width: { md: "460px", xs: "280px" },
                  height: "100vh",
                  background: "#eee",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2,
                  px: {
                    md: 9,
                    xs: 4,
                  },
                  zIndex: 100,
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Logo />

                  <Box />

                  <IconButton onClick={() => setShowMenu(false)}>
                    <Icon
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      icon="ant-design:close-outlined"
                    />
                  </IconButton>
                </Stack>

                <Stack spacing={4} sx={{ mt: 8 }}>
                  {MenuItems?.map(({ path, label }, i) => (
                    <Box
                      key={i}
                      sx={{
                        color: `${router.asPath === path ? "blue" : "#123456"}`,
                        cursor: "pointer",
                      }}
                    >
                      <Link href={path}>{label}</Link>
                    </Box>
                  ))}
                </Stack>

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
              </Box>
              <Box
                onClick={() => setShowMenu(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  background: "rgba(0,0,0,0.65)",
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
