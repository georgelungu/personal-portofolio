import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImage from '../assets/img/header-img.svg'

import 'animate.css';

import TrackVisibility from "react-on-screen"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["MERN Developer", "Web Developer", "Junior Front-End Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting)
        {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true)
            setDelta(period)
        }
        else if (isDeleting && updatedText === '')
        {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(300);
        }
    }

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <span className="tagline">Welcome to my Portofolio</span>
                                <h1>{`Hi I'm George `}<span className="wrap">{text}</span></h1>
                                <p>Here I will insert a little paragraph with maximum 3 short sentences about me.</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
