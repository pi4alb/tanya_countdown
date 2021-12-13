import {
    Button,
    createTheme,
    Grid,
    Grow,
    IconButton,
    responsiveFontSizes,
    ThemeProvider,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";

import ParticlesBg from "particles-bg";
import Countdown from "react-countdown";

import logo from './logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

import FlipCountdown from '@rumess/react-flip-countdown';

let theme = createTheme({})
theme = responsiveFontSizes(theme);

const classes = {
    gridContainer: {
        height: '100vh',
        padding: 2,
        backgroundColor: 'rgba(53,128,118,.6)'
    },
    logo: {
        height: '16vh',
        marginTop: 12,
        [theme.breakpoints.only('xs')]: {
            marginTop: 4
        },
    },
    startDate: {
        // fontSize: '2.5rem',
        marginTop: 1,
        color: 'white',
        fontWeight: 200,
        fontFamily: "'IBM Plex Sans', sans-serif"
    },
    container: {
        marginTop: 4,
        marginBottom: 2,
        [theme.breakpoints.only('sm')]: {
            marginTop: 3,
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: 2,
            marginBottom: 1.5
        },
    },
    title1: {
        // fontSize: '3rem',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontFamily: "'IBM Plex Sans', sans-serif"
    },
    title2: {
        // fontSize: '5rem',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 200,
        lineHeight: 1,
        fontFamily: "'IBM Plex Sans', sans-serif"
    },
    title3: {
        // fontSize: '6rem',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 700,
        lineHeight: 1,
        fontFamily: "'IBM Plex Sans', sans-serif"
    },
    countdownContainer: {
        textAlign: 'center',
    },
    timeLeft: {
        fontSize: '2rem',
        color: 'white',
        fontWeight: 300,
        fontFamily: "'IBM Plex Sans', sans-serif",
        [theme.breakpoints.down('md')]: {
            marginTop: 2
        },
    },
    countdown: {
        fontSize: '2.5rem',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 300,
        lineHeight: 1,
        fontFamily: "'IBM Plex Sans', sans-serif"
    },
    snButton: {
        borderWidth: 2,
        borderColor: '#fff',
        borderStyle: 'solid',
        color: '#fff',
    }
}

const StreamButton = styled(Button)(({theme}) => ({
    borderRadius: 3,
    borderColor: '#fff',
    borderWidth: 3,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    whiteSpace: 'nowrap',
    textTransform: 'none',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    color: '#fff',
    [theme.breakpoints.only('xs')]: {
        fontSize: '1.125rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 6,
        marginTop: 6
    },
    [theme.breakpoints.only('sm')]: {
        fontSize: '1.375rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 12,
        marginTop: 12
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '1.75rem',
        marginRight: 32,
        marginLeft: 32,
        marginBottom: 0,
        marginTop: 0
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        marginRight: 48,
        marginLeft: 48,
        marginBottom: 0,
        marginTop: 0
    },
    boxShadow: "0px 0px 6px 0px rgba(255, 255, 255, 0.6)",
    '&:hover': {
        borderColor: '#fff',
        backgroundColor: 'rgba(161,201,199,0.73)',
        borderWidth: 4,
        boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.6)",
    },
}));

const App = () => {

    const getDaysPadej = (days) => {
        if (days === 0) return ''
        if (days >= 10 && days <= 19) return 'дней,'
        if (days % 10 === 0) return 'дней,'
        days = days % 10
        if (days === 1) return 'день,'
        if (days <= 4) return 'дня,'
        if (days <= 9) return 'дней'
    }

    const countdownLabel = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a complete state
            return 'Трансляция началась!\nThe broadcast is started!';
        } else {
            // Render a countdown
            return <Typography variant='h3' sx={classes.countdown}>
                {`${days === 0 ? '' : days} ${getDaysPadej(days)} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
            </Typography>
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <ParticlesBg type="circle" color="#83ded2" num={6} bg={true}/>
            <Grid
                container
                direction='column'
                component="main"
                sx={classes.gridContainer}
                alignItems='center'
            >
                <Grid item>
                    <img src={logo} alt='logo' style={classes.logo}/>
                </Grid>

                <Grid item>
                    <Typography variant='h4' sx={classes.startDate}>
                        16 января 2022, 11:00
                    </Typography>
                </Grid>

                <Grid container direction='row' justifyContent='space-evenly' alignItems='center' sx={classes.container}>
                    <Grow in={true} style={{ transformOrigin: '0 440 0' }}
                          {...({ timeout: 3500 })}>
                        <Grid item sx={{textAlign: 'center'}}>
                            <Typography variant='h3' sx={classes.title1}>
                                Запуск года
                            </Typography>
                            <Typography variant='h1' sx={classes.title2}>
                                KICK OFF
                            </Typography>
                            <Typography variant='h2' sx={classes.title3}>
                                2022
                            </Typography>
                        </Grid>
                    </Grow>

                    <Grid item sx={classes.countdownContainer} alignItems='center'>
                        <Typography variant='h4' sx={classes.timeLeft}>
                            Старт трансляции через
                        </Typography>
                        {/*<Countdown*/}
                        {/*    date={Date.UTC(2022, 0, 16, 11,)}*/}
                        {/*    renderer={countdownLabel}*/}
                        {/*/>*/}
                        <FlipCountdown
                            theme='light'
                            titlePosition='bottom'
                            hideYear
                            monthTitle='месяц'
                            dayTitle='дня'
                            hourTitle='часов'
                            minuteTitle='минуты'
                            secondTitle='секунд'
                            size='medium'
                            endAtZero
                            endAt={new Date(2022, 0,16,11).toUTCString()}
                            style={{fontFamily: "'IBM Plex Sans', sans-serif", color: '#000'}}
                        />
                    </Grid>
                </Grid>
                <Grid item mt='auto' mb='auto'>
                    <Grid container direction='row' alignItems='center' justifyContent='space-evenly'
                          style={{textAlign: 'center'}}>
                        <Grid item xs={12} md={6}>
                            <StreamButton>
                                Смотреть трансляцию
                            </StreamButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StreamButton>
                                English broadcast
                            </StreamButton>
                        </Grid>
                    </Grid>
                </Grid>
                <>
                    <Grid container direction='row' spacing={3} alignItems='center' justifyContent='space-evenly'>
                        <Grid item>
                            <IconButton sx={classes.snButton}>
                                <LanguageIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton sx={classes.snButton}>
                                <InstagramIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton sx={classes.snButton}>
                                <YouTubeIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton sx={classes.snButton}>
                                <FacebookIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
