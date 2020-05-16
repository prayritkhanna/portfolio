import React, { Component } from 'react';
import './Projects.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import { red, blue, yellow, green, rgb } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
        color: 'white',
        borderRadius:3,
    },
    card:{
        padding: theme.spacing(2),
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        gridGap: theme.spacing(3),
        maxHeight: 1000,
        maxWidth: 900,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
    transform: 'rotate(180deg)',
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  }));
  

export default function Projects(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
        return ( 
            <div className="projects">
                <h2>Projects</h2>
                <Grid container spacing={10} className={classes.root} alignContent='baseline' justify='center'>
                    <Grid item md={3}>
                        <Card className={classes.card}>

                            <CardActionArea>
                                <CardMedia
                                component='img'
                                alt="Coding image"
                                height="500"
                                image={ require('./img/hello_world.jpg') }
                                title="1st Project"/>
                                <CardContent>
                                    <Typography color='textPrimary'>
                                        Project Name 1
                                            <CardActions disableSpacing='true'>
                                            <IconButton
                                                    className={clsx(classes.expand, {
                                                        [classes.expandOpen]: expanded,
                                                    })}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more">
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component='img'
                                alt="Coding image"
                                height="500"
                                image={ require('./img/network.jpg') }
                                title="Hello World!"
                                />
                                <CardContent>
                                    <Typography color='textPrimary'
                                    >Project Name 1</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component='img'
                                alt="Coding image"
                                height="500"
                                image={ require('./img/hello_world.jpg') }
                                title="Hello World!"
                                />
                                <CardContent>
                                    <Typography color='textPrimary'
                                    >Project Name 1</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
}

