#include <iostream>
using namespace std;

class Shape
{
public:
    virtual void area() = 0;
};

class Rectangle : public Shape
{
private:
    int length, width;

public:
    Rectangle(int l, int w)
    {
        length = l;
        width = w;
    }

    void area()
    {
        cout << "Area = "
             << length * width << endl;
    }
};

int main()
{
    Rectangle r(10, 5);

    r.area();

    return 0;
}