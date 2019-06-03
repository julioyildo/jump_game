

TAB = [23, 8, 4, 9, 18, 1, 39, 3, 98, 0, 12]

class Sort: 
    def __init__(self, tab):
        self.tab = tab


    # Buble sort
    # Complexity : O(n) 
    def buble(self):
        """
        Returns:
           The sorted table
        """

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

        return tab     


    #Selection
    #Complexity O(n^2)
    def selection(self):
        """
           Selection sort function
        """

        tab = self.tab
        tab_length = len(self.tab)
        print(tab)
     
        for i in range(tab_length):
            min_item = i
            j = i +1

            while j < tab_length:
                if tab[j] < tab[min_item]:
                    min_item = j
                j+=1
        
            if i != min_item:
                tab[i], tab[min_item] = tab[min_item], tab[i] 
            
        print(tab)
            
            
        



        


sort = Sort(TAB)
# sort.buble()
sort.selection()