import { determineType } from './determine-type';

describe('determineType', () => {
  it('should determine the type for code generation', () => {
    
    const mockTemplateParameters = [
      {
        defaultValue: 'libs/ui/common/src/lib',
        description: 'File path for name file(s)',
        inputType: 'text',
        name: 'nameFilePath',
        paramType: 'filePath',
        type: 'component'
      },
      {
        defaultValue: 'name',
        description: 'Value for name',
        inputType: 'text',
        name: 'name',
        paramType: 'templateVariable',
        type: null
      }
    ];
    const mockFilePath = '{nameFilePath}/{name}.component.spec.ts';
    
    const result = determineType(mockFilePath, mockTemplateParameters);
    expect(result).toEqual('component');
  });
})

