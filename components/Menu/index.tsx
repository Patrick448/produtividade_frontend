import Link from "next/link";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSave, FaSeedling } from "react-icons/fa";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import {BiTask} from "react-icons/bi"
import { Container, WrapperButton } from "./styles";

const Menu = () => {
  return (
    <Container>
      <WrapperButton>
        <Link href="/">
          <a>
            <AiOutlineUser style={{ fontSize: 25 }} />
            <span>Pessoas</span>
          </a>
        </Link>
        <Link href="/teams">
          <a>
            <AiOutlineTeam style={{ fontSize: 25 }} />
            <span>Times</span>
          </a>
        </Link>
        <Link href="/requests">
          <a>
            <BiTask style={{ fontSize: 25 }} />
            <span>Demandas</span>
          </a>
        </Link>
      </WrapperButton>
    </Container>
  );
};

export default Menu;
