/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
const Channel = ({ changeChannel, id, name, selectedId }) => { 
  return <div 
    className={(id === selectedId) ? "selected" : ""} 
    onClick={() => changeChannel(id)}
    >{name}</div>
}

export default Channel