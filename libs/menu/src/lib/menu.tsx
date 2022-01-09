import React from 'react';

import './menu.module.scss';

import { Layer } from '@fluentui/react/lib/Layer';
import { AnimationClassNames, FontWeights, getTheme, mergeStyles } from '@fluentui/react/lib/Styling';
import { IButtonStyles, IconButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';
import { Customizer } from '@fluentui/react/lib/Utilities';
import { Panel } from '@fluentui/react/lib/Panel';
import { IIconProps } from '@fluentui/react/lib/Icon';

/* eslint-disable-next-line */
export interface MenuProps {
  title: string
}

export function Menu(props: MenuProps) {
  const userMgmtIcon: IIconProps = { iconName: 'AccountManagement' };
  const [isPanelOpen, { setTrue: showPanel, setFalse: dismissPanel }] = useBoolean(false);

  const [scrollState, setScrollState] = React.useState("top");
  const [colorOpacity, setColorOpacity] = React.useState(0);

  const iconStyles: IButtonStyles = {
    root: {
      color: 'blue',
      fontSize: 16,
      fontWeight: FontWeights.regular,

    },
  };
  const layerStyles = mergeStyles([
    {
      backgroundColor: "blue",
      color: "blue",
      lineHeight: '50px',
      padding: '0 20px',
      opacity: '0'

    },
    AnimationClassNames.scaleUpIn100,
  ]);
  //rgba(255, 0, 0, ${colorOpacity})
  return (
    <div>
      <Layer>
        <div className={layerStyles} style={{ backgroundColor: "whitesmoke" }}>
          <div style={{ margin: "0 20px" }}>
            {props.title ?? 'ABC Tracker'}

            <div style={{ float: "right" }}>
              <IconButton iconProps={userMgmtIcon} onClick={showPanel} styles={iconStyles} title="Add" ariaLabel="Add" aria-hidden={false} />
            </div>
          </div>
        </div>


      </Layer>

      <Customizer >
        {isPanelOpen && (
          <Panel
            style={{ color: "blue" }}
            isOpen
            hasCloseButton
            headerText="My Profile"
            onDismiss={dismissPanel} />
        )}
      </Customizer>
    </div>
  );

}

export default Menu;
