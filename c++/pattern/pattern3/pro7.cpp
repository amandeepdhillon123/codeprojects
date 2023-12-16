#include<iostream>
using namespace std;

int main(){
   
    for(int row=1;  row<=5; row++){

        char name='A'+(row-1);
        for(int col=1; col<=5-row; col++)
        {
            cout<<"_"<<" ";
        }
        for(int col=1; col<=row; col++)
        {
            cout<<name<<" ";
        }
        cout<<endl;
    }
    
}