import React from 'react'

function Article({title,date="January 1, 1970" ,preview,minutes}) {
   
    const cofeei="☕️";
    const cefeii="🍱";
  return (
    <article>
        <h3>{title} </h3>
        <small>
            {date}
            <span>{minutes<=30?` ${cofeei.repeat(Math.ceil(minutes/5))} ${minutes} min read`: ` ${cefeii.repeat(Math.ceil(minutes/10))} ${minutes} min read`}</span>
        </small>
        <p>{preview}</p>

    </article>
  )
}

export default Article