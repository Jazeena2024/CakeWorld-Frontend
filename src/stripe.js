import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51TXIx866Wmg2KMEPZrbsj0wKaNFBZ3a71dzBrpaI1WlelpNIhYjgwY0bOYSGRDVw3uhbb7auxpQke8Mdvf8QlM8K006KfubSO2"
);