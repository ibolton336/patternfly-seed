import React, { Component } from 'react';
import { Alert, AlertActionCloseButton, BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import '@app/app.css';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  state = {
    columns: [
      { title: 'Repositories' },
      'Branches',
      { title: 'Pull requests' },
      'Workspaces',
      {
        title: 'Last Commit'
      }
    ],
    rows: [
      ['one', 'two', 'three', 'four', 'five'],
      [
        {
          title: <div>one - 2</div>,
          props: { title: 'hover title', colSpan: 3 }
        },
        'four - 2',
        'five - 2'
      ],
      [
        'one - 3',
        'two - 3',
        'three - 3',
        'four - 3',
        {
          title: 'five - 3 (not centered)',
          props: { textCenter: false }
        }
      ]
    ]
  };

  public render() {
    return (
      <React.Fragment>
        <BackgroundImage src={images} />
        <div className="app-container">
          <Table
            caption="Simple Table"
            //@ts-ignore
            cells={this.state.columns}
            //@ts-ignore
            rows={this.state.rows}
          >
            <TableHeader />
            <TableBody />
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
