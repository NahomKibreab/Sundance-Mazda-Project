import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ marginTop: "24px" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2019 Gistia
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
