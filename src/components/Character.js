import { Image, Modal, Container, Row, Col } from "react-bootstrap";
import React, {useState} from "react";
import '../styles/images.css';
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../reducers";

const Character = () => {    
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const currentCharacter = useSelector((state)=> state.app.currentCharacter);
    const characters = useSelector((state) => state.app.characterPool)
    
    const numberOfCharacters = characters.length;
    const cols = [...Array(numberOfCharacters).keys()].filter(elem => elem % 4 === 0);

    const handleSelect = (character) => {
        dispatch(setCharacter(character));
        handleClose();
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const populateRow = (start) => {
            const charactersInRow = [...characters];
            return charactersInRow.splice(start, 4).map((character, i) => (
                <Col md={3} key={i}>
                    <Image className="character-image" onClick={() => handleSelect(character)} src={`${character.url}`} />
                </Col>
            )
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <Image src={currentCharacter.url} onClick={handleShow} className="current-character-image" alt="character"/>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Character</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {   
                            cols.map((start, i) =>
                                <Row xs='auto' key={i} >
                                    {populateRow(start)}
                                </Row>
                            )
                        }
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Character;