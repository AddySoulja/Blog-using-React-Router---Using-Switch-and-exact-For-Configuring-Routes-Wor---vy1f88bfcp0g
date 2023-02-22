import React from 'react';
import {useParams} from 'react-router-dom';

export default function PostDetail() {
  let {id} = useParams();
  return <h1>Post Detail: {id}</h1>;
}
  
