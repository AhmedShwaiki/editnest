import throttle from './throttle';

describe('throttle', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should execute function immediately', () => {
    const mockFn = vi.fn()
    const throttled = throttle(mockFn, 10);

    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should ignore calls within delay period', async () => {
    const mockFn = vi.fn()
    const throttled = throttle(mockFn, 10);

    throttled();
    throttled();
    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);

    await new Promise(resolve => setTimeout(resolve, 10));

    throttled();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
