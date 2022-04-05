import { Container, Row, Col, Button } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import { characters } from "../data/constants";
import Character from "./Character";
import '../styles/custom.css'
import WeaponList from "./WeaponList";
import AccessoryList from "./AccessoryList";

const BuildCard = () => {
    const [currentCharacter, setCurrentCharacter] = useLocalStorage("currentCharacter", characters[0]);
    
    const setCharacter = (character) => {
        localStorage.setItem("currentCharacter", JSON.stringify(character));
        setCurrentCharacter(character);
    }

    const handleClear = () => {
        setCharacter(characters[0]);
        localStorage.clear();
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleRandomize = () => {
        const characterNumber = generateRandomNumber(1, characters.length);
        setCharacter(characters[characterNumber]);
    }

    return (
        <Container className="bc-container">
            <Row className="m-5">
                <Col className="justify-content-center">
                    <Character currentCharacter={currentCharacter} setCharacter={setCharacter}/>
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