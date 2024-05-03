import { Constraints, UserData } from './accessControl.type';
type CheckOptions = {
    constraints: Constraints;
    userData: UserData;
};
export declare class AccessControlValidator {
    constructor();
    check({ userData, constraints }: CheckOptions): Promise<void | never>;
    private checkRole;
}
export {};
