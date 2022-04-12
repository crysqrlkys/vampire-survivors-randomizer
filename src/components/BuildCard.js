import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Character from "./Character";
import '../styles/custom.css'
import WeaponList from "./WeaponList";
import AccessoryList from "./AccessoryList";
import { useDispatch, useSelector } from "react-redux";
import { clearBuildCard, setAllowSecrets, setAllWeapons, setCharacter, setCombinationsOnly, setCurrentAccessories, setCurrentWeapons, setHideSecrets } from "../reducers";
import { generateRandomId, generateObject, createObj, getObjLength, getIds, getObjValues } from "../utils/utils";
import { evolutions } from "../data/constants";

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

    const setNewBuild = (newWeapons, newAccessories) => {
        dispatch(setCurrentWeapons(newWeapons));
        dispatch(setCurrentAccessories(newAccessories));
    };

    const handleClear = () => {
        // clear selections
        dispatch(clearBuildCard())
        sessionStorage.clear();
    };

    const handleRandomize = () => {
        // validation
        // no duplicates
        // push related item id to added
        // no normal + evolution
        // can't select first/second weapon -> drop selected character

        // combinations only
        // auto evolve (?)

        const charactersLength = getObjLength(characters);
        const newCharacterId = generateRandomId(currentCharacter.id, 1, charactersLength, 'c');
        const newCharacter = characters[newCharacterId];

        dispatch(setCharacter(newCharacter));

        const weaponsLength = getObjLength(weapons);
        let weaponCurrentIds = getIds(currentWeapons);

        if (isCombinationsOnly) {
            // map to evo
            weaponCurrentIds[0] =  evolutions[1].id; //newCharacter.weapon.id;
            // for guns reduce length to 1
        }
        const newWeapons = generateObject(weaponCurrentIds.sort(), weapons, 1, weaponsLength, 'w', newCharacter.weapon.length);
        console.log(newWeapons)
        const accessoriesLength = getObjLength(accessories);
        let newAccessories = {}
        if (isCombinationsOnly) {
            const a = getObjValues(newWeapons);
            const accessoryIds = a.map(el => el.accessory.id);
            newAccessories = createObj(accessoryIds, accessories, 2, accessoriesLength, 'a');
        } else {
            const accessoryCurrentIds = getIds(currentAccessories);
            newAccessories = generateObject(accessoryCurrentIds, accessories, 2, accessoriesLength, 'a');
        }

        setNewBuild(newWeapons, newAccessories);
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