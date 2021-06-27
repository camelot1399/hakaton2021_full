import React from "react"
import {Search} from '@vkontakte/vkui';
import {Icon28ClipOutline, Icon28LiveOutline, Icon56GalleryOutline} from '@vkontakte/icons';

export const NewComponentSearch = () => {
  return (
      <>
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
      </>
  )
}















