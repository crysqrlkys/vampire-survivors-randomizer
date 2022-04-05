import { Container, Row, Col, Button } from "react-bootstrap";
import { characters } from "../data/constants";
import Character from "./Character";
import '../styles/custom.css'
import WeaponList from "./WeaponList";
import AccessoryList from "./AccessoryList";
import { useDispatch } from "react-redux";
import { setCharacter } from "../reducers";

const BuildCard = () => {
    const dispatch = useDispatch();

    const setCurrentCharacter = (character) => {
        dispatch(setCharacter(character));
    }

    const handleClear = () => {
        setCurrentCharacter(characters[0]);
        sessionStorage.clear();
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleRandomize = () => {
        // TODO: prevent from getting the same number and exclude defaults
        const characterNumber = generateRandomNumber(1, characters.length);
        setCurrentCharacter(characters[characterNumber]);
    }

    return (
        <Container className="bc-container">
            <Row className="m-5">
                <Col className="justify-content-center">
                    <Character/>
                </Col>
                <Col className="p-0 justify-content-center">
                    <WeaponList />
                    <AccessoryList />
                </Col>
            </Row>
            <Row className='m-5'>
                <Col className='text-center'>
                    <Button variant="vs" size='lg' onClick={handleRandomize}>Randomize</Button>
                </Col>
                <Col className='text-center'>
                    <Button variant="vs" size='lg' onClick={handleClear}>Clear</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BuildCard;