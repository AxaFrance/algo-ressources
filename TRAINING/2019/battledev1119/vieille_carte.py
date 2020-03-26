import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

# lines = [
#     'A',
#     'E M',
#     'D L',
#     'A M',
#     'F K',
#     'K L',
#     'I L',
#     'C G',
#     'F I',
#     'E N',
#     'A J',
#     'H J',
#     'M N',
#     'B K',
#     'H I',
#     'C D',
#     'J N',
#     'B H',
#     'E G',
#     'B C',
#     'D G',
#     'A F',
# ]

# lines = [
#     'A',
#     'Earaindir Rithralas',
#     'Hilad Fioldor',
#     'Delanduil Rithralas',
#     'Urarion Elrebrimir',
#     'Elrebrimir Fioldor',
#     'Eowul Fioldor',
#     'Beladrieng Anaramir',
#     'Urarion Eowul',
#     'Earaindir Sanakil',
#     'Delanduil Isilmalad',
#     'Earylas Isilmalad',
#     'Rithralas Sanakil',
#     'Unithral Elrebrimir',
#     'Earylas Eowul',
#     'Beladrieng Hilad',
#     'Isilmalad Sanakil',
#     'Unithral Earylas',
#     'Earaindir Anaramir',
#     'Unithral Beladrieng',
#     'Hilad Anaramir',
#     'Delanduil Urarion',
# ]

temple_perdu = lines[0]
lines = lines[1:]
connections = [line.split() for line in lines]

magic = {
    'E': 63834, 'G': 62590, 'L': 61987, 'M': 62785, 'C': 63124,
    'H': 63910, 'D': 63073, 'F': 61932, 'B': 62024, 'N': 64736,
    'J': 62470, 'A': 65252, 'I': 63769, 'K': 64249
}
magic_set = set(magic.values())

nodes = set([
    item
    for line in connections
    for item in line
])

for current_node in nodes:
    paths = {}
    for node in nodes:
        paths[node] = 1
    paths[current_node] = 2

    for i in range(10):  # 10 = 2 * taille du graph
        next_paths = {}
        for node in nodes:
            next_paths[node] = 0
        for node1, node2 in connections:
            next_paths[node1] += paths[node2]
            next_paths[node2] += paths[node1]
        paths = next_paths

    values = set(paths.values())
    # print(current_node, paths)
    if values == magic_set:
        magic_number = magic[temple_perdu]
        for node in paths:
            if paths[node] == magic_number:
                print(node)
                exit(0)
