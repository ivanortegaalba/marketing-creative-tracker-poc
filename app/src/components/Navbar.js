import React, {Fragment} from 'react';
import { Navbar } from 'react-bootstrap'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const items = [
  {
    key: 'newItem',
    name: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
    iconProps: {
      iconName: 'Add'
    },
    ariaLabel: 'New',
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          iconProps: {
            iconName: 'Mail'
          },
          ['data-automation-id']: 'newEmailButton'
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          }
        }
      ]
    }
  },
  {
    key: 'upload',
    name: 'Upload',
    iconProps: {
      iconName: 'Upload'
    },
    href: 'https://dev.office.com/fabric',
    ['data-automation-id']: 'uploadButton'
  },
  {
    key: 'share',
    name: 'Share',
    iconProps: {
      iconName: 'Share'
    },
    onClick: () => console.log('Share')
  },
  {
    key: 'download',
    name: 'Download',
    iconProps: {
      iconName: 'Download'
    },
    onClick: () => console.log('Download')
  }
];

const overflowItems = [
  {
    key: 'move',
    name: 'Move to...',
    onClick: () => console.log('Move to'),
    iconProps: {
      iconName: 'MoveToFolder'
    }
  },
  {
    key: 'copy',
    name: 'Copy to...',
    onClick: () => console.log('Copy to'),
    iconProps: {
      iconName: 'Copy'
    }
  },
  {
    key: 'rename',
    name: 'Rename...',
    onClick: () => console.log('Rename'),
    iconProps: {
      iconName: 'Edit'
    }
  }
];

const farItems = [
  {
    key: 'sort',
    name: 'Sort',
    ariaLabel: 'Sort',
    iconProps: {
      iconName: 'SortLines'
    },
    onClick: () => console.log('Sort')
  },
  {
    key: 'tile',
    name: 'Grid view',
    ariaLabel: 'Grid view',
    iconProps: {
      iconName: 'Tiles'
    },
    iconOnly: true,
    onClick: () => console.log('Tiles')
  },
  {
    key: 'info',
    name: 'Info',
    ariaLabel: 'Info',
    iconProps: {
      iconName: 'Info'
    },
    iconOnly: true,
    onClick: () => console.log('Info')
  }
]


export default function NavBar() {
  return (
    <Fragment>
      <Navbar className="Navbar" expand="lg">
        <Navbar.Brand className="Navbar-brand" href="#">Arkitech</Navbar.Brand>
      </Navbar>
      <CommandBar
        items={items}
        overflowItems={overflowItems}
        overflowButtonProps={{ ariaLabel: 'More' }}
        farItems={farItems}
        ariaLabel={'Use left and right arrow keys to navigate between commands'}
      />
    </Fragment>

  );
}