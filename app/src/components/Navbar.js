import React from 'react';
import { Navbar } from 'react-bootstrap';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export default function NavBar() {
  return (
    <Navbar className="Navbar justify-content-between" expand="lg">
      <Navbar.Brand className="Navbar-brand" href="#">Arkitech</Navbar.Brand>
      <SearchBox
          underlined
          placeholder="Search"
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
          iconProps={{ iconName: 'Search' }}
        />
    </Navbar>
  );
}