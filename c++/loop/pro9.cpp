#include<iostream>
using namespace std;

int main(){
   int i, n;
   cin >> n;

   if(n<2)
   {
    cout<<"not prime number";
    return 0;
   }
   else{
    for( i=2; i<n; i=i+1)
    {
        if(n%i==0)
        {
            cout<<"not prime number";
            return 0;
        }
        
    }
    cout<<"prime";
   }
  
}