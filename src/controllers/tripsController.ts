import { APIGatewayEvent, Callback, Context} from "aws-lambda";
import { Container } from 'typedi';
import TripsService from "../services/tripService";
import ResponseJsonHelper from "../helpers/responseJsonHelper";

const tripService = Container.get(TripsService)

const tripsController = {
  getTotalTrips: (event: APIGatewayEvent, context: Context, cb: Callback) => {
    tripService.getTotalTrips()
      .then((count) => {
        cb(null, ResponseJsonHelper.okResponse({totalTrips: count}, false));
      })
      .catch(error => {
        console.log(error);
        cb(null, ResponseJsonHelper.errorResponse(500));
      })
  },

  getTotalCityTrips: (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const { city } = event.pathParameters;
    const newCity = decodeURIComponent(city);
    tripService.getTotalTripsByCity(newCity)
      .then((count) => {
        cb(null, ResponseJsonHelper.okResponse({totalTrips: count}, false));
      })
      .catch(error => {
        console.log(error);
        cb(null, ResponseJsonHelper.errorResponse(500));
      })
  },

  postTrip: (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const data = JSON.parse(event.body);
    tripService.postTrip(data)
      .then((trip) => {
        cb(null, ResponseJsonHelper.okResponse({newTrip: trip}, false));
      })
      .catch(error => {
        console.log(error);
        cb(null, ResponseJsonHelper.errorResponse(500));
      })
  },

  putTrip: (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const data = JSON.parse(event.body);
    tripService.putTrip(data)
      .then((trip) => {
        cb(null, ResponseJsonHelper.okResponse({modifiedTrip: trip}, false));
      })
      .catch(error => {
        console.log(error);
        cb(null, ResponseJsonHelper.errorResponse(500));
      })
  },
};

export default tripsController