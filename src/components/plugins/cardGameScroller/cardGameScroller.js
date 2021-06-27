import React from "react";
import {CardScroll, Card} from "@vkontakte/vkui";
import {CardGame} from './cardGame/cardGame';

export const CardGameScroller = () => {
  return (
      <CardScroll size="s">
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
      </CardScroll>
  )
}
