import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const options = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Free parking"
          ],
          "description": "Ideal for beginners looking for essential gym access."
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Free parking",
            "Group fitness classes",
            "Personalized fitness assessment"
          ],
          "description": "Perfect for individuals wanting additional guidance and group classes."
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 70,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Free parking",
            "Group fitness classes",
            "Personalized fitness assessment",
            "Access to spa and sauna",
            "Two personal training sessions per month"
          ],
          "description": "A comprehensive package for fitness enthusiasts seeking premium services."
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 100,
          "currency": "USD",
          "features": [
            "Access to gym equipment for up to 4 family members",
            "Locker facility for each member",
            "Free parking",
            "Group fitness classes for adults and kids",
            "Access to spa and sauna",
            "Childcare services during workout hours"
          ],
          "description": "An affordable plan for families to stay fit together."
        },
        {
          "id": 5,
          "name": "Corporate Plan",
          "price": 300,
          "currency": "USD",
          "features": [
            "Customizable plans for 10+ employees",
            "Access to gym equipment",
            "Locker facility for each employee",
            "Group fitness classes",
            "Access to spa and sauna",
            "Monthly wellness workshops",
            "Personalized corporate wellness reports"
          ],
          "description": "Tailored for companies to promote employee wellness and productivity."
        }
      ]
      
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 rounded ">
            {
                options.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;