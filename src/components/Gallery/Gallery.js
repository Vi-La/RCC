import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navigation  from "./../Navigation/Toolbar/Toolbar"
import "./gallery.css"

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
    title: '1',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/01/03/01/08/jesus-christ-1948251__480.jpg',
    title: '2',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2013/01/20/04/53/college-75535__480.jpg',
    title: '5',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/10/01/07/25/holy-lamb-1707010__340.png',
    title: '7',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/02/11/09/11/family-2057301__480.jpg',
    title: '8',
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/01/31/23/14/heart-2028062__480.png",
    title: '9',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: '10',
  }
];

export const Gallery =()=>{
  return (
      <React.Fragment>
      <Navigation/>
      {/* sx={{ width: "300px", height:"100vh",marginTop:"20px",padding:" 0px 10px", display:"flex", flexDirection:"column", marginLeft:"35px"}} */}
    <ImageList sx={{ width: "100%", height:"100vh",marginTop:"20px",padding:"0px 40px"}}  variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img 
            className="galleryImage"
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </React.Fragment>
  );
}

