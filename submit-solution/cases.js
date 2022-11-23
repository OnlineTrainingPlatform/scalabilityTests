import { check } from "k6"
import http from "k6/http"
import { initCases } from "../index.js"
import { two_queries_passing } from "./solutions.js"

export function sucessful_submit_a_solution_for_lightswitch() {
    const light_switch_exercise_id = "29fbf2bb-aa5a-4247-ac06-43c79bad762c"
    const url = `http://172.28.198.118/api/v1/exercises/${light_switch_exercise_id}/submissions`
    const body = {
        solution: two_queries_passing
    }

    const response = http.post(url, JSON.stringify(body), {
        headers: {
            "content-type": "application/json",
        }
    })

    check(response, {
        "sucessful_status: Status code is 201": (res) =>
            res.status === 201
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: sucessful_submit_a_solution_for_lightswitch }
])