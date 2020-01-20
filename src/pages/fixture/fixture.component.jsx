import React from 'react';
import MATCH_DATA from './fixture.data.js';
import SimpleBarReact from 'simplebar-react';

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

export default class Fixture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 1,
      matches: MATCH_DATA
    }
  }

  handleClick = (id) => {
    // const { name, value } = event.target;
    console.log(id);
    this.setState({ selectedId: id })
  }
  

  render () {
    const { matches, selectedId } = this.state;
    const { isAdmin } = this.props;
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
              {isAdmin ? <CustomIcon type='add' />: null}
          </TableRow>
          <SimpleBarReact style={{maxHeight: 700}}>
          {
              matches.map(({ id, ...otherMatchProps }) => (
                <FixturePreview id={id} key={id} {...otherMatchProps} handleClick={this.handleClick} />
              ))
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {
          matches
          .filter((match, id) => id < 1)
          .map(({ id, ...otherMatchProps }) => (
            <FixtureDetail key={id} selectedId={selectedId} {...otherMatchProps} handleClick={this.handleClick} isAdmin={isAdmin}/>
          ))
        }
      </FixtureContainer>
    </FixturePage>
    )
  }
}
