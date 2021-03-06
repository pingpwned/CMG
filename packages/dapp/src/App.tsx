import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { State, actionCreators } from '@state';
import Game from '@game/main';
import { connectWallet } from '@web3/connectWallet';

import {
  Layout,
  Modal,
  ModalBox,
  ModalTitle,
  ModalDesc,
  CloseButton,
  Leaderboard,
} from '@components';

function App() {
  const dispatch = useDispatch();
  const { toggleModal } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.connection);

  useEffect(() => {
    connectWallet();
  }, []);

  // const destroy = () => {
  //     if (gameRef.current) {
  //         gameRef.current.destroy();
  //     }
  // };
  // state.userAddress === '0x0' && destroy();

  return (
    <>
      <Layout>
        {state.openProviderModal && (
          <Modal>
            <ModalBox
              initial={{ y: '-300px', z: '-300px', opacity: 0 }}
              animate={{ y: 0, z: 0, opacity: 1 }}
            >
              <CloseButton onClick={() => toggleModal()} />
              <ModalTitle>No provider detected 😱</ModalTitle>
              <ModalDesc>
                Seems like you have no Metamask installed. Please, refer to guide how to install
                Metamask and create a wallet. You also have to add some funds to pay network fee.
              </ModalDesc>
            </ModalBox>
          </Modal>
        )}
        <div>
          <h3>Crypto Mario Game! Welcome!</h3>
          <p>
            Connect your metamask wallet to start playing. Game is deployed on{' '}
            <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain">
              BSC Test network
            </a>
            .
          </p>
        </div>
      </Layout>

      <Game
        leaderboard={
          <Leaderboard>
            <strong>Top scores</strong>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {state.players?.map((player: any) => {
                  const { id } = player;
                  return (
                    <tr key={id}>
                      <td>
                        <div>{player.name}: </div>
                      </td>
                      <td>{player.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Leaderboard>
        }
      />
    </>
  );
}

export default App;
