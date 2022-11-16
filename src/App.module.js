import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
export const Container = styled.SafeAreaView`
  width: 100%;
  padding: 10px;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  alignitems: 'center';
  justifycontent: 'center';
`
