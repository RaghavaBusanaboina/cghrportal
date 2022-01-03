
def add(nums,target):
    data = {}
    for i , num in enumerate(nums):
        remainder = target - num
        if remainder in data:
            return [i,data[remainder]]
        data[num] = i
print(add(nums=[2,7,11,15],target=9))
print(add(nums=[3,3,1,2,4,3,5,6],target=10))