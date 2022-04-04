import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardHeader,
  IconButton,
} from '@mui/material';
import { GrAdd } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useTheme } from '@mui/material/styles';


/* param 
  img: str or w/e that represents an image in javascript 
  state: 'default' | 'edit'; default just show image or blank if no image provided, edit shows a plus sign and card is clickable */
export default function Image({img, sx}) {

  let imageStyle = {
    minWidth: 200,
    minHeight: 200,
    maxWidth: 420,
    maxHeight: 420,
    borderRadius: '10px',
    marginX: 'auto',
    marginY: '20px',
  };

  if (sx) {
    imageStyle = {...imageStyle, ...sx}
  };


  return (
    <Card sx={imageStyle}>
      <CardMedia component='img' height='100%' width='100%' image={img} />
    </Card>
  );
}

const imageEditStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '10px',
  marginX: 'auto',
  marginY: '20px',
};

export function ImageEdit({ image, setImages, index }) {
  const theme = useTheme();
  const setImage = (file) => {
    setImages((previousImages) => {
      return [
        ...previousImages.slice(0, index),
        file,
        ...previousImages.slice(index + 1),
      ];
    });
  };

  const [compImage, setCompImage] = React.useState('')

  React.useEffect(() => {
    if(typeof image === 'string') {
      setCompImage(image)
    }
  }, [])


  const hiddenFileInput = React.useRef(null);

  const handleFileUploadClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCompImage(URL.createObjectURL(img))
      setImage(img);
    }
  };

  const handleCloseClick = () => {
    setImage('')
    setCompImage('')
  };

  console.log(image)
  return (
    <Card sx={imageEditStyle}>
      {compImage === undefined || compImage === '' ? (
        <CardActionArea
          onClick={handleFileUploadClick}
          sx={{ height: '100%', width: '100%' }}>
          <CardHeader
            title={'Image ' + (index + 1)}
            sx={{ margin: 'auto', textAlign: 'center' }}
          />
          <CardContent sx={{ alignItems: 'center' }}>
            <IconContext.Provider
              value={{ style: { margin: 'auto', display: 'block' } }}>
              <div>
                <GrAdd size={50} />
              </div>
            </IconContext.Provider>
          </CardContent>
          <input
            type='file'
            ref={hiddenFileInput}
            onChange={handleFileUpload}
            hidden
          />
        </CardActionArea>
      ) : (
        <React.Fragment>
          <CardHeader
            action={
              <IconButton
                onClick={handleCloseClick}
                sx={{ color: theme.palette.error.main }}>
                <AiFillCloseCircle />
              </IconButton>
            }
            title={'Image ' + (index + 1)}
            sx={{ margin: 'auto' }}
          />
          <CardMedia component='img' height='100%' width='100%' image={compImage} />
        </React.Fragment>
      )}
      )
    </Card>
  );
}
