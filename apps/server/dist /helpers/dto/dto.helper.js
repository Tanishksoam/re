"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoHelper = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
require("reflect-metadata");
const utility_1 = require("../utility");
var DtoHelper;
(function (DtoHelper) {
    function apply(className, target) {
        return (0, class_transformer_1.plainToClass)(className, target !== null && target !== void 0 ? target : {}, {
            excludeExtraneousValues: true,
        });
    }
    DtoHelper.apply = apply;
    function validationFactory(metadataKey, model, source) {
        return function (target, propertyName, descriptor) {
            Reflect.defineMetadata(metadataKey, model, target, propertyName);
            const method = descriptor.value;
            descriptor.value = async function () {
                const model = Reflect.getOwnMetadata(metadataKey, target, propertyName);
                const [request, response] = arguments;
                const plain = request[source];
                const instance = (0, class_transformer_1.plainToInstance)(model, plain);
                const errors = await (0, class_validator_1.validate)(instance);
                if (errors.length > 0) {
                    response.status(400).json(transformValidationErrorsToJSON(errors));
                    return;
                }
                const keys = Object.getOwnPropertyNames(new model());
                const body = {};
                for (const key of keys) {
                    if (utility_1.Utility.isDefined(plain[key])) {
                        body[key] = plain[key];
                    }
                }
                request.body = body;
                return method.apply(this, arguments);
            };
        };
    }
    DtoHelper.validationFactory = validationFactory;
    function transformValidationErrorsToJSON(errors) {
        return errors.reduce((p, c) => {
            if (!c.children || !c.children.length) {
                p[c.property] = Object.keys(c.constraints).map(key => c.constraints[key]);
            }
            else {
                p[c.property] = transformValidationErrorsToJSON(c.children);
            }
            return p;
        }, {});
    }
})(DtoHelper || (exports.DtoHelper = DtoHelper = {}));
//# sourceMappingURL=dto.helper.js.map