import React from "react";
import { connect } from "react-redux";

import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { CharacterList } from "../components";
import { fetchData} from "../actions/"
// import actions

class CharacterListView extends React.Component {
  

  componentDidMount() {
    // call our action
    this.props.fetchData()
  }

  render() {
    if (this.props.fetching) {
      return (<Segment style={{marginTop: "30%"}}>
        <Dimmer active>
          <Loader size='small'>Loading</Loader>
        </Dimmer>

        {/* <Image src='/images/wireframe/short-paragraph.png' />
        <Image src='/images/wireframe/short-paragraph.png' />
        <Image src='/images/wireframe/short-paragraph.png' /> */}
      </Segment>)
      
      {/* return something here to indicate that you are fetching data */}
       
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div> 
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps =(state)=>{
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
}
}
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  
  {
    /* action creators go here */
    fetchData
  }
)(CharacterListView);
