import { render } from '@testing-library/react';

import FluidReact from './fluid-react';

describe('FluidReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FluidReact />);
    expect(baseElement).toBeTruthy();
  });
});
