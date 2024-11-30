import navbar from "../../utils/navbar.jsx";

import {
  Logo,
  NavItem,
  Section,
  Wrapper,
  NavWrapper,
  Dropdown,
  DropdownItem,
  IconImg,
} from "./style.js";

import Title from "../Generics/Title/index.jsx";

import Home from "../Home/index.jsx";
import Button from "../Generics/Button/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  return (
    <Wrapper
      onMouseMove={(e) => {
        setPosX(e.clientX);
        setPosY(e.clientY);
      }}
      posx={posX}
      posy={posY}
    >
      <div className="autline-cursor"></div>
      <NavWrapper>
        <Section>
          <Logo onClick={() => navigate("/home")}>Panda</Logo>
          {navbar.map(({ title, path, child }, i) => {
            return (
              <NavItem
                to={!child && path}
                active={location.pathname == path ? 1 : 0}
                key={i}
                smooth={"true"}
                duration={500}
              >
                <Title size={14} weight={600}>
                  {title}
                </Title>

                {child && (
                  <Dropdown className="dropdown">
                    {child?.map((v, i) => (
                      <DropdownItem
                        to={v.path}
                        key={i}
                        smooth={"true"}
                        active={location.pathname == v.path ? 1 : 0}
                      >
                        <Title size={14} weight={600}>
                          {v.title}
                        </Title>
                      </DropdownItem>
                    ))}
                  </Dropdown>
                )}
              </NavItem>
            );
          })}
        </Section>
        <Section>
          <Title size={18} weight={800}>
            +998 99 469 88 91
          </Title>
          <Button
            onClick={() => navigate("/contacts")}
            padding={"9px 40px"}
            bgcolor="#ff2e57"
          >
            <Title size={14} weight={600}>
              Let's Talk
            </Title>
          </Button>
        </Section>{" "}
      </NavWrapper>

      <Home />
    </Wrapper>
  );
};
export default Navbar;
