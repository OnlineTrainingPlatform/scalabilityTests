ping -c 4 142.93.107.98 >> scalability_1-2_33_cc
CC=33 k6 run submit-solution/scalability_test_1_2.js >> scalability_1-2_33_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_1-2_200_cc
CC=200 k6 run submit-solution/scalability_test_1_2.js >> scalability_1-2_200_cc