# Using recursion for a binary search
search_arr = sorted(list(set(input('Enter the list of items to search: ').replace(',','').replace(' ',''))))
search_arr = [int(i) for i in search_arr]
to_find = int(input('Enter the number to find in the list: '))
low,high = 0,(len(search_arr)-1)
count = 0
def binary_search(to_find,low,high,count):
  count += 1
  index = (low+high )//2
  num_at = search_arr[index]
  if num_at == to_find: 
    print(f'{to_find} has been found, it took {count} binary searches to find the number.')
  elif num_at < to_find:
    low = index + 1
    print(f'{to_find} has not been found, now searching indexes {low} to {high}')
    return binary_search(to_find,low,high,count)
  else:
    high = index - 1
    print(f'{to_find} has not been found, now searching indexes {low} to {high}')
    return binary_search(to_find,low,high,count)
    
binary_search(to_find,low,high,count)