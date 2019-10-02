import React from 'react';
import { BlipChat } from "blip-chat-widget";

export class Blip extends React.Component {
  componentDidMount() {
    new BlipChat()
      .withAppKey("cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy")
      .withButton({ color: "#2CC3D5" })
      .withCustomStyle(
        `
        .blip-chat-bot-name{ color: #000 }
        .blip-chat-bot-status{ color:red }
        `)
      .build();
  }
  render() {
    return (
      <div className="Bot">
      </div>
    );
  }
}
