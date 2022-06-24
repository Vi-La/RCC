import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/leadersSlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/leadersSlice";
import { refreshPage, userRequest } from "../api";

export default function LeadersDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const defaultImg = data && data.img;
  const defaultName = data && data.name;
  const defaultSummary = data && data.summary;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [name, setName] = React.useState(defaultName);
  const [lname, setLname] = React.useState('');
  const [email, setEmail] = React.useState(defaultSummary);
  const [telephone, setTelephone] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [leader, setLeader] = React.useState([])

  console.log("Leader input:", name, lname, email, telephone, pass)

  const handleClickOpen = () => {
    setOpen(true);
    setName('');
    setEmail('');
    setLname('');
    setTelephone('');
    setPass('');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let modified = Date.now()
      try {
        const response = await userRequest.post(`users/create`,{
            firstName: name,
            lastName: lname,
            email: email,
            telephone: telephone,
            password: pass
          
        })
        setLeader(response.data.data)
        refreshPage()
      } catch (error) {
        console.log(error)
      }
    const action = data ? update : add;
    dispatch(action({ name, email, lname, telephone, pass ,modified, id: id || nextID(), img }));
    console.log(name, email, lname, telephone, pass )
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
          {data ? "Edit" : "Add"} Leader{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            fullWidth
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="summary"
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
            label="Telephone"
            fullWidth
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            fullWidth
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
