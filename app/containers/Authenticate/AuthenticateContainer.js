import React, { Component } from 'react';
import { Authenticate } from 'components';
import auth from 'helpers/auth';

class AuthenticateContainer extends Component {
    handleAuth () {
        auth().then(() => {
        });
    }
    render () {
        return (
            <div>
                <Authenticate
                    isFetching={false}
                    error=''
                    onAuth={this.handleAuth}/>
            </div>
        );
    }
}

export default AuthenticateContainer;
