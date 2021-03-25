import React from "react";
import { Box, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export function Content({ children, ...p }) {
  return <main {...p}>{children}</main>;
}
export function Section({ children, full, noP, i, ...p }) {
  const theme = useTheme();
  return (
    <section
      className={i ? "i" : ""}
      style={{
        height: full ? "100%" : null,
        background: i ? theme.palette.primary.main : null,
        color: i ? theme.palette.primary.contrastText : null,
        padding: noP ? "0px" : theme.spacing(5),
      }}
      {...p}
    >
      <Container
        maxWidth={full ? null : "lg"}
        style={{
          height: full ? "100%" : null,
          zIndex: 2,
          padding: full ? "0px" : theme.spacing(3),
        }}
      >
        {children}
      </Container>
    </section>
  );
}