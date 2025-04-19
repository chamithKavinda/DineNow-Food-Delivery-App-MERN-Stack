import logo from './logo.png';
import search from './search.png';
import basket from './basket.png';
import headerImg from './headerImg.jpg';

import noodles from './noodles.jpg';
import pizza from './pizza.jpg';
import cake from './cake.jpg';
import roti from './roti.jpg';
import pasta from './pasta.jpg';
import salad from './salad.jpg';
import rating_starts from './rating_starts.png';
import add_icon_white from './add_icon_white.png';
import remove_icon_red from './remove_icon_red.png';
import add_icon_green from './add_icon_green.png';
import facebook_icon from './facebook_icon.png';
import linkedin_icon from './linkedin_icon.png';
import twitter_icon from './twitter_icon.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import cross_icon from './cross_icon.png';

import food_1 from './food-1.jpg';
import food_2 from './food-2.jpg';
import food_4 from './food-4.jpg';
import food_5 from './food-5.jpg';

import food_6 from './food-6.jpg';
import food_7 from './food-7.jpg';
import food_8 from './food-8.jpg';
import food_9 from './food-9.jpg';

import food_11 from './food-11.jpg';
import food_12 from './food-12.jpg';        
import food_13 from './food-13.jpg';
import food_14 from './food-14.jpg';

import food_16 from './food-16.jpg';
import food_17 from './food-17.jpg';
import food_18 from './food-18.jpg';
import food_20 from './food-20.jpg';

import food_21 from './food-21.jpg';
import food_22 from './food-22.jpg';
import food_23 from './food-23.jpg';
import food_24 from './food-24.jpg';

import food_27 from './food-27.jpg';
import food_28 from './food-28.jpg';
import food_29 from './food-29.jpg';
import food_30 from './food-30.jpg';

import bag_icon from './bag_icon.png';
import profile_icon from './profile_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

export const assets = {
    logo,
    search,
    basket,
    headerImg,
    rating_starts,
    add_icon_white,
    remove_icon_red,
    add_icon_green,
    facebook_icon,
    linkedin_icon,
    twitter_icon,
    app_store,
    play_store,
    cross_icon,
    bag_icon,
    profile_icon,
    logout_icon,
    parcel_icon
};

export const menu_list = [
    {
        menu_name: 'Noodles',
        menu_image: noodles
    },
    {
        menu_name: 'Pizza',
        menu_image: pizza
    },
    {
        menu_name: 'Cake',
        menu_image: cake
    },
    {
        menu_name: 'Roti',
        menu_image: roti
    },
    {
        menu_name: 'Pasta',
        menu_image: pasta
    },
    {
        menu_name: 'Salad',
        menu_image: salad
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Veg Noodles",
        image: food_2,
        price: 550,
        description: "Spicy Indo-Chinese noodles with mixed vegetables.",
        category: "Noodles",
    },
    {
        _id: "2",
        name: "Chicken Chow Mein",
        image: food_1,
        price: 850,
        description: "Stir-fried noodles with chicken, veggies, and savory sauce.",
        category: "Noodles",
    },
    {
        _id: "3",
        name: "Garlic Butter Noodles",
        image: food_5,
        price: 1150,
        description: "Soft noodles tossed in garlic butter and herbs.",
        category: "Noodles",
    },
    {
        _id: "4",
        name: "Spicy Ramen",
        image: food_4,
        price: 1350,
        description: "Hot broth ramen with egg, meat, and spring onions.",
        category: "Noodles",
    },
    {
        _id: "5",
        name: "Margherita Pizza",
        image: food_6,
        price: 2250,
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        category: "Pizza",
    },
    {
        _id: "6",
        name: "Veggie Supreme",
        image: food_9,
        price: 2250,
        description: "Loaded with capsicum, olives, corn, and cheese.",
        category: "Pizza",
    },
    {
        _id: "7",
        name: "Pepperoni Pizza",
        image: food_7,
        price: 2650,
        description: "Cheesy pizza topped with crispy pepperoni.",
        category: "Pizza",
    },
    {
        _id: "8",
        name: "BBQ Chicken Pizza",
        image: food_8,
        price: 2950,
        description: "Smoky BBQ chicken on a cheesy pizza base.",
        category: "Pizza",
    },
    {
        _id: "9",
        name: "Chocolate Fudge Cake",
        image: food_11,
        price: 150,
        description: "Rich chocolate cake with creamy fudge layers.",
        category: "Cake",
    },
    {
        _id: "10",
        name: "Red Velvet Cake",
        image: food_12,
        price: 350,
        description: "Rich red velvet cake with cream cheese frosting.",
        category: "Cake",
    },
    {
        _id: "11",
        name: "Cheesecake",
        image: food_13,
        price: 450,
        description: "Creamy cheesecake with a graham cracker crust.",
        category: "Cake",
    },
    {
        _id: "12",
        name: "Black Forest Cake",
        image: food_14,
        price: 550,
        description: "Chocolate sponge with cherries and whipped cream.",
        category: "Cake",
    },
    {
        _id: "13",
        name: "Plain Roti",
        image: food_16,
        price: 50,
        description: "Soft Indian whole wheat flatbread.",
        category: "Roti",
    },
    {
        _id: "14",
        name: "Butter Roti",
        image: food_17,
        price: 120,
        description: "Fluffy roti brushed with melted butter.",
        category: "Roti",
    },
    {
        _id: "15",
        name: "Garlic Naan",
        image: food_18,
        price: 180,
        description: "Oven-baked naan with garlic and herbs.",
        category: "Roti",
    },
    {
        _id: "16",
        name: "Roti Wrap (Chicken)",
        image: food_20,
        price: 200,
        description: "Soft roti wrap filled with spicy chicken and veggies.",
        category: "Roti",
    },
    {
        _id: "17",
        name: "Spaghetti Bolognese",
        image: food_21,
        price: 1350,
        description: "Minced meat sauce with herbs on spaghetti.",
        category: "Pasta",
    },
    {
        _id: "18",
        name: "Alfredo Pasta",
        image: food_22,
        price: 1450,
        description: "Creamy Alfredo sauce with fettuccine pasta.",
        category: "Pasta",
    },
    {
        _id: "19",
        name: "Pesto Penne",
        image: food_24,
        price: 1650,
        description: "Penne pasta tossed in fresh green pesto.",
        category: "Pasta",
    },
    {
        _id: "20",
        name: "Mac & Cheese",
        image: food_23,
        price: 1950,
        description: "Classic macaroni baked with cheesy goodness.",
        category: "Pasta",
    },
    {
        _id: "21",
        name: "Greek Salad",
        image: food_27,
        price: 850,
        description: "Tomatoes, cucumbers, olives, and feta cheese.",
        category: "Salad",
    },
    {
        _id: "22",
        name: "Quinoa Salad",
        image: food_29,
        price: 1150,
        description: "Nutritious quinoa with veggies and lemon dressing.",
        category: "Salad",
    },
    {
        _id: "23",
        name: "Caprese Salad",
        image: food_30,
        price: 1350,
        description: "Tomato, mozzarella, basil, and olive oil drizzle.",
        category: "Salad",
    },
    {
        _id: "24",
        name: "Avocado Chicken Salad",
        image: food_28,
        price: 1450,
        description: "Grilled chicken with avocado and mixed greens.",
        category: "Salad",
    },
]