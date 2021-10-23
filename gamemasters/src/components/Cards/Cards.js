

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MediaCard({postData}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://cdn.vox-cdn.com/thumbor/Bm4pPuVPMU9J8QMAJmltvUvM4WM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13301897/D_D_Art_and_Arcan__Regular_Edition__book_cover.jpg"
        alt="D and D art"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;