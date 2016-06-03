import React from 'react'

import FilterLink from './filter-link'

const Footer = () => {
  return (
    <div>
      Show:&nbsp;
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      &nbsp;
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      &nbsp;
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      &nbsp;
    </div>
  )
}

export default Footer
