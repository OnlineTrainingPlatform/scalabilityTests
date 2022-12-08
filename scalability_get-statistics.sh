ping -c 4 142.93.107.98 >> scalability_4-1_20_cc
CC=20 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_20_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-1_120_cc
CC=120 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_120_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-1_13_cc
CC=13 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_13_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-1_80_cc
CC=80 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_80_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-1_33_cc
CC=33 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_33_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-1_200_cc
CC=200 k6 run ./get-statistics/scalability_test_4_1.js >> scalability_4-1_200_cc
sleep 5m

ping -c 4 142.93.107.98 >> scalability_4-2_20_cc
CC=20 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_20_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-2_120_cc
CC=120 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_120_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-2_13_cc
CC=13 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_13_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-2_80_cc
CC=80 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_80_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-2_33_cc
CC=33 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_33_cc
sleep 5m
ping -c 4 142.93.107.98 >> scalability_4-2_200_cc
CC=200 k6 run ./get-statistics/scalability_test_4_2.js >> scalability_4-2_200_cc