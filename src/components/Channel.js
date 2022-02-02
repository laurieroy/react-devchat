/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
const Channel = (props) => {
  return <div onClick={() => props.changeChannel(props.id)}>{props.name}</div>
}

export default Channel