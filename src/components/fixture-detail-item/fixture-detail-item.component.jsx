import React from 'react';

import {
  AdminMatchDetailItemContainer,
  Title,
  ScoreContainer,
  Team,
  RecordContainer,
  Player,
  StyledAssistIcon,
  StyledScoreIcon
} from './fixture-detail-item.styles.jsx';

import TeamDropdown from '../team-dropdown/team-dropdown.component';

const FixtureDetailItem = ({ match, id }) => {
  const { HomeTeamName, HomeScore, AwayTeamName, AwayScore} = match;
 
  return (
    <AdminMatchDetailItemContainer>
        <ScoreContainer>
          <Team>
              <TeamDropdown 
              name='home'
              className='home team-name'
              dropdownItems={[
                { value: 'RED', id: 1 },
                { value: 'BLUE', id: 2 },
                { value: 'YELLOW', id: 3}
              ]}
              required
              />
          </Team>
          <div className='final-score'>
            <span className='score'>{HomeScore}</span>
            <span>  -  </span>
            <span className='score'>{AwayScore}</span>
          </div>
          <Team>
              <TeamDropdown 
                className='away team-name'
                name='away'
                dropdownItems={[
                  { value: 'RED', id: 1 },
                  { value: 'BLUE', id: 2 },
                  { value: 'YELLOW', id: 3}
                ]}
                required
              />
          </Team>
        </ScoreContainer>
        <RecordContainer>
          <Team>
            <Player>
            <StyledScoreIcon />
              <TeamDropdown 
                name='home'
                className='scorer'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            </Player>
            <Player>
            <StyledAssistIcon />
              <TeamDropdown 
                name='home'
                className='assist'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
            </Player>
          </Team>
          <Team>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            <StyledScoreIcon />
            </Player>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
                <StyledAssistIcon />
            </Player>
          </Team>
        </RecordContainer>
        <RecordContainer>
          <Team>
            <Player>
            <StyledScoreIcon />
              <TeamDropdown 
                name='home'
                className='scorer'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            </Player>
            <Player>
            <StyledAssistIcon />
              <TeamDropdown 
                name='home'
                className='assist'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
            </Player>
          </Team>
          <Team>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            <StyledScoreIcon />
            </Player>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
                <StyledAssistIcon />
            </Player>
          </Team>
        </RecordContainer>
        <RecordContainer>
          <Team>
            <Player>
            <StyledScoreIcon />
              <TeamDropdown 
                name='home'
                className='scorer'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            </Player>
            <Player>
            <StyledAssistIcon />
              <TeamDropdown 
                name='home'
                className='assist'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
            </Player>
          </Team>
          <Team>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            <StyledScoreIcon />
            </Player>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
                <StyledAssistIcon />
            </Player>
          </Team>
        </RecordContainer>
        <RecordContainer>
          <Team>
            <Player>
            <StyledScoreIcon />
              <TeamDropdown 
                name='home'
                className='scorer'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            </Player>
            <Player>
            <StyledAssistIcon />
              <TeamDropdown 
                name='home'
                className='assist'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
            </Player>
          </Team>
          <Team>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              />
            <StyledScoreIcon />
            </Player>
            <Player>
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
                <StyledAssistIcon />
            </Player>
          </Team>
        </RecordContainer>
    </AdminMatchDetailItemContainer>
  )
}

export default FixtureDetailItem;

