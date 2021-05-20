import React from 'react';
import './style.css';
var $ = require('jquery');
var jQuery = require('jquery');
require('jquery-ui')($);
require('jqgrid')($);

export default class JqGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.$grid = $(this.grid);
    this.$gridPager = $(this.gridPager);
    this.init();
  }

  componentWillUnmount() {
    // destroy
  }

  init() {
    this.$grid.jqGrid({
      url:
        'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
      mtype: 'GET',
      datatype: 'jsonp',
      colModel: [
        { label: 'OrderID', name: 'OrderID', key: true, width: 75 },
        { label: 'Customer ID', name: 'CustomerID', width: 150 },
        {
          label: 'Order Date',
          name: 'OrderDate',
          width: 150,
          formatter: 'date',
          formatoptions: { srcformat: 'Y-m-d H:i:s', newformat: 'ShortDate' }
        },
        { label: 'Freight', name: 'Freight', width: 150 },
        { label: 'Ship Name', name: 'ShipName', width: 150 }
      ],
      viewrecords: true,
      width: 780,
      height: 250,
      rowNum: 20,
      pager: '#jqGridPager'
    });
  }

  onChange() {}

  render() {
    return (
      <div>
        <table ref={grid => (this.grid = grid)} />
        <div ref={gridPager => (this.gridPager = gridPager)} />
      </div>
    );
  }
}
