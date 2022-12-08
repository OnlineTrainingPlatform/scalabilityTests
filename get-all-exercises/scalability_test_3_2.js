import { sucessful_get_all_exercises } from "./cases.js";

const concurrentUsers = __ENV.CC;

/* 20 groups must be able to get all exercises in the span of five minutes
 *   with an average response time less than of 0.1 seconds. */
export const options = {
    scenarios: {
        constant_request_rate: {
          // A fixed number of iterations are executed in a specified period of time.
          executor: 'constant-arrival-rate',
          rate: concurrentUsers * 10,
          // By maing the timeunit and duration the same the number of iterations (rate) will only happen once
          duration: '5m',
          timeUnit: '5m',
          preAllocatedVUs: concurrentUsers,
          maxVUs: concurrentUsers,
        },
      },
}

export default () => {
    sucessful_get_all_exercises();
}