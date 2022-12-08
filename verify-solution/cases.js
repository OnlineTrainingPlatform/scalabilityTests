import { check } from "k6"
import http from "k6/http"
import { initCases } from "../index.js"
import {
    light_switch_solution_1,
    light_switch_solution_2,
    light_switch_solution_3,
    buzzing_boys_solution_1,
    buzzing_boys_solution_2,
    buzzing_boys_solution_3,
    buzzing_boys_solution_4,
} from "./solutions.js"

export function successful_verify_random_lightswitch_or_buzzing_boys_solution() {
    const url = `http://142.93.107.98/api/v1/verifiers/verifyta`
    const solutions = [ 
        light_switch_solution_1,
        light_switch_solution_2,
        light_switch_solution_3,
        buzzing_boys_solution_1,
        buzzing_boys_solution_2,
        buzzing_boys_solution_3,
        buzzing_boys_solution_4,
    ]

    const queries = [
        [
            {
                "query": "A[] Switch.x < 4"
            },
            {
                "query": "A[] Switch.x < 10"
            }
        ],
        [
            {
                "query": "E<> not (Boy0.Available && Boy1.Busy)"
            },
            {
                "query": "E<> Observer0.Finished && Observer0.call_count == 4"
            },
            {
                "query": "E<> not deadlock"
            }
        ],
        [
            {
                "query": "E<> not (Boy0.Available && Boy1.Busy)"
            },
            {
                "query": "E<> Observer0.Finished && Observer0.call_count == 4"
            },
            {
                "query": "E<> not deadlock"
            },
            {
                "query": "A[] Switch.x < 4"
            },
            {
                "query": "A[] Switch.x < 10"
            }
        ]
    ]

    const body = {
        "solution": solutions[Math.floor(Math.random() * solutions.length)],
        "queries": queries[Math.floor(Math.random() * queries.length)]
    }

    const response = http.post(url, JSON.stringify(body), {
        headers: {
            "content-type": "application/json",
        }
    })

    check(response, {
        "sucessful_status: Status code is 200": (res) =>
            res.status === 200
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: successful_verify_random_lightswitch_or_buzzing_boys_solution }
])