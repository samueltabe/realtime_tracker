<?php

namespace Database\Factories;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toppingsChoices = [
            'Extra Cheese',
            'Black Olives',
            'Pepperoni',
            'Sausage',
            'Jalapenos',
            'Chiken',
            'Ground Beef',
            'Green Peppers',
        ];

        $toppings = [];

        for ($i=1; $i < rand(1, 4); $i++) {
            $toppings[] = Arr::random($toppingsChoices);
        };

        $toppings = array_unique($toppings);

        return [
            'id'=>rand(11111, 99999),
            'user_id'=> rand(1, 10),
            'size'=> Arr::random(['small', 'Medium', 'Large', 'Extra-Large']),
            'crust'=> Arr::random(['Normal','Thin','Garlic']),
            'toppings'=> $toppings,
            'status'=> Arr::random(['Ordered','Prepping','Baking','Checking','Ready']),

        ];
    }
}
