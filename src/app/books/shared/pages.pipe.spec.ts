import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should show Value the right way', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform('enviaM', 'Moin @')).toBe('Moin @: enviaM');
  });
});
