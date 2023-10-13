export function determineRelativePath(filePath: string) {
  const segments = filePath.split('/');
  // Determine the number of segments to go up to reach the root directory.
  const numberOfSegmentsToRoot = segments.length - 1;
  // Generate the relative path by repeating '../' for each segment.
  const relativePath = Array(numberOfSegmentsToRoot).fill('..').join('/');
  // put heavy lifting here so user doesn't have to worry about
  if(relativePath === '') {
    return null
  }
  return relativePath + '/';
}