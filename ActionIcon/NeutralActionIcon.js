import React from 'react'
import PropTypes from 'prop-types'
import { InfoboxStyled } from '../Infobox.styled'
import { IndicatorVariant } from '../../atom/Indicator/Indicator'
import InfoboxDescription from '../../atom/Description'
import Dynamic from '@components/Dynamic/Dynamic'
import IconPlacementInfobox from '../../atom/IconPlacement'
import InfoboxTitle from '../../atom/Title'
import IconActionInfobox from '../../atom/IconAction'

const NeutralActionIcon = (props) => {
  return (
    <InfoboxStyled variant={props.variant}>
      <IndicatorVariant variant='neutral' />
      <IconPlacementInfobox
        style={{
          backgroundImage: `url(/images/il_medium_graphicon_neutral_info.png)`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        mt='14.67px'
        ml='12.67px'
      />
      <Dynamic ml='space12' my='space16' color='item60'>
        <InfoboxDescription>
          <Dynamic mb='space4' color='item100'>
            <InfoboxTitle>{props.title}</InfoboxTitle>
          </Dynamic>
          {props.children}
        </InfoboxDescription>
      </Dynamic>
      <Dynamic zIndex='z1' position='absolute' right='0'>
        <IconActionInfobox>{props.iconAction}</IconActionInfobox>
      </Dynamic>
    </InfoboxStyled>
  )
}
NeutralActionIcon.propTypes = {
  variant: PropTypes.oneOf(['neutral', 'info', 'warning', 'critical']),
  children: PropTypes.any.isRequired,
  title: PropTypes.any,
  iconAction: PropTypes.any,
}

NeutralActionIcon.defaultProps = {
  variant: 'neutral',
  children:
    'Lorem ipsum dolor sit amet, consecte ubao uho iqehif oah fogagefu gafe.',
  title: 'Title',
  iconAction: null,
}

export default NeutralActionIcon
