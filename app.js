{
  //1-topshiriq
  class Student {
    constructor(fName, lName, pNum, add) {
      this.firstName = fName;
      this.lastName = lName;
      this.phoneNumber = pNum;
      this.address = add;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    info() {
      return `Ismi: ${this.firstName};\n Familiyasi: ${this.lastName};\n Telefon raqami: ${this.phoneNumber};\n Yashash manzili: ${this.address}`;
    }
  }

  let student = new Student(
    "Shoxruhbek",
    "Valiyev",
    "+99895056608",
    "Yunusobod"
  );

  console.log(student.getFullName());
  console.log(student.info());
}

{
  //2-topshiriq
  class Teacher {
    constructor(fName, lName, add, wage, level) {
      this.firstName = fName;
      this.lastName = lName;
      this.address = add;
      this.salaray = wage;
      this.level = level;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    description() {
      return `Ismi: ${this.firstName};\n Familiya: ${this.lastName};\n Manzil: ${this.address}\n Maoshi: ${this.salaray}\n Darajasi: ${this.level}`;
    }
  }

  let englishTeacher = new Teacher(
    "Eshmat",
    "Toshmatov",
    "Qo`qon",
    "1_600_000 so`m",
    "Advanced"
  );

  console.log(englishTeacher.getFullName());
  console.log(englishTeacher.description());
}

{
  //3-topshiriq
  class Group {
    constructor(name, room, level, sCount, teacher) {
      this.name = name;
      this.room = room;
      this.level = level;
      this.studentCount = sCount;
      this.teacher = teacher;
    }
    fullInformation() {
      return `Guruh nomi: ${this.name};\n Xonasi: ${this.room};\n Darajasi: ${this.level};\n O'quvchi soni: ${this.studentCount};\n O'qituvchi: ${this.teacher}`;
    }
  }

  let group = new Group("N83", "Stack", "Intermediate", "18", "Bobur Rosulov");

  console.log(group.fullInformation());
}

{
  //4-topshiriq
  class Payment {
    constructor(from, to, amount, date, status) {
      this.giver = from;
      this.taker = to;
      this.amount = amount;
      this.date = date;
      this.status = status;
    }
    getStatus() {
      this.status = true;
      return "To`lov muvaffaqtiyatli amalga oshirildi";
    }
    getConfirmation() {
      return `Kimdan: ${this.giver};\n Kimga: ${this.taker};\n Miqdor: ${
        this.amount
      };\n Sanasi: ${new Date(this.date).toLocaleString()};\n Holati: ${
        this.status ? "Tasdiqlangan" : "Tadiqlanmagan"
      }`;
    }
  }

  let payment = new Payment("John", "Tom", 50_000, 1234564564654, false);

  console.log(payment.getConfirmation());
  payment.getStatus();
  console.log(payment.getConfirmation());
}

{
  //5-topshiriq
  class Salary {
    constructor(to, amount, type, date, status) {
      this.receiver = to;
      this.amount = amount;
      this.type = type;
      this.date = date;
      this.status = status;
    }
    getInfo() {
      return `Qabul qiluvchi: ${this.receiver};\n Miqdor: ${
        this.amount
      }\n Turi: ${this.type};\n Sanasi: ${new Date(
        this.date
      ).toLocaleString()};\n Holati: ${
        this.status ? "Tasdiqlangan" : "Tasdiqlanmagan"
      }`;
    }
  }

  let salary = new Salary("Mike", 150, "USD", 1231321321321, true);

  console.log(salary.getInfo());
}

{
  //6-topshiriq
  class Organization {
    constructor(name, founder, add, emCount) {
      this.name = name;
      this.founder = founder;
      this.address = add;
      this.employeeCount = emCount;
    }
    getInfo() {
      return `Nomi: ${this.name};\n Asoschisi: ${this.founder};\n Manzil: ${this.address};\n Ishchi soni: ${this.employeeCount}`;
    }
  }

  let organization = new Organization(
    "Najot Ta'lim",
    "Temurbek Adhamov",
    "Chilonzor",
    "+400"
  );

  console.log(organization.getInfo());
}
// Qo'shimcha masalalar
{
  //7-topshiriq
  class Check {
    constructor(amount) {
      this.amount = amount;
    }
    deposit(num) {
      try {
        if (typeof num !== "number") {
          throw new TypeError(
            "Iltimos kiritilgan pul miqdori raqamlardan tashkil topganiga e`tibor bering!"
          );
        } else {
          this.amount += num;
          return `Kartangizga ${num} uzs miqdorida pul tashlandi`;
        }
      } catch (e) {
        return e.message;
      }
    }
    withdraw(num) {
      try {
        if (typeof num !== "number") {
          throw new TypeError(
            "Iltimos kiritilgan pul miqdori raqamlardan tashkil topganiga e`tibor bering!"
          );
        } else {
          this.amount -= num;
          return `Kartangizdan ${num} uzs miqdorida pul yechib olindi`;
        }
      } catch (e) {
        return e.message;
      }
    }
  }

  let check = new Check(100);

  console.log(check.deposit(50));
  console.log(check);
  console.log(check.withdraw(70));
  console.log(check);
}

{
  //8-topshiriq
  function Product(title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.addStock = (num) => {
      return (this.quantity += num);
    };
    this.buyProduct = (num) => {
        this.quantity -= num;
    };
    this.getDetails = function () {
        try {
            if (this.quantity < 0) {
              throw new Error("Error: Not enough stock!");
            } else {
              
                return `${this.title}: $${this.price}, Quantity: ${this.quantity}`;
            }
          } catch (error) {
            return error.message;
          }
    };
  }

  let product = new Product("Laptop", 600, 6);

  console.log(product.getDetails());
  product.addStock(5);
  console.log(product.getDetails());
  product.buyProduct(10)
  console.log(product.getDetails());
  product.buyProduct(10)
  console.log(product.getDetails());
}

{
    //9-topshiriq
    function CompareNumbers(a, b){
        this.numOne = a
        this.numTwo = b
        this.compare = function(){
            if(this.numOne > this.numTwo){
                return `Birinchi son katta`
            }else if(this.numOne < this.numTwo){
                return `Ikkinchi son katta`
            }else{
                return `Ikkala son ham teng`
            }
        }
    }

    let compareNumbers = new CompareNumbers(5, 5)

    console.log(compareNumbers.compare())
}

{
    //10-topshiriq
    class Employee{
        constructor(wageHourly, hoursWorked){
            this.hourlyRate = wageHourly
            this.hoursWorked = hoursWorked
        }
        calculateSalary(){
            return `Oylik maosh: $${this.hourlyRate * this.hoursWorked}`
        }
    }
    let employee = new Employee(20, 124)

    console.log(employee.calculateSalary())
    
}