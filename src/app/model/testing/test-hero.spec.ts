import { TestHero } from './test-hero';

describe('TestHero', () => {
  it('should create an instance', () => {
    expect(new TestHero()).toBeTruthy();
  });
});
