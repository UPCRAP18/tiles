import * as React from 'react';
import * as strings from 'TilesWebPartStrings';
import styles from './Tiles.module.scss';
import { ITilesProps } from '.';
import { Tile } from './tile';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';

export class Tiles extends React.Component<ITilesProps, {}> {

  public render(): React.ReactElement<ITilesProps> {
    return (
      <div className={ styles.tiles }>
        <WebPartTitle displayMode={this.props.displayMode} />

        {
          this.props.collectionData && this.props.collectionData.length > 0 ? (
            <div className={styles.tilesList}>
              {
                this.props.collectionData.map((tile, idx) => {
                  return <Tile key={idx} item={tile} />
                })
              }
            </div>
          ) : (
            <Placeholder
              iconName='Edit'
              iconText={strings.noTilesIconText}
              description={strings.noTilesConfigured}
              buttonLabel={strings.noTilesBtn}
              onConfigure={this.props.fPropertyPaneOpen} />
          )
        }
      </div>
    );
  }
}
