MOV AL, 00H
MOV SI, 500H
MOV [SI], AL
INC SI
ADD AL, 01H
MOV [SI], AL
MOV CX, [600H]
SUB CX, 2H
LOOP1:
MOV AL, [SI-1]
ADD AL, [SI]
INC SI
MOV [SI], AL
LOOP LOOP1
HLT