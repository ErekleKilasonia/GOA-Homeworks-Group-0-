def count_red_beads(n):
    return 0 if n <= 2 else sum([1 for i in range(1,n+1) if i % 3 == 0])
print(count_red_beads(20))