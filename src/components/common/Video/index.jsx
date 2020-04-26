import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import styles from './styles.module.scss';

const VideoPlayer = ({ className, url, title, width, height, ...rest }) => {
  return (
    <div className={cx(className, styles.container)}>
      <ReactPlayer url={url} {...rest} width={width} height={height} />
    </div>
  );
};

VideoPlayer.defaultProps = {
  width: '100%',
  height: '100px',
};

export default VideoPlayer;
