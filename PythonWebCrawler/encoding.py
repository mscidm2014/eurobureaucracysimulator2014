textFile = open("output3.txt", "r+")

for line in textFile:
	line.decode("utf-8").encode("utf-8")
	textFile.write(line + "\n")


textFile.close()