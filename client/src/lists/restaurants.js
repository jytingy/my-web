import {create} from "zustand"

export const useRestaurantList = create((set) => ({
    restaurants: [],
    setRestaurants: (restaurants) => set({restaurants}),
    createRestaurant: async(newRestaurant) => {
        if (!newRestaurant.name || !newRestaurant.price || !newRestaurant.rating || !newRestaurant.review) {
            return {success: false, message: "Missing information."}
        }

        const res = await fetch("/api/restaurants", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newRestaurant)
        })
        const data = await res.json();
        set((state) => ({restaurants:[...state.restaurants, data.data]}));
        return {success: true, message: "Restaurant created."}

    }
}))