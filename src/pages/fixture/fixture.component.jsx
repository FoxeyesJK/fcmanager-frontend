import React, { useState } from 'react';
import MATCH_DATA from './fixture.data.js';
import SimpleBarReact from 'simplebar-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectMatches } from '../../redux/match/match.selectors';

import { 
  FixturePage,
  StandingContainer,
  LeagueContainer,
  FixtureContainer,
  FixtureListContainer,
  SimpleBarReactContainer,
  Title,
  TableRow,
  TableHeader,
  Table
} from './fixture.styles.jsx';

import FixturePreview from '../../components/fixture-preview/fixture-preview.component';
import FixtureDetail from '../../components/fixture-detail/fixture-detail.component';
import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';

const Fixture = ({ matches, isAdmin}) => {
  const [button, setButton] = useState({ selectedId: 0, type: '' })

  const { selectedId, type } = button;

  const handleClick = (id, type) => {
    console.log(id)
    setButton({ selectedId: id, type: type });
  }

  return (
    <FixturePage>
      <FixtureContainer>
      <FixtureListContainer>
        <Title>FIXTURES</Title>
        <Table>
          <TableRow>
              <TableHeader>TIME</TableHeader>
              <TableHeader>OPPOSITION</TableHeader>
              <TableHeader>RESULT</TableHeader>
              <TableHeader>COMPETITION</TableHeader>
              {isAdmin ? <CustomIcon type='add' id={selectedId} handleClick={handleClick}/>: null}
          </TableRow>
          <SimpleBarReact style={{maxHeight: 700}}>
          {
              matches.map(({ id, ...otherMatchProps }) => (
                <FixturePreview key={id} id={selectedId} type={type} handleClick={handleClick} {...otherMatchProps} />
              ))
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {
          matches
          .filter((match, id) => id < 1)
          .map(({ id, ...otherMatchProps }) => (
            <FixtureDetail key={id} selectedId={selectedId} handleClick={handleClick} isAdmin={isAdmin} {...otherMatchProps}/>
          ))
        }
      </FixtureContainer>
    </FixturePage>
  )
}

const mapStateToProps = createStructuredSelector({
  matches: selectMatches,
})

export default withRouter(connect(
 mapStateToProps 
)(Fixture));

