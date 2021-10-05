import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import { useHistory } from "react-router";

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

export default function ConfirmationModal(props) {
  // const [open, setOpen] = React.useState(false);
  const { open, setOpen, paymentMethod } = props;
  const handleClose = () => setOpen(false);
  const ariaLabel = { "aria-label": "description" };
  const path = useHistory();

  const redirectToHome = () => {
    setOpen(false);
    path.push("/");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input defaultValue="Hello world" inputProps={ariaLabel} />
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
          <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
          <Input defaultValue="Error" error inputProps={ariaLabel} />
          <Input defaultValue="Hello world" inputProps={ariaLabel} />
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
          <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
          <Input defaultValue="Error" error inputProps={ariaLabel} />
          <Input defaultValue="Hello world" inputProps={ariaLabel} />
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
          <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
          <Input defaultValue="Error" error inputProps={ariaLabel} />

          <Typography id="modal-modal-title" variant="h1" component="h2">
            {paymentMethod}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={redirectToHome}>DONE</Button>
        </Box>
      </Modal>
    </div>
  );
}
