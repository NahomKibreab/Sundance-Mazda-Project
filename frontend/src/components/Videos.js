import { Grid, Typography } from "@mui/material";

import ReactPlayer from "react-player";

export default function Videos() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#bec2cb" }}
      >
        <Grid item>
          <Typography variant="h3" p={4} fontWeight="light">
            Helpful Videos
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=juEqvlETN30"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xs5LwT9p_-Y"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=f5EwnrDWZbk"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Gl3ft2TuQWc"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=48OV6jOU2oM"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=iX6I8IP1dmY"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xQMY43AFW2w"
            width="370px"
            height="180px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_JlJ7ug0W-E"
            width="370px"
            height="180px"
          />
        </Grid>
      </Grid>
    </>
  );
}
