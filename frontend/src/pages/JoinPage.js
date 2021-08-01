import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled(Button)`
& {
}

`

const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

function JoinPage() {
  document.body.style='background: #ffffff;'

    return (
      <div className={'enter-detail-page'}>
        <div className={'spacer'} />
        <div className={'content'}>
          <h1>Enter Lobby Details</h1>
            <StyledFormContainer>
            <div>
                <TextField label="Username" variant="outlined">Username</TextField>
                <TextField label="Lobby Code" variant="outlined">Lobby Code</TextField>
            </div>
                <Link to="/another">
                    <Button variant="contained" color="primary" disableElevation id="page-box">Submit</Button>
                </Link>
            </StyledFormContainer>
        </div>
        <div className={'spacer'} />
      </div>
    );
  }

export default JoinPage