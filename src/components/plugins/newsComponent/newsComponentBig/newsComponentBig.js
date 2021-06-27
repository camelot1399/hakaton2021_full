import {Icon16LikeOutline, Icon16Repost, Icon16ViewOutline, Icon24MessageOutline} from '@vkontakte/icons';
import React from 'react';

export const NewComponentsBig = () => {
  return (
      <div className="lastNews">
        <div className="lastNews__time">1 час назад</div>
        <div className="lastNews__imgBlock">
          <a href="#" className="lastNews__a">
            <img
                className="lastNews__img"
                src="https://realnoevremya.ru/uploads/news/96/f3/e7c47cea7538245d.jpg"></img>
            <div className="lastNews__text">
              NaVi заканчивают свой путь на квалификациях к The International
            </div>
            <div className="lastNews__totalBoard">
              <div className="lastNews__leftBoard">
                <div className="line lastNews__like">
                  <Icon16LikeOutline /> <span>65</span>
                </div>
                <div className="line lastNews__message">
                  <Icon24MessageOutline />
                  <span>65</span>
                </div>
                <div className="line lastNews__repost">
                  <Icon16Repost />
                  <span>4</span>
                </div>
              </div>
              <div className="line lastNews__views">
                <Icon16ViewOutline />
                <span>7,2k</span>
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}