import {Icon56MoneyTransferOutline} from '@vkontakte/icons';
import {ModalCard, ModalRoot} from '@vkontakte/vkui';
import React from 'react';

export const Modal = (props) => {
  const {activeModal, setActiveModal, Match} = props

  return <><ModalRoot
      activeModal={activeModal}
  >
    <ModalCard
        id={`game0`}
        onClose={() => setActiveModal(null)}
        icon={<Icon56MoneyTransferOutline/>}
        header={'Test'}
        subheader="0 : 0"
    />
    <ModalCard
        id={`game1`}
        onClose={() => setActiveModal(null)}>
      {Match}
    </ModalCard>
    <ModalCard
        id={`game2`}
        onClose={() => setActiveModal(null)}>
      {Match}
    </ModalCard>
    <ModalCard
        id={`game3`}
        onClose={() => setActiveModal(null)}>
      {Match}
    </ModalCard>
    <ModalCard
        id={`game4`}
        onClose={() => setActiveModal(null)}>
      {Match}
    </ModalCard>
    <ModalCard
        id={`game5`}
        onClose={() => setActiveModal(null)}>
      {Match}
    </ModalCard>
  </ModalRoot></>
}
