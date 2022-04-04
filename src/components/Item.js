import { useState } from "react";
import { Col, Row, Container, Form, Image, Modal } from "react-bootstrap";
import { weapons } from "../data/constants";

const Item = ({itemsListName, currentItem}) => {
    const [show, setShow] = useState(false)
    const [q, setQ] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSearch = (event) => setQ(event.target.value);

    currentItem.url = `${process.env.PUBLIC_URL}/weapons/Whip.png`;
    currentItem.name = 'Whip';

    const body = weapons.map((weapon, i) => (
            <Col key={i} xs={6}>
                <Image className="list-item-image me-1" src={weapon.url}/> 
                {weapon.name}
            </Col>
        )
    );

    return (
        <Col className='p-0 m-0 flex-grow-0'>
            <Image className="item-image" src={currentItem.url} onClick={handleShow}/>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Select {itemsListName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Form.Control className='' type='text' onChange={handleSearch} placeholder={`Type to search ${itemsListName}`}/>
                        </Row>
                        <Row>
                            {body.filter((item) => !q || item.props.children[1].toLowerCase().startsWith(q.toLowerCase()))}
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </Col>
    );
}

export default Item;