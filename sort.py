

TAB = [2,8,4,9,2]

class Sort: 
    def __init__(self, tab):
        self.tab = tab


    # Buble sort
    # Complexity : O(n) 
    def buble(self):
        check = False
        tab = self.tab
        tab_length = len(self.tab)-1

        print('before', tab)

        while check == False:
            check = True
            for item in range(tab_length):
                if tab[item] > tab[item+1]:
                    tab[item], tab[item+1] = tab[item+1], tab[item]
                    check = False

            tab_length-=1 
        print('after', tab)     


    #Selection
    #Complexity O(n^2)
    def selection(self):
        pass



        


sort = Sort(TAB)
sort.buble()