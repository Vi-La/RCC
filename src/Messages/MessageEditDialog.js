import React, { useEffect, useState } from "react";
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
import { userRequest } from "../api";

export default function MessageEditDialog({ iD,data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();  
  
  const rows = useSelector(selectMessages)
  const messages = rows.find( row => row.id === iD)
  
  const defaultName = data && data.name;
  const defaultEmail = data && data.email;
  const defaultPhone = data && data.phone;
  const defaultUpdate = data && data.updatedAt
  const defaultMessage = data && data.message;
  // Existing ID or random ID
  const id = data && data.id;
  
  const [name, setName] = React.useState(defaultName);
  const [email, setEmail] = React.useState(defaultEmail);
  const [phone, setPhone] = React.useState(defaultPhone);
  const [message, setMessage] = React.useState(defaultMessage)
  const [updatedAt, setUpdatedAt] = React.useState(defaultUpdate)
  const [getMsgById, setgetMsgById] = useState([])
  let Id = iD

  useEffect( async ()=> {
    const response = await userRequest.get(`message/${Id}`)
    setgetMsgById(response.data.data)
  }, [iD])
    
  const handleClickOpen = () => {
    setOpen(true);
    setName(getMsgById.fullName);
    setEmail(getMsgById.email)
    setPhone(getMsgById.phone)
    setUpdatedAt(getMsgById.updatedAt)
    setMessage(getMsgById.message);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
      let modified = Date.now()
    const action = data ? update : add;
    dispatch(action({ name, email, phone, message ,modified, id: id || nextID() }));
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
          <Typography variant="body1" gutterBottom>
            Message: {message}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Email: {email}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Phone: {phone}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Date: {updatedAt}
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
