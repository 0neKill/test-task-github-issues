import { compose } from '@reduxjs/toolkit';
import { withStore } from './with-store';
import { withStyles } from './with-styles';
import { withNotification } from './with-notification';

export const withHoc = compose(withStore, withStyles, withNotification);