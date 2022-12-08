import { check } from "k6"
import http from "k6/http"
import { initCases } from "../index.js"

export function sucessful_get_statistics() {
    const exercises = [
        "5d6580aa-8c16-4c3d-9afc-f13ce4fd3c58", // Lightswitch
        "5d6580aa-8c16-4c3d-9afc-f13ce4fd3c58"  // BUzzing Boys
    ]
    const random_exercise = exercises[Math.floor(Math.random() * exercises.length)]
    const url = `http://142.93.107.98/api/v1/exercises/${random_exercise}/statistics`
    const response = http.get(url)

    check(response, {
        "sucessful_status: Status code is 200": (res) =>
            res.status === 200
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: sucessful_get_statistics }
])