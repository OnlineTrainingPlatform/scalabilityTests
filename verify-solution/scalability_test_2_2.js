import { successful_verify_random_lightswitch_or_buzzing_boys_solution } from "./cases.js";

const concurrentUsers = __ENV.CC;

/* 20 groups must be able to verify their solution five in the span of 18 minutes 
 *   with an average response time less than ten seconds. */
export const options = {
    scenarios: {
        constant_request_rate: {
          // A fixed number of iterations are executed in a specified period of time.
          executor: 'constant-arrival-rate',
          rate: concurrentUsers * 15,
          // By maing the timeunit and duration the same the number of iterations (rate) will only happen once
          duration: '18m',
          timeUnit: '18m',
          preAllocatedVUs: concurrentUsers,
          maxVUs: concurrentUsers,
        },
      },
}

export default () => {
  successful_verify_random_lightswitch_or_buzzing_boys_solution();
}