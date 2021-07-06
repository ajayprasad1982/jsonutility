import { isEmpty } from 'lodash';
export abstract class JSONUtility {
  static stringify(value: any): string {
    if (isEmpty(value)) {
      return '{}';
    }
    return JSON.stringify(value, JSONUtility.getCircularReplacer());
  }
  static parse(value: string): any {
    return JSON.parse(value || '{}');
  }
  static isJson(str: any) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  private static getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
}
