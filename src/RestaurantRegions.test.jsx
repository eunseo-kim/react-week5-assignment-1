import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  it('render', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const handleClickRegion = jest.fn();

    const { getByText } = render((
      <RestaurantRegions
        regions={regions}
        onClickRegion={handleClickRegion}
      />
    ));

    expect(getByText('서울')).not.toBeNull();

    fireEvent.click(getByText('서울'));

    expect(handleClickRegion).toBeCalled();
  });
});