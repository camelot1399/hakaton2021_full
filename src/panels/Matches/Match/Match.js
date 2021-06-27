import React, {Component} from 'react'
import {SizeType, Tabs, TabsItem} from "@vkontakte/vkui";
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";

import './Match.css'

export default class News extends Component {
  render() {
    return (
      <>
        <div className={"match-box-scoreboard"}>
          <div>
            <img
              src="https://uploads.turbologo.com/uploads/design/preview_image/4859003/preview_image20210602-26376-1fu9ofb.png"
              width={"100px"} height={"100px"} alt="Logo Team"/>
            <p className={"match-team-name"}>
              Team 1
            </p>
          </div>
          <div>
            <span className={"match-score"}><p>2</p><p> : </p><p>3</p></span>
            <p>26 июня</p>
            <p>30:00:54</p>
          </div>
          <div><
            img
            src="https://uploads.turbologo.com/uploads/design/preview_image/4859003/preview_image20210602-26376-1fu9ofb.png"
            width={"100px"} height={"100px"} alt="Logo Team"/>
            <p className={"match-team-name"}>
              Team 2
            </p>
          </div>
        </div>
        <div>
          <Tabs sizeX = {SizeType.REGULAR}>
            <TabsItem
            >
              Трансляция
            </TabsItem>

            <TabsItem
            >
              Составы
            </TabsItem>
            <TabsItem
            >
              События
            </TabsItem>
          </Tabs>
        </div>
        <div>
          <iframe
            src="https://player.twitch.tv/esl_csgo"
            height="160"
            width="320"
          >
          </iframe>
          <div className={"match-box-pagination"}>
            <span className={"match-box-pagination"}><Icon20CommentOutline/> <p>65</p></span>
            <span className={"match-box-pagination"}><Icon20ShareOutline/> <p>4</p></span>
            <span className={"match-box-pagination"}><Icon20ViewOutline/> <p>7.2к</p></span>
          </div>
        </div>
      </>
    )
  }
}
