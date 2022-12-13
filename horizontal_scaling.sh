ping -c 4 167.71.59.132 >> horizontal_scaling_v_400cc_2
CC=400 k6 run verify-solution/scalability_test_2_2.js >> horizontal_scaling_v_400cc_2