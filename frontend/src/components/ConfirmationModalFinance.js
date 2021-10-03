import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmationModalFinanace(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Payment Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Total amount financed:
            {`$${new Intl.NumberFormat().format(props.amount)}`}
            <br />
            Total down payment:{" "}
            {`$${new Intl.NumberFormat().format(props.downPayment)}`}
            <br />
            Term in years: {props.term}
            <br />
            Monthly payment :{" "}
            {`$${new Intl.NumberFormat().format(props.monthly)}`}
            <br />
            Interest rate: 2.99%
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Estimated amounts above.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
