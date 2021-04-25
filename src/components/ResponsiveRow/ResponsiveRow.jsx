import React, { useEffect, useState } from 'react';
import { Row } from 'antd';

/**
 screen width <=  576 px , container width =  100  % , gutter = 16
  576 px < screen width <=  768 px , container width =  512 px , gutter = 16
  768 px < screen width <=  922 px , container width =  752 px , gutter = 16
  922 px < screen width <= 1200 px , container width =  992 px , gutter = 16
 1200 px < screen width <= 1680 px , container width = 1200 px , gutter = 36
 1680 px < screen width <= 1920 px , container width = 1600 px , gutter = 44
         < screen width <= 1920 px , container width = 1920 px , gutter = 44
 */

export default function ResponsiveRow({ children, gutter, ...rest }) {
  gutter = gutter ?? [0, 0];

  const [responsiveGutter, setResponsiveGutter] = useState(gutter);

  useEffect(() => {
    const resizeHandle = () => {
      if (window.matchMedia('(max-width: 1599px)').matches) {
        setResponsiveGutter([16, gutter[1]]);
      } else if (window.matchMedia('(min-width: 1600px)').matches) {
        setResponsiveGutter([44, gutter[1]]);
      } else if (window.matchMedia('(min-width: 1200px)').matches) {
        setResponsiveGutter([36, gutter[1]]);
      }
    };

    resizeHandle();
    window.addEventListener('resize', resizeHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
    };
  }, [gutter]);

  return (
    <Row {...rest} gutter={responsiveGutter}>
      {children}
    </Row>
  );
}
