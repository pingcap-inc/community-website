import PropTypes from 'prop-types';
import React from 'react';
import debounce from 'lodash/debounce';
import { Select as AntSelect, Spin } from 'antd';

const RemoteSelect = ({ fetchOptions, debounceTimeout = 800, Select = AntSelect, ...props }) => {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const fetchRef = React.useRef(0);

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      showSearch={true}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
};

RemoteSelect.propTypes = {
  ...AntSelect.propTypes,
  debounceTimeout: PropTypes.number,
  fetchOptions: PropTypes.func.isRequired,
};

export default RemoteSelect;
