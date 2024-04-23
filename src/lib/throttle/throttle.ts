const throttle = <T extends (...args: unknown[]) => unknown>(func: T, delay: number): T => {

    let lastCall = 0;

    return ((...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
  
      lastCall = now;
      return func(...args);
    }) as T;
}

export default throttle;
