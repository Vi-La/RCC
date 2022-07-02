import React, {useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { userRequest } from "../api";

export default function DeleteGroupDialog({ ids, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const [isdeleted, setIsdeleted] = React.useState(false)
  console.log("get selected ids", ids[0]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try{
      await userRequest.delete(`group/${ids[0]}`);
      setIsdeleted(true)
    } catch (error) {
      console.log(error.message)
    }
    onSave && onSave();
    handleClose();
  };

  return (
    <div>
      {render(handleClickOpen)}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete a Group</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {ids.length} Group
          {ids.length > 1 && "s"}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
