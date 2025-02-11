import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state =
            {
                errors: [],
                user: null,
                settings: {
                  bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                }
              }
        }

        bitrateUpdate = () => {
            this.setState({
                settings: {
                  ...this.state.settings,
                  bitrate: 12
                }
              });
            console.log(this.state.settings.bitrate);
            
        }

        resolutionUpdate = () => {
            this.setState({
                settings: {
                  ...this.state.settings,
                  video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                  }
                }
              });
            }


    render() {
        return ( 
            <div>
                <button className="bitrate" onClick={this.bitrateUpdate}>bitrate</button>
                <button className="resolution" onClick={this.resolutionUpdate}>resolution</button>
        </div>
        )
    }



}

export default YouTubeDebugger;