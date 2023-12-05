#include<iostream>
using namespace std;

int main(){
    int i, num, last, prev, current;
  cin >> num;
    last=0;
    prev=1;
    for(i=1; i<num; i=i+1)
    {
        current= prev+last;
        last=prev;
        prev=current;
           cout << current;
    }
 
}