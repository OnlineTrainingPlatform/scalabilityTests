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

export function sucessful_submit_a_solution_for_lightswitch() {
    const exercises = [
        "5d6580aa-8c16-4c3d-9afc-f13ce4fd3c58", // Lightswitch
        "5d6580aa-8c16-4c3d-9afc-f13ce4fd3c58"  // BUzzing Boys
    ]
    const solutions = [
        light_switch_solution_1,
        light_switch_solution_2,
        light_switch_solution_3,
        buzzing_boys_solution_1,
        buzzing_boys_solution_2,
        buzzing_boys_solution_3,
        buzzing_boys_solution_4,
    ]
    const random_exercise = exercises[Math.floor(Math.random() * exercises.length)]
    const random_solution = solutions[Math.floor(Math.random() * solutions.length)]
    const url = `http://142.93.107.98/api/v1/exercises/${random_exercise}/submissions`
    const body = {
        solution: random_solution
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