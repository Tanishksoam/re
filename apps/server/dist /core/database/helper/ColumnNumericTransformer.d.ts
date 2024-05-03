import { ColumnOptions } from 'typeorm';
export declare class ColumnNumericTransformer {
    to(data: number): number;
    from(data: string): number;
}
export declare function ColumnNumeric(options?: ColumnOptions): PropertyDecorator;
