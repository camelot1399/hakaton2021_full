import React from "react"
import {Div, Card, CardScroll, Cell, Panel, PanelHeader, Search, Badge, ContentCard, Group, CardGrid} from "@vkontakte/vkui";
import { Icon56GalleryOutline } from '@vkontakte/icons';
import { Icon28ClipOutline } from '@vkontakte/icons';
import { Icon28LiveOutline } from '@vkontakte/icons';
import { Icon16LikeOutline } from '@vkontakte/icons';
import { Icon24MessageOutline } from '@vkontakte/icons';
import { Icon16Repost } from '@vkontakte/icons';
import { Icon16ViewOutline } from '@vkontakte/icons';
import {CardGameScroller} from '../../components/plugins/cardGameScroller/cardGameScroller';

import classname from './News.css'

class PanelNews extends React.Component {
  render() {

    return (
      <>
        <CardGameScroller/>

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

        
        <div className="wrap">
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
            <ContentCard style={{ marginBottom: '10px'}}
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
            <ContentCard style={{ marginBottom: '10px'}}
              image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              text="NaVi заканчивают свой путь на квалификациях к The International"
              maxHeight={165}
              maxWidht={125}
            />
          </CardScroll>

          <div className="lastNews">
            <div className="lastNews__time">1 час назад</div>
            <div className="lastNews__imgBlock">
              <a href="#" className="lastNews__a">
                <img 
                  className="lastNews__img"
                  src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"></img>
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

          <Group>
            <CardGrid size="l">
              <ContentCard
                subtitle="VKUI"
                header="ContentCard example"
                caption="VKUI Styleguide > Blocks > ContentCard"
              />
              <ContentCard
                image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                subtitle="unsplash"
                header="NaVi заканчивают свой путь на квалификациях к The International"
                text="NaVi заканчивают свой путь на квалификациях к The International"
                caption="NaVi заканчивают свой путь на квалификациях к The International"
                maxHeight={150}
              />
              <ContentCard
                image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                subtitle="unsplash"
                header="NaVi заканчивают свой путь на квалификациях к The International"
                text="NaVi заканчивают свой путь на квалификациях к The International"
                caption="NaVi заканчивают свой путь на квалификациях к The International"
                maxHeight={150}
              />
              <ContentCard
                image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                subtitle="unsplash"
                header="NaVi заканчивают свой путь на квалификациях к The International"
                text="NaVi заканчивают свой путь на квалификациях к The International"
                caption="NaVi заканчивают свой путь на квалификациях к The International"
                maxHeight={150}
              />
              <ContentCard
                image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                subtitle="unsplash"
                header="NaVi заканчивают свой путь на квалификациях к The International"
                text="NaVi заканчивают свой путь на квалификациях к The International"
                caption="NaVi заканчивают свой путь на квалификациях к The International"
                maxHeight={150}
              />
            </CardGrid>
          </Group>
        </div>
        
      </>

      


    )
  }
}

export default PanelNews
