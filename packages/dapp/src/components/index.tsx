import styled from 'styled-components';
import { motion } from 'framer-motion';

const Layout = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  z-index: 10000;
  background-color: #000000d4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBox = styled(motion.div)`
  background-color: #ffffff;
  width: 45%;
  min-height: 20vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
`;
const ModalTitle = styled.h2``;
const ModalDesc = styled.p``;
const CloseButton = styled.span`
  cursor: pointer;

  position: absolute;
  top: 15px;
  right: 15px;

  width: 20px;
  height: 20px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #929292;

    transition: all 0.2s ease-in-out;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    &:before,
    &:after {
      background-color: #000;
    }
  }
`;
const GameMountPoint = styled.div`
  position: relative;
`;
const Leaderboard = styled.div`
  position: absolute;
  right: 5px;
`;

export { Layout, Modal, ModalBox, ModalTitle, ModalDesc, CloseButton, Leaderboard, GameMountPoint };
