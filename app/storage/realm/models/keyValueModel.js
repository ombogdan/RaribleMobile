// @flow

/**
 * Vehicle Model
 */
export default class KeyValueModel {
    /**
     * Getter of the class
     * @return {string} class name
     */
    static getKeyValueModelName() {
        return KeyValueModel.schema.name;
    }

    /**
     * class {realm} schema
     * @type {Object}
     */
    static schema = {
        'name': 'keyValue',

        'properties': {
            'key': 'string',
            'value': 'string',
        },
    }
}

/**
 * Model Flow type
 * @type {Object}
 */
export type KeyValueModelTypeInterface = {
    key: string,
    value: string
}
