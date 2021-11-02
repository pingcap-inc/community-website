import PropTypes from 'prop-types';
import React, { useState, useMemo, useRef } from 'react';
import debounce from 'lodash/debounce';
import { AutoComplete as AntAutoComplete, Spin } from 'antd';

const RemoteAutoComplete = ({ fetchOptions, debounceTimeout = 800, AutoComplete = AntAutoComplete, ...props }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      if (value === undefined || value === '') return;
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

        setOptions(options);
        setIsFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <AutoComplete
      filterOption={false}
      notFoundContent={isFetching ? <Spin size="small" /> : null}
      onSearch={debounceFetcher}
      options={options}
      {...props}
    />
  );
};

RemoteAutoComplete.propTypes = {
  ...AntAutoComplete.propTypes,
  debounceTimeout: PropTypes.number,
  fetchOptions: PropTypes.func.isRequired,
};

export default RemoteAutoComplete;
