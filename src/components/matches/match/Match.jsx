import React, {Component} from 'react'
import {SizeType, Tabs, TabsItem, Panel, PanelHeader} from "@vkontakte/vkui";
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";

import './Match.css'

export const Match = () => {
    return (
        <>
          <div className={"match-box-scoreboard wrap"}>
            <div className="match-box-item">
              <img
                src="https://uploads.turbologo.com/uploads/design/preview_image/4859003/preview_image20210602-26376-1fu9ofb.png"
                width={"100px"} height={"100px"} alt="Logo Team"/>
              <p className={"match-team-name"}>
                Team 1
              </p>
            </div>
            <div className="match-box-item">
            <span className={"match-score"}>
              <span>2</span><span> : </span><span>3</span>
            </span>
              <p>26 июня</p>
              <p className="match-timing">30:00:54</p>
            </div>
            <div className="match-box-item">
              <img
                src="https://uploads.turbologo.com/uploads/design/preview_image/4859003/preview_image20210602-26376-1fu9ofb.png"
                width={"100px"} height={"100px"} alt="Logo Team"/>
              <p className={"match-team-name"}>
                Team 2
              </p>
            </div>
          </div>
          <div className="wrap">
            <Tabs sizeX={SizeType.REGULAR}>
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
          <div className="wrap" style={{textAlign:"center", display: 'flex', alignItems: "center", flexDirection: 'column', marginTop: '25px'}} >
            <iframe
              src="https://player.twitch.tv/esl_csgo"
              height="160"
              width="320"
            >
            </iframe>
            <div className={"match-box-pagination"} style={{marginTop: '5px'}}>
              <span className={"match-box-pagination"}><Icon20CommentOutline/> <p>65</p></span>
              <span className={"match-box-pagination"}><Icon20ShareOutline/> <p>4</p></span>
              <span className={"match-box-pagination"}><Icon20ViewOutline/> <p>7.2к</p></span>
            </div>
          </div>
        </>
    )
}
