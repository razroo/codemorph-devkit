import { CommunityPaths } from './community-paths/community-paths';
import { angularTypes } from './../angular/types/types';
import { reactTypes } from '../react';
import { nextjsTypes } from '../nextjs/types/nextjs.types';


export interface Parameters {
  className?: string;
  constantName?: string;
}

export function types(programmingLanguage: string): any[] {
  switch(programmingLanguage) {
    case CommunityPaths.Angular: 
      return angularTypes;
    case CommunityPaths.React: 
      return reactTypes;  
    case CommunityPaths.Nextjs: 
      return nextjsTypes;  
    default: 
      return [];  
  }

}