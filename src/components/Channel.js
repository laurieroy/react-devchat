/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import { NavLink } from 'react-router-dom';

const Channel = ({ id, name }) => { 
  return <NavLink to={`/channel/${id}`}><div>{name}</div></NavLink>
}

export default Channel