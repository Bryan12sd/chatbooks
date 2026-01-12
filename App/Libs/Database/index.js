import Realm from 'realm';

class Photo extends Realm.Object {}
Photo.schema = {
  name: 'Photo',
  properties: {
    _id: 'int', // Primary key
    name: 'string',
    path: 'string', // Ruta donde se almacena la foto
  },
  primaryKey: '_id',
};

export default Photo;
