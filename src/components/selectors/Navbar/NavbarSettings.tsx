import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const NavbarSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Logo">
        <ToolbarItem propKey="logo" label="Logo URL" type="text" />
      </ToolbarSection>
      <ToolbarSection title="Links">
        <ToolbarItem
          propKey="links"
          label="Links"
          type="list"
        >
          <ToolbarItem propKey="label" label="Label" type="text" />
          <ToolbarItem propKey="url" label="URL" type="text" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Appearance">
        <ToolbarItem propKey="backgroundColor" label="Background Color" type="color" />
      </ToolbarSection>
    </React.Fragment>
  );
};
