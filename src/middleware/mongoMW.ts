import { Service } from "typedi";
import { MongoClient } from 'mongodb';

const BD_URL = 'mongodb://andres:andres@miaguila-shard-00-00-0czxg.mongodb.net:27017,miaguila-shard-00-01-0czxg.mongodb.net:27017,miaguila-shard-00-02-0czxg.mongodb.net:27017/miaguila?ssl=true&replicaSet=miaguila-shard-0&authSource=admin&retryWrites=true&w=majority';

@Service()
class MongoMW {
  
  public queryTotalTrips() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(BD_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if (err) {
          console.error(err)
          reject(err);
        }
        client.db('miaguila')
          .collection('trips')
          .find()
          .toArray()
          .then((trips) => {
            resolve(trips);
            client.close();
          }) 
        });
    });
    
  }

  public queryTotalTripsByCity(city: string) {

    return new Promise((resolve, reject) => {
      MongoClient.connect(BD_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if (err) {
          console.error(err)
          reject(err);
        }
        client.db('miaguila')
          .collection('trips')
          .find({city: {name: `${city}`}})
          .toArray()
          .then((trips) => {
            resolve(trips);
            client.close();
          }) 
        });
    });
    
  }

  public postTrip(trip) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(BD_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if (err) {
          console.error(err)
          reject(err);
        }
        client.db('miaguila')
          .collection('trips')
          .insertOne(trip)
          .then((trips) => {
            resolve(trips);
            client.close();
          }) 
        });
    });
  }

  public putTrip(trip, createdAtDate) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(BD_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if (err) {
          console.error(err)
          reject(err);
        }
        client.db('miaguila')
          .collection('trips')
          .updateOne({createdAt: createdAtDate}, {'$set': trip})
          .then((trips) => {
            trips.matchedCount && trips.modifiedCount ? resolve(true) : reject(false);
            client.close();
          }) 
        });
    });
  }
}

export default MongoMW;
