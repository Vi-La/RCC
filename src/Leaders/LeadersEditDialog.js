import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/leadersSlice";
import { useDispatch,useSelector } from "react-redux";
import { nextID, selectLeaders } from "../ReduxTable/leadersSlice";
import { refreshPage, userRequest } from "../api";

export default function LeadersDialog({ iD,data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rows = useSelector(selectLeaders);
  const leaders = rows.find(row => row.id === iD);

  const defaultImg = data && data.img;
  const defaultFname = data && data.fname;
  const defaultLname = data && data.lname;
  const defaultEmail= data && data.email;
  const defaultTelephone = data && data.telephone;
  const defaultPass = data && data.pass;
  const defaultSummary = data && data.summary;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [fname, setFname] = React.useState(defaultFname);
  const [lname, setLname] = React.useState(defaultLname);
  const [email, setEmail ] = React.useState(defaultEmail);
  const [telephone, setTelephone ] = React.useState(defaultTelephone);
  const [pass, setPass] = React.useState(defaultPass)
  const [getLeaders, setLeaders] = React.useState([])

  let Id = iD

  useEffect( async ()=> {
    const response = await userRequest.get(`users/${Id}`)
    setLeaders(response.data.data)
  }, [iD])

  const handleClickOpen = () => {
    setOpen(true);
    setFname(getLeaders.fname)
    setLname(getLeaders.lname)
    setEmail(getLeaders.email)
    setTelephone(getLeaders.telephone)
    setPass(getLeaders.pass);
    setImg(getLeaders.img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let modified = Date.now()
      try{
        const response = await userRequest.put(`users/${iD}`, {
          firstName: fname,
          lastName: lname,
          email: email,
          telephone: telephone,
          password: pass,
          image:img,
        })
        setLeaders(response.data.data)
        refreshPage()
      } catch(error){
        console.log(error.message);
      }
    const action = leaders ? update : add;
    // let name = `${fname} ${lname}`
    dispatch(action({ fname, lname, email, telephone, pass ,modified, id: iD || nextID(), img }));
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
            label="Firstname"
            fullWidth
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lastname"
            fullWidth
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
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
            id="name"
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
            id="name"
            label="Password"
            fullWidth
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          {/* <TextField
            autoFocus
            multiline
            rows={5}
            margin="dense"
            id="summary"
            label="Password"
            fullWidth
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            label="Image URL"
            fullWidth
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
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
