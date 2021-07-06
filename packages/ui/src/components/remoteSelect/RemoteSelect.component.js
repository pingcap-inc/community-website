import PropTypes from 'prop-types';
import React, { useState, useMemo, useRef } from 'react';
import debounce from 'lodash/debounce';
import { Select as AntSelect, Spin } from 'antd';

const RemoteSelect = ({ fetchOptions, selectedOption, debounceTimeout = 800, Select = AntSelect, ...props }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;

      setOptions([]);
      setIsFetching(true);

      fetchOptions(value).then((options) => {
        // fetch is asynchronous, so the condition will make sure the
        // callback only updates for its own fetcher
        if (fetchId !== fetchRef.current) {
          return;
        }

        setOptions([selectedOption, ...options].filter(Boolean));
        setIsFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, selectedOption, debounceTimeout]);

  return (
    <Select
      filterOption={false}
      labelInValue
      notFoundContent={isFetching ? <Spin size="small" /> : null}
      onSearch={debounceFetcher}
      options={options}
      showSearch
      {...props}
    />
  );
};

RemoteSelect.propTypes = {
  ...AntSelect.propTypes,
  selectedOption: PropTypes.object,
  debounceTimeout: PropTypes.number,
  fetchOptions: PropTypes.func.isRequired,
};

export default RemoteSelect;
