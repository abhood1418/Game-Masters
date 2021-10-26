import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Route } from 'react-router-dom';
import Inspect from '../Inspect/Inspect';

import './Card.css'



function MediaCard({ postData, post }) {
  // console.log(post);

  return (
    <div className="cardstyle">
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        height="250"
        image={post.fields.img}
        alt="D and D art"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.fields.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.fields.description}
        </Typography>
      </CardContent>
        <CardActions>
          <Link to={`/Inspect/${post.id}`}>
            <Button size="small">See More</Button>
          </Link>
      </CardActions>
      </Card>

      <Route path="/Inspect/:id">
        <Inspect />
      </Route>
      </div>
  );
}

export default MediaCard;