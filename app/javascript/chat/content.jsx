import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import CodeEditor from './codeEditor';
import GithubRepo from './githubRepo';
import ChannelDetails from './channelDetails';
import UserDetails from './userDetails';
import Article from './article';

export default class Content extends Component {
  static propTypes = {
    resource: PropTypes.object,
    activeChannelId: PropTypes.number,
    pusherKey: PropTypes.string,
  };
  render() {
    if (!this.props.resource) {
      return ""
    } else {
      return (
        <div
          className="activechatchannel__activecontent" id="chat_activecontent"
          onClick={this.props.onTriggerContent}
          >
          <button
            class="activechatchannel__activecontentexitbutton"
            data-content="exit"
            >×</button>
            {display(this.props)}
        </div>
      );
    }
  }
}

function display(props) {
  if (props.resource.type_of === "loading-user") {
    return <div style={{height: "210px",
                      width: "210px",
                      margin:" 15px auto",
                      display: "block",
                      borderRadius: "500px",
                      backgroundColor: "#f5f6f7"}}></div>
  } else if (props.resource.type_of === "loading-user") {
    return <div style={{height: "25px",
                      width: "96%",
                      margin:" 8px auto",
                      display: "block",
                      backgroundColor: "#f5f6f7"}}></div>
  } else if (props.resource.type_of === "user") {
    return <UserDetails user={props.resource} />
  } else if (props.resource.type_of === "article") {
    return <Article resource={props.resource}/>
  } else if (props.resource.type_of === "github") {
    return <GithubRepo
              activeChannelId={props.activeChannelId}
              pusherKey={props.pusherKey}
              githubToken={props.githubToken}
              resource={props.resource}
            />
  } else if (props.resource.type_of === "channel-details") {
    return <ChannelDetails
              channel={props.resource.channel}
              activeChannelId={props.activeChannelId}
            />
  } else if (props.resource.type_of === "code_editor") {
    return <CodeEditor
              activeChannelId={props.activeChannelId}
              pusherKey={props.pusherKey}
            />
  }
}