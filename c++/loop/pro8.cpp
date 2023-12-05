#include<iostream>
using namespace std;

int main(){
   int i, n,fact;
   cin >> n;
   fact=1;

   for( i=1; i<=n; i=i+1) 
   {
    fact= fact * i;

   }
   cout << fact;
}