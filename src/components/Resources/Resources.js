import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resourceCards">
      <section className="resourcehead">
      <h1>Resources</h1>
      </section>
      <a target="_blank" href="https://www.dndbeyond.com/">
      <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://yt3.ggpht.com/ytc/AKedOLQ_d06_6tNfk_cieOyb6NEjwKEoY4w8AiND2KfF=s900-c-k-c0x00ffffff-no-rj"
          alt="D&D Beyond"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            D&D Beyond
          </Typography>
          <Typography variant="body2" color="text.secondary">
          All Of The Latest D&D Content Available In Digital Format & Shareable With Up to 36 Others. Everything You Need For Epic Adventures With D&D Beyond The Official D&D Digital Toolset. Encounter Builder. Official D&D Toolset. New Player Guide. D&D Character Builder.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </a>
      <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.paizo.com/d960ad1b-9967-00f9-1158-72274b18312d/ffad1f69-89fb-41a0-aff5-14a27cd09c57/Pathfinder2ogimage.jpg?w=1200&fm=jpg"
          alt="Pathfinder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pathfinder
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This comprehensive 640-page guide provides everything you need to set out into a world of limitless fantasy adventure! Choose from ancestries like elf, human, and goblin and classes like alchemist, fighter, and sorcerer to create a hero of your own design, destined to become a legend! 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://static.efantasy.gr/layouts/efantasy/images/products/151211/1_151211.jpg"
          alt="Call of Cthulhu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Call of Cthulhu
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Call of Cthulhu is the world’s best roleplaying game of mystery and horror. In Call of Cthulhu, you take on the role of everyday people who become investigators of the unknown - whether they are prepared or not. The mysterious places, people, and situations you encounter are often not what they seem.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345}} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://wiki.roll20.net/images/b/b6/Core2nd.jpeg"
          alt="Warhammer Fantasy Roleplay"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Warhammer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Warhammer Fantasy Roleplay (WFRP) takes you back to the Old World. Get the gang together, create your (anti)heroes, and set off to make your way through the vile corruption, scheming plotters and terrifying creatures intent on destruction. Join in the fray as you take on forces!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.waylandgames.co.uk/165065/cyberpunk-red-rpg-core-rulebook.jpg"
          alt="Cyberpunk Red"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cyberpunk Red
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cyberpunk: the original roleplaying game of the dark future; a world of corporate assassins, heavy-metal heroes and brain burning cyberhackers, packed with cutting edge technology and intense urban action. Within this book, you’ll find everything you need to tackle the mean streets of the 2000’s.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Resources;

