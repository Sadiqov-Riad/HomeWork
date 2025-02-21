include <iostream>

class Vehicle {
    protected:
        char* _brand;
        char* _model;
        float _speed;
        void* _reintr;
    public:
        Vehicle(const char* brand, const char* model, float speed) : _speed(speed), _reintr(nullptr) {
            _brand = new char[strlen(brand) + 1];
            _model = new char[strlen(model) + 1];
    
            strcpy(_brand, brand);
            strcpy(_model, model);
        }
    
        ~Vehicle(){
            delete[] _brand;
            delete[] _model;
        }
    
        virtual void display_info() {
            std::cout << "\nBrand: " << _brand << "\nModel: " << _model << "\nSpeed: " << _speed;
        }
    
        
    
    };
    
    class Car : public Vehicle {
    private:
        int _number_of_doors;
        bool _is_air_conditioning;
    public:
        Car(const char* brand, const char* model, float speed, int number_of_doors, bool is_air_conditioning) : _number_of_doors(number_of_doors), _is_air_conditioning(is_air_conditioning), Vehicle(brand, model, speed) {}
    
        void display_info() override {
            Vehicle::display_info();
            std::cout << "\nNumber of doors: " << _number_of_doors << "\nAir conditioning: " << (_is_air_conditioning ? "Yes" : "No") << std::endl;
        }
    
        Vehicle* StaticCast() {
            return static_cast<Vehicle*>(this);
        }
    
        void PointerToCar(Car* car) {
            _reintr = car;
        }
    
        void ReintrepretCast() {
            Car* car = reinterpret_cast<Car*>(_reintr);
            if (car) {
                car->display_info();
            }
            else {
                std::cout << "Error.";
            }
        }
    };
    
    class Motorcycle : public Vehicle {
    private:
        char* _handleBars;
    public:
        Motorcycle(const char* brand, const char* model, float speed, const char* handleBars) : Vehicle(brand, model, speed) {
            _handleBars = new char[strlen(handleBars) + 1];
    
            strcpy(_handleBars, handleBars);
        }
    
        ~Motorcycle() {
            delete[] _handleBars;
        }
    
        void display_info() override {
            Vehicle::display_info();
            std::cout << "\nHandle bars: " << _handleBars << std::endl;
        }
    };
    
    void DynamicCast(Vehicle* vehicle) {
        Car* car = dynamic_cast<Car*>(vehicle);
    
        if (car) {
            std::cout << "This is a car. Info:\n";
            car->display_info();
        }
        else {
            std::cout << "This is not a car.\n";
        }
    }
    
    int main()
    {
        Car car("KIA","Cerrato", 150, 4, true);
        Motorcycle motorcycle("Kawasaki", "Ninja", 150, "Sport");
        
        //Dynamic cast
    
        std::cout << "Car:\n";
        DynamicCast(&car);
        std::cout << "\nMotorcycle:\n";
        DynamicCast(&motorcycle);
    
        //Static cast
        car.StaticCast()->display_info();
    
        //Reinterpret cast
        car.PointerToCar(&car);
        car.ReintrepretCast();
        //не уверен насчет reinterpret
    }