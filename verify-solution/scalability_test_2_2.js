import { sucessful_verify_lightswitch_with_all_queries_passing } from "./cases.js";

/* 20 groups must be able to verify their solution five in the span of 18 minutes 
 *   with an average response time less than ten seconds. */
export const options = {
    scenarios: {
        constant_request_rate: {
          // A fixed number of iterations are executed in a specified period of time.
          executor: 'constant-arrival-rate',
          rate: 120,
          // By maing the timeunit and duration the same the number of iterations (rate) will only happen once
          duration: '18m',
          timeUnit: '18m',
          preAllocatedVUs: 120,
          maxVUs: 120,
        },
      },
}

export default () => {
    sucessful_verify_lightswitch_with_all_queries_passing();
}