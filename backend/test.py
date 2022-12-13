import sys

# ? Receive data from node js
dataReceivedFromNodeJs = sys.stdin.readline()

# ? Send data to node js
print(dataReceivedFromNodeJs)
sys.stdout.flush()
