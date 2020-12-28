import Transform from '@ember-data/serializer/transform';

export default class BooleanTransform extends Transform {
  deserialize(serialized) {
    return serialized;
  }

  serialize(deserialized) {
    if (deserialized === null || deserialized === undefined)
      return deserialized;
    
    deserialized = deserialized.toString().toUpperCase();
    return deserialized === 'TRUE' || deserialized === 'T' 
    || deserialized === 'YES' || deserialized === 'Y' || deserialized === '1';
  }
}
