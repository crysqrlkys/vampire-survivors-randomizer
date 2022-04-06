import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Character from "./Character";
import '../styles/custom.css'
import WeaponList from "./WeaponList";
import AccessoryList from "./AccessoryList";
import { useDispatch, useSelector } from "react-redux";
import { clearBuildCard, setAllowSecrets, setAllWeapons, setCharacter, setCombinationsOnly, setCurrentAccessories, setCurrentWeapons, setHideSecrets } from "../reducers";
import { generateRandomId, generateObject, getObjLength } from "../utils";

const BuildCard = () => {
    const dispatch = useDispatch();
    const isSecretsAllowed = useSelector((state) => state.app.settings.secrets);
    const isCombinationsOnly = useSelector((state) => state.app.settings.combinationsOnly);

    const currentCharacter = useSelector((state) => state.app.currentCharacter);
    const currentWeapons = useSelector((state) => state.app.currentWeapons);
    const currentAccessories = useSelector((state) => state.app.currentAccessories);

    const characters = useSelector((state) => state.app.characterPool);
    const weapons = useSelector((state) => state.app.weaponPool);
    const accessories = useSelector((state) => state.app.accessoryPool);

    const setNewBuild = (newCharacter, newWeapons, newAccessories) => {
        dispatch(setCharacter(newCharacter));
        dispatch(setCurrentWeapons(newWeapons));
        dispatch(setCurrentAccessories(newAccessories));
    };

    const handleClear = () => {
        dispatch(clearBuildCard())
        sessionStorage.clear();
    };

    const getIds = (objList, length) => {
        return Object.values(objList).map(el => el.id);
    };

    const handleRandomize = () => {
        const charactersLength = getObjLength(characters);

        const weaponsLength = getObjLength(weapons);
        const weaponCurrentIds = getIds(currentWeapons);

        const accessoriesLength = getObjLength(accessories);
        const accessoriesCurrentIds = getIds(currentAccessories);

        const newCharacterId = generateRandomId(currentCharacter.id, 1, charactersLength, 'c');
        const newWeapons = generateObject(weaponCurrentIds, weapons, 1, weaponsLength, 'w');
        const newAccessories = generateObject(accessoriesCurrentIds, accessories, 2, accessoriesLength, 'a');

        setNewBuild(characters[newCharacterId], newWeapons, newAccessories);
    }

    const secretsChange = (e) => {
        e.target.checked ? dispatch(setAllowSecrets()) : dispatch(setHideSecrets());
    };

    const combinationsChange = (e) => {
        e.target.checked ? dispatch(setCombinationsOnly()) : dispatch(setAllWeapons());
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
            <Row className="mx-5">
                <Col className="offset-lg-2">
                    <Form.Check inline type='checkbox' label='Combinations Only' checked={isCombinationsOnly} onChange={combinationsChange}/>
                    <Form.Check type='checkbox' label='Allow Secret Characters' checked={isSecretsAllowed} onChange={secretsChange}/>
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