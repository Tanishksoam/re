import { ClassConstructor } from 'class-transformer';
import 'reflect-metadata';
export declare namespace DtoHelper {
    function apply<ClassType, TargetType extends ClassType>(className: ClassConstructor<ClassType>, target: TargetType[]): ClassType[];
    function apply<ClassType, TargetType extends ClassType>(className: ClassConstructor<ClassType>, target: TargetType): ClassType;
    function validationFactory<T>(metadataKey: Symbol, model: {
        new (...args: any[]): T;
    }, source: 'body' | 'query'): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => void;
}
