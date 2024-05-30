import { useState } from 'react';
// import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PizzaItem({ pizza, fetchPizzas }) {
    const [isShown, setIsShown] = useState(true);

    const togglePic = (pizzaid) => {
        console.log('Clicked', pizzaid);
        setIsShown(!isShown);
    }

    return (
        <div id="cards">
            {isShown ? 
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea onClick={() => togglePic(pizza.id)}>
                    <CardMedia component="img" image={pizza.image_path} sx={{ width: '250px', height: '250px' }}/>
                    <CardContent>
                        <Typography gutterBottom sx={{ fontSize: 16 }} component="div">{pizza.name}</Typography>
                        <Typography gutterBottom sx={{ fontSize: 16 }} component="div">{pizza.price}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            :
            <Card sx={{ maxWidth: 250 }}>
            <CardActionArea onClick={() => togglePic(pizza.id)}>
                <CardMedia component="img" image={pizza.image_path} sx={{ width: '250px', height: '250px' }}/>
                <CardContent>
                    <Typography gutterBottom sx={{ fontSize: 16 }} component="div">{pizza.name}</Typography>
                    <Typography gutterBottom sx={{ fontSize: 10 }} component="div">{pizza.description}</Typography>
                    <Typography gutterBottom sx={{ fontSize: 16 }} component="div">{pizza.price}</Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            }
        </div>
    )
}