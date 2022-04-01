import { Image, Modal, Container, Row, Col} from "react-bootstrap";
import React, {useState} from "react";
import '../styles/images.css';
import { characters } from "../data/constants";

const Character = () => {    
    const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
    const [show, setShow] = useState(false);
    
    const numberOfCharacters = characters.length;
    const cols = [...Array(numberOfCharacters).keys()].filter(elem => elem % 4 === 0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setCharacter = (character) => {
        setCurrentCharacter(character);
        setShow(false);
    } 

    const populateRow = (start) => {
            const charactersInRow = [...characters];
            console.log(charactersInRow);
            return charactersInRow.splice(start, 4).map((character, i) => (
                <Col md={3} key={i}>
                    <Image className="character-image" onClick={() => setCharacter(character)} src={`${character['url']}`} />
                </Col>
            )
        );
    }

    return (
        <div>
            <Image src={currentCharacter['url']} onClick={handleShow} className="current-character-image" alt="character"/>
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