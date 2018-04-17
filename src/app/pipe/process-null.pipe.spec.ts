import { ProcessNullPipe } from './process-null.pipe';

describe('ProcessNullPipe', () => {
  it('create an instance', () => {
    const pipe = new ProcessNullPipe();
    expect(pipe).toBeTruthy();
  });
});
