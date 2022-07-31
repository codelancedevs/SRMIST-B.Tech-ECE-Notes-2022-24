/**
 * Scroll To Top Button
 */

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

// MUI
import { Tooltip, IconButton, styled, Paper } from '@mui/material';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';

const ScrollToTop = ({ show, setShow }) => {

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShow(false);
    };

    return (
        <Container
            sx={{ display: show ? "block" : "none" }}
            elevation={3}
            onClick={handleTop}
        >
            <Tooltip title='Scroll back top' placement='left'>
                <IconButton>
                    <ArrowCircleUpSharpIcon />
                </IconButton>
            </Tooltip>
        </Container>
    )
}

const Container = styled(Paper)({
    position: 'fixed',
    bottom: 16,
    right: 80,
    zIndex: 2,
    borderRadius: '50%',
    backgroundColor: 'whitesmoke',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
    }
});

export default ScrollToTop;

ScrollToTop.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};