export enum NextjsTypeNames {
    Generic = 'generic',
    Interface = 'interface',
    Library = 'library'
  }
  
  export enum GlobalNextjsOptionNames {
    IsExported = 'isExported'
  }
  
  export interface NextjsOptionalType {
    name: GlobalNextjsOptionNames, 
    selected: boolean 
  }
  
  export interface NextjsType {
    name: NextjsTypeNames;
    optionalTypes?: NextjsOptionalType[]
  }
  
  export const nextjsTypes: Array<NextjsType> =  [
    {name: NextjsTypeNames.Generic},
    {name: NextjsTypeNames.Interface},
    {name: NextjsTypeNames.Library}
  ];