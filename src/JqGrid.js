import React from 'react';
import './style.css';
var $ = require('jquery');
import 'jqgrid';
import mydata from '../data/data.js';

export default class JqGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.$grid = jQuery(this.grid);
    this.$gridPager = jQuery(this.gridPager);
    this.init();
  }

  componentWillUnmount() {
    // destroy
  }

  init() {
    this.$grid.jqGrid({
      colNames: ['Test', 'Passed', 'Test started', 'Test ended'],
      colModel: [
        { name: 'test', index: 'test', width: 220 },
        {
          name: 'passed',
          index: 'passed',
          width: 60,
          align: 'center',
          formatter: 'checkbox',
          edittype: 'checkbox',
          editoptions: { value: 'Yes:No', defaultValue: 'Yes' },
          formatoptions: { disabled: false },
          cellattr: function(rowId, tv, rawObject, cm, rdata) {
            if (Number(rowId) == 6) {
              return ' colspan="3"';
            }
          },
          formatter: function(cellvalue, options, rowObject) {
            if (rowObject.id == 6) {
              return '<input type="text" id="txtnotes" ref="refnotes" />';
            } else {
              if (rowObject.passed === true) {
                return (
                  '<input type="checkbox"  id="cbPassed-' +
                  rowObject.id +
                  '" checked/>'
                );
              } else {
                return (
                  '<input type="checkbox"  id="cbPassed-' +
                  rowObject.id +
                  '"  />'
                );
              }
            }
          }
        },
        {
          name: 'teststart',
          index: 'teststart',
          width: 75,
          formatter: 'string',
          sorttype: 'string',
          align: 'center',
          cellattr: function(rowId, tv, rawObject, cm, rdata) {
            if (Number(rowId) == 6) {
              return ' style="display:none;"';
            }
          }
        }, //return ' colspan="5"'
        {
          name: 'testend',
          index: 'testend',
          width: 75,
          formatter: 'string',
          sorttype: 'string',
          align: 'center',
          cellattr: function(rowId, tv, rawObject, cm, rdata) {
            if (Number(rowId) == 6) {
              return ' style="display:none;"';
            }
          }
        }
      ],
      rowNum: 10,
      rowList: [5, 10, 20],
      threeStateSort: true,
      gridview: true,
      rownumbers: false,
      autoencode: true,
      ignoreCase: true,
      sortname: 'id',
      viewrecords: true,
      sortorder: 'desc',
      shrinkToFit: false,
      pager: this.$gridPager
    });

    for (var i = 0; i <= mydata.length; i++)
      this.$grid.jqGrid('addRowData', i + 1, mydata[i]);

    this.$grid.jqGrid('setGroupHeaders', {
      useColSpanStyle: true,
      groupHeaders: [
        {
          startColumnName: 'passed',
          numberOfColumns: 3,
          titleText: 'Test Duration'
        }
      ]
    });
  }

  onChange() {}

  render() {
    return (
      <div id="gridContainer" ref="refContainer">
        <form>
          <table ref={grid => (this.grid = grid)} />
          <div ref={gridPager => (this.gridPager = gridPager)} />
        </form>
      </div>
    );
  }
}
