import styled, {css} from 'styled-components';
import PropTypes from 'prop-types'
import { Row as AntRow, Col as AntCol } from 'antd';

export const Container = styled(AntRow)`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

export const ItemContainer = styled(AntCol)`
`

export const ItemContainerWithDivider = styled(ItemContainer)`
  border-right: 1px solid ${props => props.dividerColor};
`

ItemContainerWithDivider.propTypes = {
  dividerColor: PropTypes.string,
}

