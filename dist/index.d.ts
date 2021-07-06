export declare abstract class JSONUtility {
    static stringify(value: any): string;
    static parse(value: string): any;
    static isJson(str: any): boolean;
    private static getCircularReplacer;
}
