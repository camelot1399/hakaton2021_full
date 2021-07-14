import {Icon56MoneyTransferOutline} from '@vkontakte/icons';
import {ModalCard, ModalRoot} from '@vkontakte/vkui';
import React from 'react';
import {useSelector} from 'react-redux';
import {getTournaments} from '../../store';

export const Modal = (props) => {
  const {activeModal, setActiveModal, Match} = props

  const {tournaments} = useSelector(getTournaments())


  return <><ModalRoot
      activeModal={activeModal}
  >
    {tournaments.matches?.map((value, index)=>{
      console.log(index)
    })}
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
