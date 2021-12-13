import {
    Button,
    createTheme,
    Grid,
    Grow,
    IconButton,
    responsiveFontSizes, Slide,
    ThemeProvider,
    Typography, useMediaQuery
} from "@mui/material";
import styled from "@emotion/styled";

import ParticlesBg from "particles-bg";
import Countdown from "react-countdown";

import logo from './logo.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

import FlipCountdown from '@rumess/react-flip-countdown';
import {useEffect, useState} from "react";

let theme = createTheme({})
theme = responsiveFontSizes(theme);

const classes = {
    gridContainer: {
        height: '100vh',
        padding: 2,
        backgroundColor: '#f00'
    },
    logo: {
        height: '20vh',
        marginTop: 12,
        [theme.breakpoints.only('xs')]: {
            marginTop: 4,
            height: '16vh',
        },
    },
    startDate: {
        // fontSize: '2.5rem',
        marginTop: 1,
        color: 'black',
        fontWeight: 200,
        fontFamily: "'Times New Roman', sans-serif"
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
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontFamily: "'Times New Roman', sans-serif",
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.75rem'
        },
    },
    title2: {
        // fontSize: '5rem',
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 200,
        lineHeight: 1,
        fontFamily: "'Times New Roman', sans-serif",
        [theme.breakpoints.only('xs')]: {
            fontSize: '2rem'
        },
    },
    title3: {
        // fontSize: '6rem',
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 700,
        lineHeight: 1,
        fontFamily: "'Times New Roman', sans-serif",
        [theme.breakpoints.only('xs')]: {
            fontSize: '2.125rem'
        },
    },
    countdownContainer: {
        textAlign: 'center',
    },
    timeLeft: {
        fontSize: '2rem',
        color: 'black',
        fontWeight: 300,
        fontFamily: "'Times New Roman', sans-serif",
        [theme.breakpoints.down('md')]: {
            marginTop: 2,
            fontSize: '1.5rem'
        },
    },
    countdown: {
        fontSize: '2.5rem',
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 300,
        lineHeight: 1,
        fontFamily: "'Times New Roman', sans-serif"
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
    fontFamily: "'Times New Roman', sans-serif",
    fontWeight: 600,
    color: '#000',
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

    const [appear1, setAppear1] = useState(false);
    const [appear2, setAppear2] = useState(false);
    const [appear3, setAppear3] = useState(false);

    let decCache = [],
        decCases = [2, 0, 1, 1, 1, 2];

    function decOfNum(number, titles) {
        if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
        return titles[decCache[number]];
    }

    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAppear1(true);
        }, 100);
        setTimeout(() => {
            setAppear2(true);
        }, 1000);
        setTimeout(() => {
            setAppear3(true);
        }, 2000);
    }, [])

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
        setDaysLeft(days)
        setHoursLeft(hours)
        setMinutesLeft(minutes)
        setSecondsLeft(seconds)
        return null
    };

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ThemeProvider theme={theme}>
            <ParticlesBg type="circle" color="#e11" num={6} bg={true}/>
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
                        2 января 2022, 10:35
                    </Typography>
                </Grid>

                <Grid container direction='row' justifyContent='space-evenly' alignItems='center'
                      sx={classes.container}>
                    <Grow in={appear1} style={{transformOrigin: '0 440 0'}}
                          {...({timeout: 2000})}>
                        <Grid item sx={{textAlign: 'center'}}>
                            <Typography variant='h3' sx={classes.title1}>
                                Встреча года
                            </Typography>
                            <Typography variant='h1' sx={classes.title2}>
                                KICK OFF
                            </Typography>
                            <Typography variant='h2' sx={classes.title3}>
                                как говорят американцы
                            </Typography>
                        </Grid>
                    </Grow>

                    <Grow direction='left' in={appear2} {...({timeout: 2000})}>
                        <Grid item sx={classes.countdownContainer} alignItems='center'>
                            <Typography variant='h4' sx={classes.timeLeft}>
                                Старт трансляции через
                            </Typography>
                            <FlipCountdown
                                theme='light'
                                titlePosition='bottom'
                                hideYear
                                monthTitle='месяц'
                                dayTitle={decOfNum(daysLeft, ['день', 'дня', 'дней'])}
                                hourTitle={decOfNum(hoursLeft, ['час', 'часа', 'часов'])}
                                minuteTitle={decOfNum(minutesLeft, ['минута', 'минуты', 'минут'])}
                                secondTitle={decOfNum(secondsLeft, ['секунда', 'секунды', 'секунд'])}
                                size={isMobile ? 'small' : 'medium'}
                                endAtZero
                                endAt={new Date(2022, 0, 2, 10, 35, 0).toUTCString()}
                                style={{fontFamily: "'IBM Plex Sans', sans-serif", color: '#000'}}
                            />
                        </Grid>
                    </Grow>
                </Grid>
                <Grid item mt='auto' mb='auto'>
                    <Slide in={appear3} direction='up' {...({timeout: 2000})}>
                        <Grid container direction='row' alignItems='center' justifyContent='space-evenly'
                              style={{textAlign: 'center'}}>
                            <Grid item xs={12} md={6}>
                                <StreamButton
                                    onClick={() => {
                                        window.location.href = 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
                                    }}
                                >
                                    Случайная статья в вики
                                </StreamButton>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <StreamButton
                                    onClick={() => {
                                        window.location.href = 'https://vk.com/wall16218048?own=1&w=wall16218048_11300'
                                    }}
                                >
                                    Ржака
                                </StreamButton>
                            </Grid>
                        </Grid>
                    </Slide>
                </Grid>
            </Grid>
            <Countdown
                date={new Date(2022, 0, 2, 10, 35, 0)}
                renderer={countdownLabel}
                style={{display: 'none'}}
            />
        </ThemeProvider>
    );
}

export default App;
