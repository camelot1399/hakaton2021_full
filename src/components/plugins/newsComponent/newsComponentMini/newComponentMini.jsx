import {ContentCard} from '@vkontakte/vkui';
import React from "react"


export const NewComponentMini = () => {
  return (
      <>
        <ContentCard style={{marginRight: '10px', marginBottom: '10px'}}
                     image="https://realnoevremya.ru/uploads/news/96/f3/e7c47cea7538245d.jpg"
                     text="NaVi заканчивают свой путь на квалификациях к The International"
                     maxHeight={165}
                     maxWidht={125}
        />
      </>
  )
}
