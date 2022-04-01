import { Col, Container, Row } from "react-bootstrap";
import MenuItem from "./MenuItem";
import { menuItems } from "../data/constants";
import BuildCard from "./BuildCard";

const MenuList = () => {
    const menuItemsComponents = menuItems.map((item) => <MenuItem itemTitle={item} />)
    return (
        <Container className="align-middle">
            <Row>
                <Col>{menuItemsComponents}</Col>
                <Col>
                    <Container>
                        <BuildCard/>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuList;