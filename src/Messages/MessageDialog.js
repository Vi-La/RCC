import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/messagesSlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/messagesSlice";

export default function MessageDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

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
    setName(defaultName);
    setEmail(defaultEmail)
    setMedia(defaultMedia)
    setMessage(defaultMessage);
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
          {data ? "Edit" : "Add"} History{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="media"
            label="Media"
            fullWidth
            value={media}
            onChange={(e) => {
              setMedia(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="message"
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
