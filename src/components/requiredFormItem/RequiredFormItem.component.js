import * as Styled from './requiredFormItem.styled';

const RequiredFormItem = ({ label, name, children }) => (
  <Styled.Container label={label} name={name}>
    {children}
  </Styled.Container>
);

export default RequiredFormItem;
