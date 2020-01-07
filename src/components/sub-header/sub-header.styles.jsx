import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)

const activeClassName = 'active';

export const SubHeaderContainer = styled.div`
    width: 100%;
`;

export const OptionsContainer = styled.div`
    width: 100%;
`;

export const OptionNavLink = styled(NavLink).attrs({
    activeClassName,
  })`

  color: #FFFFFF;
  padding: 0 10px;

    &.${activeClassName} {
        color: #FFFFFF;
        border-bottom: 3px solid white;
    }
`;