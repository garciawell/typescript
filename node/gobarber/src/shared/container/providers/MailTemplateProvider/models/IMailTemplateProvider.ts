import IParseMailTemplateDTO from '../dtos/IParseMailTemplate';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
