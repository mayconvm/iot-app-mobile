import Realm from 'realm';


class AbstractDomain {
  constructor(props, entity) {
    // super(ViewPropTypess);
    
    this.entity = entity;
    this.schema = this.entity.schema;

    this.initDataBase();
  }

  newEntity() {
    return new this.entity;
  }

  saveEntity(entity) {
    
    console.log(this.db);


    this.db.write(() => {
      this.db.create(this.schema.name, entity);
    });

    console.log("SAVE!!");
  }

  initDataBase() {
    const that = this;
    console.log("-->", this.schema);

    Realm.open({schema: [this.schema]})
    .then(realm => {
      that.db = realm;

      console.log("REALM OK");
      // Create Realm objects and write to local storage
      // realm.write(() => {
      //   const myCar = realm.create('Car', {
      //     make: 'Honda',
      //     model: 'Civic',
      //     miles: 1000,
      //   });
      //   myCar.miles += 20; // Update a property value
      // });

      // // Query Realm for all cars with a high mileage
      // const cars = realm.objects('Car').filtered('miles > 1000');

      // // Will return a Results object with our 1 car
      // cars.length // => 1

      // // Add another car
      // realm.write(() => {
      //   const myCar = realm.create('Car', {
      //     make: 'Ford',
      //     model: 'Focus',
      //     miles: 2000,
      //   });
      // });

      // // Query results are updated in realtime
      // cars.length // => 2
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export default AbstractDomain;
