import React from 'react'

import FilterLink from 'components/filter-link'

const Footer = () => (
  <div>
    Show:&nbsp;
    <FilterLink filter='all'>
      All
    </FilterLink>,&nbsp;
    <FilterLink filter='active'>
      Active
    </FilterLink>,&nbsp;
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
  </div>
)

export default Footer
