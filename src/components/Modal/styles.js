import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    overflow: 'scroll',
    height: '60%',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '25px 0',
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '25px',
    // width: '50%',
  },
  trySaying: {
    marginBottom: '25px',
  },
  chip: {
    margin: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
  },
}));
