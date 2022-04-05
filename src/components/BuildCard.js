import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { characters } from "../data/constants";
import Character from "./Character";
import '../styles/custom.css'
import WeaponList from "./WeaponList";
import AccessoryList from "./AccessoryList";
import { useDispatch, useSelector } from "react-redux";
import { clearBuildCard, setAllowSecrets, setAllWeapons, setCharacter, setCombinationsOnly, setHideSecrets } from "../reducers";

const BuildCard = () => {
    const dispatch = useDispatch();
    const isSecretsAllowed = useSelector((state) => state.app.settings.secrets);
    const isCombinationsOnly = useSelector((state) => state.app.settings.combinationsOnly);

    const setCurrentCharacter = (character) => {
        dispatch(setCharacter(character));
    }

    const handleClear = () => {
        dispatch(clearBuildCard())
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

    const secretsChange = (e) => {
        e.target.checked ? dispatch(setAllowSecrets()) : dispatch(setHideSecrets());
        console.log(e.target.checked);
    };

    const combinationsChange = (e) => {
        e.target.checked ? dispatch(setCombinationsOnly()) : dispatch(setAllWeapons());
        console.log(e.target.checked);
    };

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
            <Row className='m-5'>
                <Col className="text-center">
                    <Form.Check inline type='checkbox' label='Allow Secret Characters' checked={isSecretsAllowed} onChange={secretsChange}/>
                    <Form.Check inline type='checkbox' label='Combinations Only' checked={isCombinationsOnly} onChange={combinationsChange}/>
                </Col>
            </Row>
        </Container>
    );
}

export default BuildCard;