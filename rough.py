
# def add(nums,target):
#     data = {}
#     for i , num in enumerate(nums):
#         remainder = target - num
#         if remainder in data:
#             return [i,data[remainder]]
#         data[num] = i
# print(add(nums=[2,7,11,15],target=9))
# print(add(nums=[3,3,1,2,4,3,5,6],target=10))

class Human:
    def legs(self):
        print('human class hands method called')
    def face(self):
        print('human class face method called')
class girl:
    def legs(self):
        print('girl class hands method called')
    def face(self):
        print('girl class face method called')
class Man(girl,Human):
    def hands(self):
        print('man class hands method called')
    def __legs(self):
        print('man class legs method called')
    def me(self,target):
        print(target,'1')
    def me(self,target,new):
        print(target,new,'2')


obj = Man()
# print(obj._Man__legs())
print(obj.me(1))