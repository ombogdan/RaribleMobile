// @flow
import Realm from "realm";

import type { KeyValueActionInterface } from "./actions/keyValueAction";
import keyValueAction from "./actions/keyValueAction";
import KeyValueModel from "./models/keyValueModel";


const realmInstance = new Realm({
  schema: [
    KeyValueModel,
  ],
  schemaVersion: 2,
});


/**
 * Available keyValue action
 * @type {KeyValueActionInterface}
 */
export const keyValueActions: KeyValueActionInterface = keyValueAction(realmInstance);
