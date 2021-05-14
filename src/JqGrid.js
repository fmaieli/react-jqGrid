import React from 'react';
import './style.css';
var $ = require('jquery');
import 'jqgrid';

export default class FancyTree extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.init();
  }

  componentWillUnmount() {
    this.$el.fancytree('destroy');
  }

  init() {
    var resultData = this.props.wrapper.mapTiposEnsayos(this.props.data);
    this.$el.fancytree({
      checkbox: true,
      icons: false,
      selectMode: 3,
      source: resultData,
      beforeSelect: null
    });
  }

  onChange() {}

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
