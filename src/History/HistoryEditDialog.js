import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/historySlice";
import { useDispatch, useSelector } from "react-redux";
import { nextID, selectHistory } from "../ReduxTable/historySlice";
  import { refreshPage, userRequest } from "../api";

export default function HistoryDialog({ iD, data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rows = useSelector(selectHistory);
  const history = rows.find(row => row.id === iD)

  const defaultImg = data && data.img;
  const defaultTitle = data && data.title;
  const defaultEventName = data && data.eventName;
  const defaultContent = data && data.comments;
  const defaultYear = data && data.year;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [title, setTitle] = React.useState(defaultTitle);
  const [eventName, setEventName] = React.useState(defaultEventName);
  const [content, setContent] = React.useState(defaultContent);
  const [year, setYear] = React.useState(defaultYear)
  const [getHistory, setGetHistory] = React.useState([])

  let Id = iD

  useEffect( async ()=> {
    const response = await userRequest.get(`history/${Id}`)
    setGetHistory(response.data.data)
  }, [iD])

  const handleClickOpen = () => {
    setOpen(true);
    setTitle(getHistory.title);
    setEventName(getHistory.eventName);
    setContent(getHistory.content)
    setYear(getHistory.year);
    setImg(getHistory.image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let modified = Date.now()
      try{
        const response = await userRequest.put(`history/${iD}`, {
          title: title,
          eventName: eventName,
          content: content,
          image:img,
          year: year
        })
        setGetHistory(response.data.data)
        refreshPage()
      } catch(error){
        console.log(error.message);
      }
    const action = history ? update : add;
    dispatch(action({ title, eventName, content, year ,modified, id: iD || nextID(), img }));
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
            id="title"
            label="Title"
            fullWidth
            value={eventName}
            onChange={(e) => {
              setEventName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            multiline
            rows={5}
            margin="dense"
            id="content"
            label="Content"
            fullWidth
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
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
          <TextField
            autoFocus
            margin="dense"
            label="Year"
            fullWidth
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
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
