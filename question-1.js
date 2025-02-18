/**
 * You are working on the UI of your app, but the backend that will provide your data is not ready yet, so you decide to write some dummy data.
 * You can then use this data in your frontend code, and later, when the backend is ready you can replace it with a request to get that data.
 *
 * You are building a rental app (similar to airbnb/booking) where users can rent houses for their holidays and want to have an array of rentals that adheres to the following:
 * - The array should be called `rentals`
 * - Each item should have a property called `description` which describes the property
 * - The array needs to have at least 1 item that has the `isAvailable` property set to `true` (to indicate the property is available)
 * - The array needs to have at least 1 item that has the `isAvailable` property set to `false`
 */

const rentals = [
  {
    description:
      "Relax in this comfy cabin in the mountains with a fireplace and beautiful views of the hills.",
    isAvailable: false,
  },
  {
    description:
      "Enjoy a quiet stay in this charming cottage in the countryside, surrounded by nature.",
    isAvailable: false,
  },
  {
    description:
      "Stay in the heart of the city in this modern apartment, close to shops, restaurants, and attractions.",
    isAvailable: true,
  },
  {
    description:
      "Unwind at this lovely house by the lake, perfect for fishing, boating, and relaxing by the water.",
    isAvailable: false,
  },
  {
    description:
      "Stay right on the beach in this cozy bungalow with amazing ocean views and direct beach access.",
    isAvailable: true,
  },
];

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(rentals.some((rental) => rental.isAvailable === true));
console.assert(rentals.some((rental) => rental.isAvailable === false));

rentals.forEach((rental) => {
  console.assert(typeof rental.description === "string");
});
