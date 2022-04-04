import { Row } from "react-bootstrap";
import Item from "./Item";

const WeaponList = () => {
    const weapons = [...Array(6)].map((_, i) => (
            <Item key={i} itemsListName={'weapon'} currentItem={{}}/>
        )
    );
    return (
        <Row className='m-0 mb-5 g-0 justify-content-center'>
            {weapons}
        </Row>
    );
}

export default WeaponList;