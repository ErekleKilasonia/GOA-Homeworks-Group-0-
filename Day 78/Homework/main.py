# def merge_lists(list1,list2):
#     for i in list2:
#         if i not in list1:
#             list1.append(i)
#     return list1

# print(merge_lists([1,2,3],[3,4,5]))


# def square(listn):
#     return [i**2 for i in listn]
# print(square([1,2,3,4,5,6]))


# def odds(listn):
#     return [i for i in listn if i % 2 == 1]

# print(odds([1,2,3,4,5,6]))


# def commons(list1,list2):
#     listn = []
#     for i in list1:
#         if i in list2:
#             listn.append(i)
#     return listn

# print(commons([1,2,3,4],[2,3,5]))


# def remove_duplicates(lst):
#     res = []
#     for i in lst:
#         if i not in res:
#             res.append(i)
#     return res

# print(remove_duplicates([1, 2, 3, 2, 4, 1]))

# def merge_dicts(dict1, dict2):
#     dict1.update(dict2) 
#     return dict1

# print(merge_dicts({"a":1,"b":3},{"b":2,"c":4}))

# def square_values(dict):
#     return {key: item**2 for key, item in dict.items()}

# print(square_values({'a': 1, 'b': 2, 'c': 3}))

# def dict_keys_to_list(dct):
#     return list(dct.keys())

# print(dict_keys_to_list({'a': 1, 'b': 2, 'c': 3}))

# def word_frequency_counter(text):
#     text = text.split()
#     dict = {}
#     for i in text:
#         i = i.lower()
#         if i in dict:
#             dict[i] += 1
#         else:
#             dict[i] = 1
#     return dict
# print(word_frequency_counter("hello to everyone everyone"))

# def filter_dict_by_value(dct, input):
#     return {key: item for key, item in dct.items() if item == input}


# print(filter_dict_by_value({'a': 1, 'b': 2, 'c': 3, 'd': 2}, 2))

# from math import factorial


# def fact(num):
#     return factorial(num)
# print(fact(5))

# def palindrome(strng):
#     return strng == strng[::-1]

# print(palindrome("radar"))


# def anagram(str1,str2):
#     return sorted(str1.replace(" ","")) == sorted(str2.replace(" ",""))


# print(anagram("anagram","margana"))



# def reverse(strng):
#     return " ".join(strng.split()[::-1])

# print(reverse("hello world!!!"))

# def to_do_list():
#     listn= []
    
#     def add(task):
#         listn.append(task)
    
#     def remove(task):
#         listn.remove(task)
    
#     def view():
#         return listn
    
#     return add, remove, view
# add,remove,view = to_do_list()

# add("wake up")
# print(view())

# def key_in_dict(dict,key):
#     return key in dict

# print(key_in_dict({"a":1,"b":2},"a"))

# def sum_item(dict):
#     return {key: sum(item) for key,item in dict.items() }
# print(sum_item({'a': [1, 2], 'b': [2, 3], 'c': [3, 4]}))

# def split_list(listn,value):
#     list1 = []
#     list2 = []
#     for i in listn:
#         if i < value:
#             list1.append(i)
#         else:
#             list2.append(i)
#     return list1,list2

# print(split_list([1, 2, 3, 4, 5, 6],4))


# def unique(list1,list2):
#     counter = 0
#     listn = []
#     for i in list1:
#         if i not in listn and i in list2:
#             counter += 1
#             listn.append(i)
#     return counter

# print(unique([1, 2, 3, 4],[3, 4, 5, 6]))
