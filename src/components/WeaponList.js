import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./Item";

const WeaponList = () => {
    const weapons = useSelector((state) => state.app.weaponPool);
    const weaponComponents = [...Array(6)].map((_, i) => (
            <Item key={i} itemId={`w-${i}`} itemsListName={'weapon'} items={weapons} />
        )
    );
    return (
        <Row className='m-0 mb-5 g-0 justify-content-center'>
            {weaponComponents}
        </Row>
    );
}

export default WeaponList;