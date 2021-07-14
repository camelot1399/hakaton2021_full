import {CardScroll} from "@vkontakte/vkui";
import React from "react";
import {useSelector} from 'react-redux';
import {getGameCard} from '../../../store';
import {CardGame} from './cardGame';


export const CardGameScroller = () => {
  const { gameCard } = useSelector(getGameCard())

  return (
      <CardScroll size="s">
        {gameCard.map((game, index) => <CardGame key = {index} gameName ={game.name} imgProp = {game.img}/>)}
      </CardScroll>
  )
}
