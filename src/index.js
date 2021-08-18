import React from 'react'
import reactDom from 'react-dom'
import Message from './test'

function BookList() {
  return (
    <section>
      <Message />
    </section>
  )
}

reactDom.render(<BookList />, document.getElementById('root'))
