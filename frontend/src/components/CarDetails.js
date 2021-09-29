import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import CarCarousel from "./CarCarousel";
import CarDetailsTab from "./CarDetailsTab";

export default function CarDetails() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const styles = () => {
    if (matches) {
      return {
        paddingRight: 0,
      };
    }
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  };
  return (
    <>
      <Card sx={{ border: "none", boxShadow: "none" }}>
        <CardHeader title="Model, Make, Year" subheader="September 14, 2016" />
        <CardMedia
          component="img"
          width="50%"
          image="https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/mazda/3-sport/gx/5-doors-hatchback/exteriorColors/13520_cc0640_001_41w.png"
          alt="Mazda Car Image"
        />
        <CardContent sx={styles}>
          <CarCarousel />
        </CardContent>
        <CarDetailsTab />
      </Card>
    </>
  );
}
