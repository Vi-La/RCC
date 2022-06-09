import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/groupsSlice";
import { useDispatch, useSelector } from "react-redux";
import { nextID, selectGroup } from "../ReduxTable/groupsSlice";

export default function GroupsDialog({ iD,data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rows = useSelector(selectGroup);
  const group = rows.find(row => row.id === iD)

  const defaultImg = data && data.img;
  const defaultName = data && data.name;
  const defaultSummary = data && data.summary;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [name, setName] = React.useState(defaultName);
  const [summary, setSummary] = React.useState(defaultSummary)

  const handleClickOpen = () => {
    setOpen(true);
    setName(group.name);
    setSummary(group.summary);
    setImg(group.img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(iD)
      let modified = Date.now()
    const action = group ? update : add;
    dispatch(action({ name, summary ,modified, id: iD || nextID(), img }));
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
          {data ? "Edit" : "Add"} Prayer Group{" "}
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
            id="members"
            label="Members"
            fullWidth
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
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
