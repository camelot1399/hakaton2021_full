import React from "react"
import {Card} from '@vkontakte/vkui';

export const CardGame = () => {

  return (
        <Card style={{ width: '150px' }}>
          <div className="game">
            <span>cs:go</span>
            <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
          </div>
        </Card>
  )
}