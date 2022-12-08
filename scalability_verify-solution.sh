ping -c 4 142.93.107.98 >> scalability_2-1_20_cc
CC=20 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_20_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-1_120_cc
CC=120 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_120_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-1_13_cc
CC=13 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_13_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-1_80_cc
CC=80 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_80_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-1_33_cc
CC=33 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_33_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-1_200_cc
CC=200 k6 run verify-solution/scalability_test_2_1.js >> scalability_2-1_200_cc

sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_20_cc
CC=20 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_20_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_120_cc
CC=120 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_120_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_13_cc
CC=13 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_13_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_80_cc
CC=80 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_80_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_33_cc
CC=33 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_33_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_2-2_200_cc
CC=200 k6 run verify-solution/scalability_test_2_2.js >> scalability_2-2_200_cc