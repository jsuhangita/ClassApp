import {
  flex1,
  fontSizeMedium, rowLeft,
} from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default {
  picker__wrapper: {
    marginBottom: theme.padding,
  },
  picker__no_margin: {
    marginBottom: 0,
  },
  picker__container: {
    backgroundColor: theme.transparent,
    borderBottomWidth: 1,
    borderBottomColor: theme.black,
  },
  picker__round: {
    backgroundColor: theme.white,
    paddingHorizontal: theme.padding,
    borderBottomWidth: 0,
    borderRadius: 50,
  },
  input__label: {
    ...fontSizeMedium,
  },
  picker__content: {
    ...rowLeft,
  },
  picker__affixContainer: {
    ...flex1,
  },

  picker__suffixContainer: {
    flex: 2,
  },
  picker__suffix: {
    textAlign: 'right',
  },
  picker__textContainer: {
    flex: 8,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  picker__text: {
    ...fontSizeMedium,
    color: theme.black,
  },

  picker__text_white: {
    color: theme.white,
  },

  picker__border_white: {
    borderBottomColor: theme.white,
  },

  picker__disabled: {},
};
