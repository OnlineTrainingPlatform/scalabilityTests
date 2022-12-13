ping -c 4 142.93.107.98 >> horizontal_scaling_1_4
CC=200 k6 run verify-solution/scalability_test_2_2.js >> horizontal_scaling_1_4