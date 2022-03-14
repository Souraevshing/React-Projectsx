import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
    paddingTop: '20px',
  },
  logo: {
    marginRight: '5px',
  },
  grid: {
    padding: '20px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 3,
  },
  footer: {
    padding: '30px 0',
    backgroundColor: 'transparent',
  },
})

export default useStyles
