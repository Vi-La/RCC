import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/communitySlice";
import { useDispatch, useSelector } from "react-redux";
import { nextID, selectCommunity } from "../ReduxTable/communitySlice";
import { refreshPage, userRequest } from "../api";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function CommunityDialog({ iD,data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rows = useSelector(selectCommunity);
  const community = rows.find(row => row.id === iD)

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
  const [getCommunity, setGetCommunity] = React.useState([])
  const [activity, setActivity] = React.useState('')

  let Id = iD

  useEffect( async ()=> {
    const response = await userRequest.get(`community/${Id}`)
    setGetCommunity(response.data.data)
  }, [iD])


  const handleClickOpen = () => {
    setOpen(true);
    setName(getCommunity.title);
    setMembers(getCommunity.member);
    setSocial(getCommunity.twLink);
    setImg(getCommunity.image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    let modified = Date.now()

    try{
      const response = await userRequest.put(`community/${iD}`, {
        title: name,
        member: members,
        action: activity,
        image: img,
        twLink:social
      })
      setGetCommunity(response.data.data)
      refreshPage()
    } catch(error){
      console.log(error.message);
    }

    const action = community ? update : add;
    dispatch(action({ name, members , social ,modified, id: iD || nextID(), img }));
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Activity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={activity}
              label="Age"
              onChange={(e) => { setActivity(e.target.value)}}
            >
              <MenuItem value="Prayer Group">Prayer Group</MenuItem>
              <MenuItem value="Team">Team</MenuItem>
              <MenuItem value="Workers">Workers</MenuItem>
            </Select>
          </FormControl>
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
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
