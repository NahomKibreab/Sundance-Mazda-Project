import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Input, useMediaQuery } from "@mui/material";
import { useHistory } from "react-router";
import {
  SellerDetails,
  BuyersDetails,
  VehicleDetails,
  PriceDetails,
  PaymentDetails,
} from "./ConfirmationTable";

export default function ConfirmationModal(props) {
  // const [open, setOpen] = React.useState(false);
  const mobileMode = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: mobileMode ? 300 : 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "70vh",
  };
  const {
    open,
    setOpen,
    paymentMethod,
    car,
    term,
    downPayment,
    amount,
    monthly,
  } = props;
  const path = useHistory();

  const redirectToHome = () => {
    setOpen(false);
    path.push("/");
  };

  if (car) {
    return (
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Purchase Details
            </Typography>
            <Divider variant="middle" color="black" />
            <Box id="modal-modal-description">
              <>
                <Typography
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                >
                  Seller's Details
                </Typography>
                <SellerDetails />
                <Divider variant="middle" color="black" />
                <Typography
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                >
                  Buyer's Details
                </Typography>
                <BuyersDetails />
                <Divider variant="middle" color="black" />
                <Typography
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                >
                  Vehicle's Details
                </Typography>
                <VehicleDetails car={car} />
                <Divider variant="middle" color="black" />
                <Typography
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                >
                  Price Details
                </Typography>
                <PriceDetails car={car} />
                {paymentMethod === "finance" && (
                  <>
                    <Divider variant="middle" color="black" />
                    <Typography
                      sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                    >
                      Payment Details
                    </Typography>
                    <PaymentDetails
                      term={term}
                      downPayment={downPayment}
                      amount={amount}
                      monthly={monthly}
                    />
                  </>
                )}
              </>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={redirectToHome}
            >
              DONE
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
}
