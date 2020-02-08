import styled, { css } from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

import { MainTableColor } from '../../global.styles';

const IconStyles = css`
    height: 16px;
    width: 16px;
`;

export const RecordDetailItemContainer = styled.div`
    border-bottom: 1px solid #efefef;
`;

export const PlayerContainer = styled.div`

`;

export const Player = styled.div`
`;


export const StyledAssistIcon = styled(AssistIcon)`
    ${IconStyles}
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${IconStyles}
`;
