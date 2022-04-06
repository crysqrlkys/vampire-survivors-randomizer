import { useState } from "react";
import { Col, Row, Container, Form, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAccessory, setWeapon } from "../reducers";

const Item = ({itemId, itemsListName, items}) => {
    const [show, setShow] = useState(false);
    const [q, setQ] = useState('');

    const isWeapon = itemId.startsWith('w');
    const currentItem = useSelector((state) => isWeapon ? state.app.currentWeapons[itemId] : state.app.currentAccessories[itemId]);
    const setCurrentItem = isWeapon ? setWeapon : setAccessory;

    const dispatch = useDispatch();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const setItem = (item) => {
        dispatch(setCurrentItem({'id': itemId, 'value': item}));
        handleClose();
    };
    
    const handleSearch = (event) => setQ(event.target.value);

    const body = items.map((item, i) => (
            <Col className='vs-item' key={i} xs={6} onClick={() => setItem(item)}>
                <Image className="list-item-image me-1" src={item.url}/> 
                {item.name}
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
                        <Row className="mb-3">
                            <Form.Control className='dark' type='text' onChange={handleSearch} placeholder={`Type to search ${itemsListName}`}/>
                        </Row>
                        <Row>
                            {body.filter((item) => !q || item.props.children[1].toLowerCase().includes(q.toLowerCase()))}
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </Col>
    );
}

export default Item;