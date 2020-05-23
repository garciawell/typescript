import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseTemplateDTO from '../dtos/IParseMailTemplate';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
