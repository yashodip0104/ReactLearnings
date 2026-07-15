import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'

function ChatMessage({ sender, message }) {
    // const message = props.message;
    // const sender = props.sender;
    // const { sender, message } = props;
    /*
        if (sender === 'bot') {
            return (
                <div>
                    <img src="robot.png" width="50" />
                    {message}
                </div>
            );
        }
    */
    return (
        <div
            className={
                sender === 'user'
                    ? 'chat-message-user'
                    : 'chat-message-bot'
            }>

            {sender === 'bot' &&
                <img src={RobotProfileImage}
                    className="chat-message-profile" />
            }

            <div className="chat-message-text">
                {message}
            </div>

            {sender === 'user' &&
                <img src={UserProfileImage}
                    className="chat-message-profile" />
            }
        </div>
    );
}

export default ChatMessage;