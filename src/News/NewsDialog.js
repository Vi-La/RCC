import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/newsSlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/newsSlice";
import { refreshPage, userRequest } from "../api";

export default function NewsDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const defaultImg = data && data.img;
  const defaultTitle = data && data.title;
  const defaultSubTitle = data && data.subtitle;
  const defaultDescription = data && data.description;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [title, setTitle] = React.useState(defaultTitle);
  const [subtitle, setSubTitle] = React.useState(defaultSubTitle)
  const [description, setDescription] = React.useState(defaultDescription)
  const [addNews, setAddNews] = React.useState([])
  
  const handleClickOpen = () => {
    setOpen(true);
    setTitle('');
    setSubTitle('');
    setDescription('');
    setImg('');
  };
  
  console.log(title,subtitle,description, img)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let token = JSON.parse(localStorage.getItem('user')).accessToken;
      let modified = Date.now()
      console.log("modified",addNews)
      try {
        const response = await userRequest.post(`news/create`,{
            title: title,
            subTitle: subtitle,
            desc: description,
            newsImage: img
          
        })
        setAddNews(response.data.data)
        refreshPage()
      } catch (error) {
        console.log(error)
      }

    console.log("modified",addNews)
    const action = data ? update : add;
    dispatch(action({ title, subtitle ,description ,modified, id: id || nextID(), img }));
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
          {data ? "Edit" : "Add"} Article{" "}
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
            id="subtitle"
            label="Subtitle"
            fullWidth
            value={subtitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          /> */}
           <TextField
            autoFocus
            multiline
            rows={5}
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
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
