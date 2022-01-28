import {FC} from 'react';
import {makeStyles} from '@mui/styles';
import {Box} from '@mui/system';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  box: {
    backgroundImage: 'linear-gradient(90deg, rgba(251, 213, 251, 1), rgba(149, 233, 243, 1))',
    borderRadius: '8px',
    padding: '5px',
    marginBottom: '1em',
    boxShadow: '0px 0px 5px 2px #cccccc',
  },
});

const AddressTypography: FC<{address: string}> = ({address}) => {
  const styles = useStyles();
  return (
    <Box component="div" className={styles.box}>
      <Typography
        component='div'
        fontSize='16px'
        color='#555555'
      > Your address:
      </Typography>
      <Typography
        component='div'
        fontSize='16px'
      >{address}
      </Typography>
    </Box>
  );
}

export default AddressTypography;
