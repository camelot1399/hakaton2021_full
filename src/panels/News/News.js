import React from "react"
import {Div, Card, CardScroll, Cell, Panel, PanelHeader, Search, Badge, ContentCard} from "@vkontakte/vkui";
import { Icon56GalleryOutline } from '@vkontakte/icons';
import { Icon28ClipOutline } from '@vkontakte/icons';
import { Icon28LiveOutline } from '@vkontakte/icons';

import classname from './News.css'

class PanelNews extends React.Component {
  render() {

    return (
      <>
        <CardScroll size="s" style={{marginBottom: '10px'}}>
          <Card>
            <div className="game">
              <span>cs:go</span>
              <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
            </div>
          </Card>
          <Card>
            <div className="game">
              <span>cs:go</span>
              <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
            </div>
          </Card>
          <Card>
            <div className="game">
              <span>cs:go</span>
              <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
            </div>
          </Card>
          <Card>
            <div className="game">
              <span>cs:go</span>
              <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
            </div>
          </Card>
          <Card>
            <div className="game">
              <span>cs:go</span>
              <img
                src="https://www.digiseller.ru/preview/488198/p1_2697660_c9964c10.jpg"
                alt=""
                width="50"/>
            </div>
          </Card>
        </CardScroll>

        <div style={{display: "flex", alignItems: 'center', marginBottom: '10px'}}>
        <Search placeholder='Поиск по новостям' />
          <div style={{display: "flex"}} >
            <a href="#">
              <Icon56GalleryOutline fill='var(--accent)' width={26} height={26} style={{marginRight: '10px'}} />
            </a>
            <a href="#">
              <Icon28ClipOutline fill='var(--accent)' style={{marginRight: '10px'}} />
            </a>
            <a href="#">
              <Icon28LiveOutline style={{color: 'var(--accent)'}} />
            </a>

          </div>
        </div>

        <CardScroll size="s" >
          <ContentCard style={{marginRight: '10px', marginBottom: '10px'}}
            image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            text="NaVi заканчивают свой путь на квалификациях к The International"
            maxHeight={165}
            maxWidht={125}
          />

          <ContentCard style={{marginRight: '10px', marginBottom: '10px'}}
            image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            text="NaVi заканчивают свой путь на квалификациях к The International"
            maxHeight={165}
            maxWidht={125}
          />
          <ContentCard style={{ marginBottom: '10px'}}
            image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            text="NaVi заканчивают свой путь на квалификациях к The International"
            maxHeight={165}
            maxWidht={125}
          />
        </CardScroll>
      </>
    )
  }
}

export default PanelNews
