import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useSize } from 'ahooks';

import * as Styled from './split.styled';
import { wrapElements } from './split.utils';

const Split = ({ dividerColor, marginTop, marginBottom, children }) => {
  const ref = useRef();
  const size = useSize(ref);

  const isLargeSize = size.width > 1200;
  const isSmallSize = size.width <= 588;

  const newChildren = wrapElements({
    elements: children,
    wrapElement: (element, n, total) => {
      const props = {
        span: isLargeSize ? 24 / total : 24,
        key: `element-${n}`,
        $marginTop: !isLargeSize,
      };
      if (isLargeSize && dividerColor && n < total - 1) {
        return (
          <Styled.ItemContainerWithDivider {...props} $dividerColor={dividerColor}>
            {element}
          </Styled.ItemContainerWithDivider>
        );
      } else {
        return <Styled.ItemContainer {...props}>{element}</Styled.ItemContainer>;
      }
    },
  });

  const ContainerProps = {
    $marginTop: marginTop,
    $marginBottom: marginBottom,
    $paddingHorizontal: isSmallSize,
  };

  return (
    <Styled.Container ref={ref} {...ContainerProps}>
      {newChildren}
    </Styled.Container>
  );
};

Split.propTypes = {
  dividerColor: PropTypes.string,
};

export default Split;
