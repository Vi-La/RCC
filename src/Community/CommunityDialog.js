import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/communitySlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/communitySlice";

export default function CommunityDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const defaultImg = data && data.img;
  const defaultName = data && data.name;
  const defaultMembers = data && data.members;
  const defaultSocial = data && data.social;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [name, setName] = React.useState(defaultName);
  const [members, setMembers] = React.useState(defaultMembers);
  const [social, setSocial] = React.useState(defaultSocial);

  const handleClickOpen = () => {
    setOpen(true);
    setName(defaultName);
    setMembers(defaultMembers);
    setSocial(defaultSocial);
    setImg(defaultImg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
      let modified = Date.now()
    const action = data ? update : add;
    dispatch(action({ name, members , social ,modified, id: id || nextID(), img }));
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
          {data ? "Edit" : "Add"} Community{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="community"
            label="Community name"
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
            value={members}
            onChange={(e) => {
              setMembers(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="social"
            label="Twitter handle"
            fullWidth
            value={social}
            onChange={(e) => {
              setSocial(e.target.value);
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
