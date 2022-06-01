import React from "react";
import { Link } from "react-scroll";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

///////////////////////
const LinkStyle = styled(Box)({
  "& a": {
    color: "#75798f",
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 600,
    cursor: "pointer",
    "&.active": {
      color: "#3c06ff",
    },

    "&:hover": {
      color: "#3c06ff",
    },
  },
});

const NavLink = ({ label, path, styles }) => {
  return (
    <LinkStyle style={styles}>
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
      >
        {label}
      </Link>
    </LinkStyle>
  );
};

export default NavLink;
