import { sucessful_get_statistics } from "./cases.js";

const concurrentUsers = __ENV.CC;

/* 20 groups must be able to submit their solutions within the span of ten minutes
 *   with an average response time less than ten seconds.. */
export const options = {
    scenarios: {
        constant_request_rate: {
          // A fixed number of iterations are executed in a specified period of time.
          executor: 'constant-arrival-rate',
          // Amount of iterations per "timeunit"
          rate: concurrentUsers * 10,
          // By maing the timeunit and duration the same the number of iterations (rate) will only happen once
          duration: '10m',
          timeUnit: '10m',
          preAllocatedVUs: concurrentUsers,
          maxVUs: concurrentUsers,
        },
      },
}

export default () => {
  sucessful_get_statistics();
}