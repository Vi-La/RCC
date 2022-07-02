import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/historySlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/historySlice";
import { refreshPage, userRequest } from "../api";
import { Twitter } from "@material-ui/icons";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function HistoryDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

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

  const handleClickOpen = () => {
    setOpen(true);
    setTitle('');
    setEventName('');
    setContent('')
    setYear('');
    setImg('');
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let modified = Date.now()
      try {
        const response = await userRequest.post(`history/create`,{
          eventName: eventName,
          title: title,
          content: content,
          year: year,
          image:img,
          
        })
        setGetHistory(response.data.data)
        refreshPage()
      } catch (error) {
        console.log(error)
      }
    const action = data ? update : add;
    dispatch(action({ title, eventName, content, year ,modified, id:id || nextID(), img }));
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="eventName"
            label="Event Name"
            fullWidth
            value={eventName}
            onChange={(e) => {
              setEventName(e.target.value);
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Activity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Age"
              onChange={(e) => { setYear(e.target.value)}}
            >
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
            </Select>
          </FormControl>
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
