import { Container, Row, Col } from "react-bootstrap";
import Character from "./Character";

const BuildCard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Character/>
                </Col>
                <Col>
                    <Row>
                        Weapons    
                    </Row>
                    <Row>
                        Accessories
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default BuildCard;