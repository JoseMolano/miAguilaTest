import tripsController from "./src/controllers/tripsController";


exports.getTrips = tripsController.getTotalTrips;
exports.getCityTrips = tripsController.getTotalCityTrips;
exports.postTrip = tripsController.postTrip;
exports.putTrip = tripsController.putTrip;
