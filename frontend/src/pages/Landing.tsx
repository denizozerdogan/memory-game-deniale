//despues de la animación pedir name y avatar, button start
import {PrimaryButton} from "../components/buttons/PrimaryButton"
import { Container, Row, Col} from "react-bootstrap"
import { UserForm } from "../components/UserForm";
import { Link } from "react-router-dom";

export const Landing= () => {
  return (
    <Container>
      <Row style={{ margin: "10rem auto" }}>
        <Col
          xs={12}
          md={6}
          className="mb-5 mb-md-0 d-flex flex-column align-items-center justify-content-center"
        >
          <div data-testid="form">
            <UserForm />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Link to="/game">
            <PrimaryButton>Go to Game</PrimaryButton>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};


