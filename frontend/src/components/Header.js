import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);
  return (
    <Navbar collapseOnSelect className="mainMenu">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require("../covidLogo.png")}
            height="130"

            alt="Project logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <div class="subBox">
          <Nav className="menuBox">
            <NavDropdown title="코로나정보" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/covid-occur" className="subMenu">
                시도발생현황
              </NavDropdown.Item>
              <NavDropdown.Item href="/covid-gender" className="subMenu">
                연령별, 성별 발생현황
              </NavDropdown.Item>
              <NavDropdown.Item href="/covid-total" className="subMenu">
                감염 현황 총괄 통계
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
          <Nav className="menuBox">
            <Nav.Link href="/board">게시판</Nav.Link>
          </Nav>
          <Nav className="menuBox">
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    프로필
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    로그아웃
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">로그인</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
