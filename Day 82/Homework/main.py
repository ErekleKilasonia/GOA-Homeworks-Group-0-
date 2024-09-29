my_dict = {"a":1,"c":5,"b":2}
# def keys_to_list(dict):
#     return sorted([key for key,item in dict.items()])
# print(keys_to_list(my_dict))

# def min_keys(dict):
#     min = 0
#     min_key = ""
#     counter = 0
#     for key,item in dict.items():
#         if counter == 0:
#             counter += 1
#             min = item
#             min_key = key
#         if item < min:
#             min = item
#             min_key = key
#     return min_key

# print(min_keys(my_dict))

# def comb(dict1,dict2):
#     dict1.update(dict2)
#     return dict1

# print(comb(my_dict,{"d":4}))

# def key_in_dict(dict,keyy):
#     return keyy in dict


# print(key_in_dict(my_dict,"b"))


# def pop_from_dict(dict, keyy):
#     return dict.pop(keyy)

# print(pop_from_dict(my_dict,"a"))

# def manual_keys(dict):
#     return [key for key in dict.keys()]
# print(manual_keys(my_dict))

# def manual_values(dict):
#     return [value for value in dict.values()]
# print(manual_values(my_dict))

# def manual_items(dict):
#     return [(key,value) for key,value in dict.items()]

# print(manual_items(my_dict))


# def manual_get(dict,key,els):
#     if key in dict:
#         return dict[key]
#     else:return els
# print(manual_get(my_dict,"f","not found"))



# def manual_pop(dict,keyy):
#     new_dict = {}
#     for key,value in dict.items():
#         if keyy != key:
#             new_dict.setdefault(key,value)
#     return new_dict

# print(manual_pop(my_dict,"b"))