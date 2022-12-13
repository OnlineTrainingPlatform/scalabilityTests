ping -c 4 167.71.59.132 >> horizontal_scaling_v_mannager_200cc_8
CC=200 k6 run verify-solution/scalability_test_2_2.js >> horizontal_scaling_v_mannager_200cc_8
