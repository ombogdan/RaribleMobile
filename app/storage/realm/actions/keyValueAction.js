// @flow
import _ from 'lodash';
import KeyValueModel from '../models/keyValueModel';
import type {KeyValueModelTypeInterface} from '../models/keyValueModel';

/**
 * Flow type of KeyValueAction
 * @type {Object}
 */
export type KeyValueActionInterface = {
    setSid(sid: string): Promise<KeyValueModel>,
    getSid(): String,
    getSidObject(): KeyValueModelTypeInterface,
    setRegion(region: any): Promise<KeyValueModel>,
    getRegion(): any,
    setToken(token: string): Promise<KeyValueModel>,
    getToken(): String,
    getValue(key: string): String,
    setValue(key: string, value: string): Promise<KeyValueModel>,
    getValueObject(key: string,): KeyValueModelTypeInterface,
    setLastUpdateModel(model: string, date: Date): KeyValueModelTypeInterface;
    getLastUpdateModel(model: String): String;
}

const lastUpdateModelData = {
    vehicle: 'vehicleLastUpdate',
    geozone: 'geozoneLastUpdate',
    route: 'routeLastUpdate',
    cropRotation: 'cropRotation',
    agroOperations: 'agroOperations',
    workType: 'workType',
    culture: 'culture',
    seed: 'seed',
    elevator: 'elevator',
    trailer: 'trailer',
    driver: 'driver',
    plantProtector: 'plantProtector',
    fertilizer: 'fertilizer',
    storeBalance: 'storeBalance',
    store: 'store',
    plantProtectorMoving: 'plantProtectorMoving',
    fertilizerMoving: 'fertilizerMoving',
    seedMoving: 'seedMoving',
    bbchIndex: 'bbchIndex',
    meteo: 'meteo',
}

// all keys
// vehicleTypeInVehicleWork
// cropRotationYear
// timeOfLastUpdateVehicleWorking
// migrationVersion


/**
 * create keyValue realm action to save the keyValue data
 * @param {Realm} realmInstance
 * @return {Object}
 */
export default (realmInstance: any): KeyValueActionInterface => {


     let obj = {
        /**
         * set the KeyValue
         * @return {Promise<KeyValueModelTypeInterface>} created keyValue object
         * @param sid
         */
        setSid: (sid: string): Promise<KeyValueModel> => {
console.log('try set sid! '+sid);
            return new Promise((resolve) => {
                try {
                    let sidRecord = obj.getSidObject();
                    if (!_.isEmpty(sidRecord)){
console.log('update!');
console.log(sidRecord[0]);
console.log('val='+sidRecord[0].value);
                        realmInstance.write(() => {
                            sidRecord[0].value = sid;
                        });
                        resolve(sid)
                    }
                    else {
console.log('create');
                        const keyValue: KeyValueModelTypeInterface = {
                            key: "sid",
                            value: sid,
                        };
                        realmInstance.write(() => {
                            const createdKeyValue = realmInstance.create(KeyValueModel.getKeyValueModelName(), keyValue, true);
// console.log(createdKeyValue);
                            resolve(createdKeyValue);
                        });
                    }
                } catch (error) {
console.log(error);
                    resolve(error);
                }
            });
        },
        /**
         * Get the current keyValue detail
         * @return {KeyValueModelTypeInterface}
         */
        getSidObject: (): KeyValueModelTypeInterface => {
            return realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "sid"');
        },
        /**
        * Get the current keyValue detail
        * @return {String}
        */
        getSid: (): String => {
            let sidObj = realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "sid"');
            if (!_.isEmpty(sidObj)){
                return sidObj[0].value;
            }
            else{
                return;
            }
            //if (_.isEmpty({}))
        },
        setLastUpdateModel: (model: String, date: Date) => {
            const keyValue: KeyValueModelTypeInterface = {
                key: lastUpdateModelData[model],
                value: date,
            };
            return new Promise((resolve, reject) => {
                try {
                    let lastUpdateRecord = obj.getLastUpdateModelObject(lastUpdateModelData[model]);
                    if (!_.isEmpty(lastUpdateRecord)){
console.log('update!');

                        realmInstance.write(() => {
                            lastUpdateRecord[0].value = date;
                        });
                       resolve(date)
                    }
                    else {
console.log('create');
                        const keyValue: KeyValueModelTypeInterface = {
                            key: lastUpdateModelData[model],
                            value: date,
                        };
                        realmInstance.write(() => {
                            const createdKeyValue = realmInstance.create(KeyValueModel.getKeyValueModelName(), keyValue, true);
console.log(createdKeyValue);
                            resolve(createdKeyValue);
                        });
                    }
                }
                catch(error){
console.log(error);
                }
            });
        },
        getLastUpdateModel: (model: String): String => {
            let sidObj = realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "'+lastUpdateModelData[model]+'"');
            if (!_.isEmpty(sidObj)){
                return sidObj[0].value;
            }
            else{
                return '0';
            }
        },
         /**
          * Get the current keyValue detail
          * @return {KeyValueModelTypeInterface}
          */
         getLastUpdateModelObject: (key: String): KeyValueModelTypeInterface => {
             return realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "'+key+'"');
         },
         setRegion: (region: any): Promise<KeyValueModel> => {
             return new Promise((resolve, reject) => {
                 try {
                     let regionRecord = obj.getRegionObject();
                     if (!_.isEmpty(regionRecord)){
                         realmInstance.write(() => {
                             regionRecord[0].value = JSON.stringify(region);
                         });
                         resolve();
                     }
                     else {
                         const keyValue: KeyValueModelTypeInterface = {
                             key: "region",
                             value: JSON.stringify(region),
                         };
                         realmInstance.write(() => {
                             const createdKeyValue = realmInstance.create(KeyValueModel.getKeyValueModelName(), keyValue, true);
                             resolve(createdKeyValue);
                         });
                     }
                 } catch (error) {
console.log(error);
                     resolve(error);
                 }
             });
         },
         getRegionObject: (): KeyValueModelTypeInterface => {
             return realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "region"');
         },
         getRegion: (): String => {
             let regionObj = realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "region"');
             if (!_.isEmpty(regionObj)){
                 return JSON.parse(regionObj[0].value);
             }
             else{
                 return;
             }
         },

         setToken: (token: string): Promise<KeyValueModel> => {
console.log('---------- try set token '+token);
             return new Promise((resolve, reject) => {
                 try {
                     let tokenRecord = obj.getTokenObject();
                     if (!_.isEmpty(tokenRecord)){
                         realmInstance.write(() => {
                             tokenRecord[0].value = token;
                         });
                         resolve();
                     }
                     else {
                         const keyValue: KeyValueModelTypeInterface = {
                             key: "token",
                             value: token,
                         };
                         realmInstance.write(() => {
                             const createdKeyValue = realmInstance.create(KeyValueModel.getKeyValueModelName(), keyValue, true);
                             resolve(createdKeyValue);
                         });
                     }
                 } catch (error) {
console.log(error);
                     resolve(error);
                 }
             });
         },
         getTokenObject: (): KeyValueModelTypeInterface => {
             return realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "token"');
         },
         getToken: (): String => {
             let tokenObj = realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "token"');
             if (!_.isEmpty(tokenObj)){
                 return tokenObj[0].value;
             }
             else{
                 return;
             }
         },
         getValue: (key: string): String => {
             // journalWeightingLastSyncDate
             // menuPermission
             //checkedGeozones
             // expandedGeozones
             // checkedRoutes
             // expandedRoutes
             // checkedVehicles
             // expandedVehicles
             // inspectionReportLastSync
             // zoomVehicle
             // zoomGeozone
             // showLabels
             // elevatorId
             let getValue = realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "{key}"'.replace("{key}", key));
             if (getValue.length>0){
                 return getValue[0].value;
             }
             else{
                 return;
             }
         },
         getValueObject: (key: string): KeyValueModelTypeInterface => {
             return realmInstance.objects(KeyValueModel.getKeyValueModelName()).filtered('key = "{key}"'.replace('{key}', key));
         },

         setValue: (key: string, value: string): Promise<KeyValueModel> => {
// console.log(' value= '+value);
             return new Promise((resolve, reject) => {
                 try {
                     let setValue = obj.getValueObject(key);
                     if (!_.isEmpty(setValue)){
// console.log('update!');
// console.log(setValue[0].value);
// console.log('val='+setValue[0].value);
                         realmInstance.write(() => {
                             setValue[0].value = value;
                             resolve();
                         });

                     }
                     else {
                         console.log('create');
                         const keyValue: KeyValueModelTypeInterface = {
                             key: key,
                             value: value,
                         };
                         console.log(keyValue)
                         realmInstance.write(() => {
                             const createdKeyValue = realmInstance.create(KeyValueModel.getKeyValueModelName(), keyValue, true);
                             resolve(createdKeyValue);
                         });
                     }
                 } catch (error) {
                     console.log("=-=-=-=-=-=-=")
                     console.log(error);
                     resolve(error);
                 }
             });
         },
    };
    return obj;
};
