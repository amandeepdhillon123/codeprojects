#include<iostream>
using namespace std;

int main(){
    for(int row=1; row<=5; row++){
        char name ='a' + row -1;
        for(char col='a'; col<='e' ; col++){
            cout << col << " ";
        }
        cout<<endl;
    }
}