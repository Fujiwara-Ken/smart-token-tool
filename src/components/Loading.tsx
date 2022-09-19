import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

type LoadingProps = {
  isLoading: boolean;
};

// const style = {
//   box: {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 70,
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 1,
//   },
// };

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return isLoading ? (
    <Backdrop open={isLoading}>
      <CircularProgress color="info" />
    </Backdrop>
  ) : null;
};
export default Loading;
