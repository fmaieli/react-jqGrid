import React from 'react';
import JqGrid from './JqGrid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFancyTree = this.onChangeFancyTree.bind(this);

    this.state = {};
  }

  componentDidMount() {}

  onChangeFancyTree(itemsSelected) {
    this.setState({ fancyTreeItems: itemsSelected });
    console.log(this.state.fancyTreeItems);
  }

  render() {
    return (
      <div>
        <h1>jqGrid Component</h1>
        <JqGrid />
      </div>
    );
  }
}
