import { Row } from "react-bootstrap";
import { accessories } from "../data/constants";
import Item from "./Item";

const AccessoryList = () => {
    const items = [...accessories];
    const accessoryComponents = [...Array(6)].map((_, i) => (
            <Item key={i} itemId={`a-${i}`} itemsListName={'accessory'} items={items} />
        )
    );
    return (
        <Row className='m-0 mb-5 g-0 justify-content-center'>
            {accessoryComponents}
        </Row>
    );
}

export default AccessoryList;