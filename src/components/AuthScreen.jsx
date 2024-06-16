import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AuthScreen = () => {
    return (
        <div>
            <Authenticator>
                {({ signOut, user }) => (
                    <>
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                        Dashboard
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                                            {user.username}
                                        </Typography>
                                        <IconButton color="inherit" onClick={signOut} sx={{ marginLeft: 2 }}>
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                            <Box sx={{ padding: 2 }}>
                                <Typography variant="h4">Welcome to your dashboard, {user.name}!</Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Authenticator>
        </div>
    );
};

export default AuthScreen;



