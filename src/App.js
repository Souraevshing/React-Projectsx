import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Container,
  Button,
  Grid,
} from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />

      <AppBar position='relative' color='primary'>
        <Toolbar>
          <PhotoCameraIcon className={classes.logo} />
          <Typography variant='h6'> Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='GrayText'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant='h4' align='center' color='MenuText' paragraph>
              Take pictures and save your memories forever and ever.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    All Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth='md' className={classes.grid}>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='medium' color='info' fullWidth>
                      View
                    </Button>
                    <Button size='medium' color='warning' fullWidth>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='subtitle1' align='center' color='grey'>
          Albums
        </Typography>

        <Typography variant='subtitle2' align='center' color='gray'>
          &copy; {new Date().getFullYear().toString()}
        </Typography>
      </footer>
    </>
  )
}

export default App
