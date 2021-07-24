import {ModalCard, ModalRoot} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import {getTournaments} from '../../store';
import {Match} from '../matches';

export const __newsModal = (props) => {
  const {activeModal, setActiveModal} = props

  const {tournaments} = useSelector(getTournaments())

  return <ModalRoot activeModal={activeModal}>
    {tournaments[0]?.matches.map((matches, index) => {
      if (index < 6) {
        return <ModalCard
            id={`game${index}`}
            key={index}
            onClose={() => setActiveModal(null)}>
          <Match/>
        </ModalCard>
      }
    })}
  </ModalRoot>
}

__newsModal.propTypes = {
  setActiveModal:PropTypes.string,
  activeModal:PropTypes.func
}
