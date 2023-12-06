#include<iostream>
using namespace std;

int main(){
    int count = 1;
    for(int row=1; row<=5; row++){
        
        for(char col=1; col<=5 ; col++){
            cout << count << " ";
            count = count+ 1;
        }
        cout<<endl;
    }
}