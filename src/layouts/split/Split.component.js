import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { wrapElements } from './Split.utils';
import * as Styled from './Split.styled';
import { useSize } from 'ahooks';

const Split = ({ dividerColor, marginTop, marginBottom, children }) => {
  const ref = useRef();
  const size = useSize(ref);

  const isLargeSize = size.width > 1024;

  const newChildren = wrapElements({
    elements: children,
    wrapElement: (element, n, total) => {
      const props = {
        span: 24 / total,
        key: `element-${n}`,
      };
      if (dividerColor && n < total - 1) {
        return <Styled.ItemContainerWithDivider {...props}
                                                dividerColor={dividerColor}>{element}</Styled.ItemContainerWithDivider>;
      } else {
        return <Styled.ItemContainer {...props}>{element}</Styled.ItemContainer>;
      }
    },
  });

  const ContainerProps = {
    marginTop,
    marginBottom,
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
