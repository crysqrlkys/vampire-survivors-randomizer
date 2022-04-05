import { Row } from "react-bootstrap";
import { evolutions, unions, weapons } from "../data/constants";
import Item from "./Item";

const WeaponList = () => {
    const items = [...weapons, ...evolutions, ...unions] 
    const weaponComponents = [...Array(6)].map((_, i) => (
            <Item key={i} itemId={`w-${i}`} itemsListName={'weapon'} items={items} />
        )
    );
    return (
        <Row className='m-0 mb-5 g-0 justify-content-center'>
            {weaponComponents}
        </Row>
    );
}

export default WeaponList;