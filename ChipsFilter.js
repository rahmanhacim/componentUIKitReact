import React from 'react'
import styled from 'styled-components'
import {
  primaryselected,
  primarydisable,
  secondarydisable,
  secondaryselected,
} from '../Chips.styled'

import PropTypes from 'prop-types'

import { Icon } from '../../Icons'

const ChipsStyled = styled.div`
  ${primaryselected}
  ${primarydisable}
  ${secondarydisable}
  ${secondaryselected}
`

const RenderIcon = ({ typeoficon }) => {
  switch (typeoficon) {
    case 'radio':
      return <Icon name='RadioOff' width='22px' height='22px' />
    case 'checkbox':
      return <Icon name='BoxCheckEmpty' width='22px' height='22px' />
    default:
      return null
  }
}

const Filter = ({ disable, selected, appearance, ...props }) => {
  return (
    <ChipsStyled
      selected={selected}
      disable={disable}
      appearance={appearance}
      as='button'
      onClick={props.onClick}
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.puticon && (
          <RenderIcon typeoficon={props.typeoficon ? props.typeoficon : ''} />
        )}{' '}
        {props.children}
      </div>
    </ChipsStyled>
  )
}

Filter.propTypes = {
  /**
   * Define Chips puticon
   */
  puticon: PropTypes.bool,

  typeoficon: PropTypes.oneOf(['radio', 'checkbox']),

  onClick: PropTypes.bool,
}

Filter.defaultProps = {
  onClick: null,
}

export default Filter
