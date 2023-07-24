import { existsSync } from 'fs';
import { dirname, parse, relative} from "path";

export function findNearestIndexFile(path: string, fileNameToFind = 'index.ts'): string {
    let currentDir = path;
    while (currentDir.length > 0) {
        const indexPath = currentDir + `/${fileNameToFind}`;
        if (existsSync(indexPath)) {
           return indexPath;
        }
        currentDir = currentDir.substring(0, currentDir.lastIndexOf("/"));
    }
    return "";
}

export function createRelativePath(
  pathToBeExported: string,
  pathToBeUpdated: string,
): string {
  let relativePath = relative(
    dirname(pathToBeUpdated),
    dirname(pathToBeExported),
  );
  if(relativePath && relativePath.substr(0, 2) !== '..') {
    relativePath = './' + relativePath
  }

  return `${relativePath ? relativePath : '.'}/${parse(pathToBeExported).name}`;
}

export function isTsFile(filePathWithName: string): boolean {
    return filePathWithName.endsWith(".ts") && !filePathWithName.endsWith(".spec.ts");
}