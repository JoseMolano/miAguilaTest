import Container, { Service } from 'typedi';
import MongoMW from '../middleware/mongoMW';

const mongoMW = Container.get(MongoMW);


@Service()
class TripsService {
  
  public getTotalTrips() {
    return mongoMW.queryTotalTrips()
      .then((trips: []) => {
        return trips.length;
      })
  }

  public getTotalTripsByCity(city: string) {
    return mongoMW.queryTotalTripsByCity(city)
      .then((trips: []) => {
        return trips.length;
      })
  }

  public postTrip(data) {
    return mongoMW.postTrip(data)
      .then((trip: any) => {
        return trip.ops[0];
      })
  }

  public putTrip(data) {
    const createdAt = data.createdAt;
    return mongoMW.putTrip(data, createdAt)
      .then((trip: any) => {
        return trip;
      })
  }
}

export default TripsService;