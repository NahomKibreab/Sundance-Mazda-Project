import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea, Grid, Button } from "@mui/material";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1567360300863-47f71100205b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Grid container>
            <Grid item sx={{ textAlign: "left", flexGrow: 1 }}>
              <Typography variant="h6" color="text.secondary">
                Year, Make, Model
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                $19,590
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ textAlign: "left", flexGrow: 1 }}>
              <Typography variant="body1" color="text.secondary">
                Trim
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                Est. Payment
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ textAlign: "left", flexGrow: 1 }}>
              <Typography variant="body1" color="text.secondary">
                Mileage
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                $300/mo
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Grid container>
          <Grid item sx={{ flexGrow: 1, textAlign: "left" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="buy">
              <Button variant={"contained"} color={"secondary"}>
                Buy Now
              </Button>
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
