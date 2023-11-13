export function createMovieMotionId(id) {
  const randomString = Math.random().toString(36).substr(2, 11);

  return `movie-motion-${id}-${randomString}`;
}

export function createTvMotionId(id) {
    const randomString = Math.random().toString(36).substr(2, 11);
  
    return `tv-motion-${id}-${randomString}`;
  }
  
  