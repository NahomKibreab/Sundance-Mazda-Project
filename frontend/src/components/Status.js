import { Paper } from "@mui/material";

export default function Status() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.5)",
      }}
    >
      <Paper
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          width: 0,
        }}
      >
        <img
          src="/images/status.png"
          alt="loading status"
          className="App-logo"
          style={{ height: "unset" }}
        />
      </Paper>
    </div>
  );
}
