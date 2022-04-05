import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./Item";

const AccessoryList = () => {
    const accessories = useSelector((state) => state.app.accessoryPool);
    const accessoryComponents = [...Array(6)].map((_, i) => (
            <Item key={i} itemId={`a-${i}`} itemsListName={'accessory'} items={accessories} />
        )
    );
    return (
        <Row className='m-0 mb-5 g-0 justify-content-center'>
            {accessoryComponents}
        </Row>
    );
}

export default AccessoryList;