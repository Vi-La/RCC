import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { add, update } from "../ReduxTable/messagesSlice";
import { useDispatch, useSelector } from "react-redux";
import { nextID, selectMessages } from "../ReduxTable/messagesSlice";

export default function MessageDialog({ iD,data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rows = useSelector(selectMessages)
  const messages = rows.find( row => row.id === iD)

  const defaultName = data && data.name;
  const defaultEmail = data && data.email;
  const defaultMedia = data && data.media;
  const defaultMessage = data && data.message;
  // Existing ID or random ID
  const id = data && data.id;

  const [name, setName] = React.useState(defaultName);
  const [email, setEmail] = React.useState(defaultEmail);
  const [media, setMedia] = React.useState(defaultMedia);
  const [message, setMessage] = React.useState(defaultMessage)

  const handleClickOpen = () => {
    setOpen(true);
    setName(messages.name);
    setEmail(messages.email)
    setMedia(messages.media)
    setMessage(messages.message);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
      let modified = Date.now()
    const action = data ? update : add;
    dispatch(action({ name, email, media, message ,modified, id: id || nextID() }));
    onSave && onSave();
    handleClose();
  };

  return (
    <>
      {render(handleClickOpen)}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {data ? "Edit" : "Message"} {" "}
        </DialogTitle>
        <DialogContent>
          <Typography color={"secondary"} variant="h6" fullWidth>
            Name: {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Email: {email}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Media: {media}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Comment: {message}
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
