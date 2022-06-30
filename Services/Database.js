import Realm from "realm";

// Declare Schema
class MileSchema extends Realm.Object {}
MileSchema.schema = {
    name: 'Mile',
    properties: {
        carNumber:'string',
        route: 'string',
        startM:  'int',
        endM: 'int'
    }
};
// Create realm
let realm = new Realm({schema: [MileSchema], schemaVersion: 1});
  //function to retrieve items
  let getAllRecords = () => {
    return realm.objects('Mile');
}//filter a record
let filterRecord=(y)=>{
    return realm.objects('Mile').filtered(`startM=>${y}`)
}
//add newRecord
let addRecord = (_carNumber, _route,_startM, _endM) => {
    realm.write(() => {
        const mile = realm.create('Mile', {
            carNumber:_carNumber,
            route: _route,
            startM:_startM,
            endM:_endM,
        });
    });
}//delete an object
let deleteOne=(name)=>{
    realm.write(() => {
        // Delete the dog from the realm.
        realm.delete(name);
        // Discard the reference.
        name = null;
      });
}
export{
    getAllRecords,
    addRecord,
    filterRecord,
    deleteOne
}
// Export the realm
export default realm;