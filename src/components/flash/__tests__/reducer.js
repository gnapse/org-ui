import { SHOW_FLASH, HIDE_FLASH } from '../actionTypes';
import reducer from '../reducer';

describe(SHOW_FLASH, () => {
  it('sets open to true', () => {
    expect(reducer({ open: false }, { type: SHOW_FLASH })).toEqual({
      open: true,
    });
    expect(reducer({ open: true }, { type: SHOW_FLASH })).toEqual({
      open: true,
    });
  });

  it('injects any extra props in the state', () => {
    expect(reducer({ open: false }, { type: SHOW_FLASH, custom: 1 })).toEqual({
      open: true,
      custom: 1,
    });
  });

  it('does not allow to set the open value via extra props', () => {
    expect(
      reducer({ open: false }, { type: SHOW_FLASH, custom: 1, open: 'Yes' })
    ).toEqual({ open: true, custom: 1 });
  });

  it('clears any previous props in the state', () => {
    expect(
      reducer(
        { open: false, message: 'Hello' },
        { type: SHOW_FLASH, message: 'Goodbye' }
      )
    ).toEqual({ open: true, message: 'Goodbye' });
  });
});

describe(HIDE_FLASH, () => {
  it('sets open to false', () => {
    expect(reducer({ open: false }, { type: HIDE_FLASH })).toEqual({
      open: false,
    });
    expect(reducer({ open: true }, { type: HIDE_FLASH })).toEqual({
      open: false,
    });
  });

  it('keeps anything else in the state intact', () => {
    expect(
      reducer({ open: true, message: 'Hello', custom: 1 }, { type: HIDE_FLASH })
    ).toEqual({ open: false, message: 'Hello', custom: 1 });
  });
});
