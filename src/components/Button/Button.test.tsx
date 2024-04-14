import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Primary } from './Button.stories';
import { Button } from './Button';

describe('Button Component Tests', () => {
  it('renders the primary button with correct label', () => {
    const { getByText } = render(<Button {...Primary.args} />);
    expect(getByText('Button')).toBeDefined();
  });
});
