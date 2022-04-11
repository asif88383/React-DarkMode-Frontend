import React from 'react'
import moment from 'moment'

const Article = ({title, snippet, date, length}) => { // Article is a component that takes in a title, a snippet, a date, and a length  as props  and returns JSX
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>  // snippet is a prop that is passed in as a prop
    </article>
  )
}

export default Article
