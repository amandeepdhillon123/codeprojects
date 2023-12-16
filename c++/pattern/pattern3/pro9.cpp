#include<iostream>
using namespace std;

int main(){
   
    for(int row=1;  row<=5; row++){

     
        for(int col=1; col<=5-row; col++)
        {
            cout<<"_"<<" ";
        }
        for(int col=1; col<=row; col++)
        {
            char name = 'E'-(col-1);
            
            cout<<name<<" ";
        }
        cout<<endl;
    }
    
}