import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMuiButton = styled(Button)`
& {
}
`
const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function StartPage() {
    return (
      <div id={'index-container'}>
        <div className={'spacer'} />
            <div className={'content'}>
                <h1>Enter User Details</h1>
                    <StyledFormContainer noValidate autoComplete="off">
                        <TextField label="Username" variant="outlined">Username</TextField>
                        <Link to="/another">
                        <StyledMuiButton variant="contained" color="primary">Submit</StyledMuiButton>          
                        </Link>
                    </StyledFormContainer>
            </div>
        <div className={'spacer'} />
      </div>
    );
  }

export default StartPage
