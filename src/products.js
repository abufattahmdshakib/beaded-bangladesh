import Productimage9 from "../src/assets/Product-image (9).png";
import Productimage6 from "../src/assets/Product-image (6).png";
import Productimage7 from "../src/assets/Product-image (7).png";
import Rectangle11 from "../src/assets/Rectangle 11.png";
import Rectangle112 from "../src/assets/Rectangle 11 (2).png";
import Rectangle113 from "../src/assets/Rectangle 11 (3).png";
import Rectangle114 from "../src/assets/Product-image.png";
import Productimage4 from "../src/assets/Product-image (4).png";
import Productimage5 from "../src/assets/Product-image (5).png";
import Rectangle7348 from "../src/assets/Rectangle 7348.png";
import Rectangle7347 from "../src/assets/Rectangle 7347.png";
import EARRINGS1 from "../src/assets/EARRINGS 1.png";
import EARRINGS2 from "../src/assets/EARRINGS 2.png";
import EARRINGS3 from "../src/assets/EARRINGS 3.png";
import EARRINGS4 from "../src/assets/EARRINGS 4.png";
import EARRINGS5 from "../src/assets/EARRINGS 5.png";
import EARRINGS6 from "../src/assets/EARRINGS 6.png";
import EARRINGS7 from "../src/assets/EARRINGS 7.png";

const products = [
  { id: 1, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage9, sales: 120, bestSelling: true, createdAt: "2025-08-20" },
  { id: 2, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage6, sales: 80, bestSelling: false, createdAt: "2025-08-18" },
  { id: 3, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage7, sales: 90, bestSelling: false, createdAt: "2025-08-19" },
  { id: 4, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Rectangle114, sales: 60, bestSelling: false, createdAt: "2025-08-17" },
  { id: 5, name: "NECKLACES", title: "Gold Necklace", price: "৳799", priceNumber: 799, image: Rectangle11, sales: 200, bestSelling: true, createdAt: "2025-08-22" },
  { id: 6, name: "EARRINGS", title: "Silver Earrings", price: "৳599", priceNumber: 599, image: Rectangle112, sales: 50, bestSelling: false, createdAt: "2025-08-21" },
  { id: 7, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Rectangle113, sales: 70, bestSelling: false, createdAt: "2025-08-16" },
  { id: 8, name: "MEN’S ACCESSORIES", title: "Watch", price: "৳799", priceNumber: 999, image: Rectangle114, sales: 40, bestSelling: false, createdAt: "2025-08-15" },
  { id: 9, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage9, sales: 100, bestSelling: true, createdAt: "2025-08-23" },
  { id: 10, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage6, sales: 55, bestSelling: false, createdAt: "2025-08-14" },
  { id: 11, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage7, sales: 65, bestSelling: false, createdAt: "2025-08-13" },
  { id: 12, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Rectangle114, sales: 110, bestSelling: true, createdAt: "2025-08-12" },
  { id: 13, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage9, sales: 95, bestSelling: false, createdAt: "2025-08-11" },
  { id: 14, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage6, sales: 85, bestSelling: false, createdAt: "2025-08-10" },
  { id: 15, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage7, sales: 130, bestSelling: true, createdAt: "2025-08-09" },
  { id: 16, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Rectangle114, sales: 75, bestSelling: false, createdAt: "2025-08-08" },
  { id: 17, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage9, sales: 105, bestSelling: true, createdAt: "2025-08-07" },
  { id: 18, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage6, sales: 95, bestSelling: false, createdAt: "2025-08-06" },
  { id: 19, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Productimage7, sales: 60, bestSelling: false, createdAt: "2025-08-05" },
  { id: 20, name: "BRACELET", title: "Flower Child Barbie Bracelet", price: "৳599", priceNumber: 599, image: Rectangle114, sales: 125, bestSelling: true, createdAt: "2025-08-04" },
  { id: 21, name: "NECKLACES", title: "Gold Necklace", price: "৳799", priceNumber: 799, image: Rectangle7347, sales: 180, bestSelling: true, createdAt: "2025-08-03" },
  { id: 22, name: "NECKLACES", title: "Pearl Necklace", price: "৳799", priceNumber: 799, image: Productimage4, sales: 70, bestSelling: false, createdAt: "2025-08-02" },
  { id: 23, name: "NECKLACES", title: "Diamond Necklace", price: "৳799", priceNumber: 799, image: Productimage5, sales: 150, bestSelling: true, createdAt: "2025-08-01" },
  { id: 24, name: "NECKLACES", title: "Platinum Necklace", price: "৳799", priceNumber: 799, image: Rectangle7348, sales: 95, bestSelling: false, createdAt: "2025-07-31" },
  { id: 25, name: "NECKLACES", title: "Rose Gold Necklace", price: "৳799", priceNumber: 799, image: Rectangle11, sales: 110, bestSelling: true, createdAt: "2025-07-30" },
  { id: 26, name: "NECKLACES", title: "Silver Necklace", price: "৳799", priceNumber: 799, image: Rectangle7347, sales: 80, bestSelling: false, createdAt: "2025-07-29" },
  { id: 27, name: "NECKLACES", title: "Emerald Necklace", price: "৳799", priceNumber: 799, image: Productimage4, sales: 120, bestSelling: true, createdAt: "2025-07-28" },
  { id: 28, name: "NECKLACES", title: "Sapphire Necklace", price: "৳799", priceNumber: 799, image: Productimage5, sales: 90, bestSelling: false, createdAt: "2025-07-27" },
  { id: 29, name: "NECKLACES", title: "Ruby Necklace", price: "৳799", priceNumber: 799, image: Rectangle7348, sales: 140, bestSelling: true, createdAt: "2025-07-26" },
  { id: 30, name: "NECKLACES", title: "Opal Necklace", price: "৳799", priceNumber: 799, image: Rectangle11, sales: 100, bestSelling: false, createdAt: "2025-07-25" },
  { id: 31, name: "NECKLACES", title: "Topaz Necklace", price: "৳799", priceNumber: 799, image: Productimage5, sales: 120, bestSelling: true, createdAt: "2025-07-15" },
  { id: 32, name: "BRACELET", title: "Boho Chic Bracelet", price: "৳599", priceNumber: 599, image: Productimage7, sales: 95, bestSelling: false, createdAt: "2025-07-24" },
  { id: 33, name: "EARRINGS", title: "Silver Hoop Earrings", price: "৳599", priceNumber: 599, image: EARRINGS1, sales: 130, bestSelling: true, createdAt: "2025-07-23" },
  { id: 34, name: "EARRINGS", title: "Gold Drop Earrings", price: "৳599", priceNumber: 699, image: EARRINGS2, sales: 80, bestSelling: false, createdAt: "2025-07-22" },
  { id: 35, name: "EARRINGS", title: "Pearl Stud Earrings", price: "৳599", priceNumber: 599, image: EARRINGS3, sales: 150, bestSelling: true, createdAt: "2025-07-21" },
  { id: 36, name: "EARRINGS", title: "Diamond Stud Earrings", price: "৳599", priceNumber: 599, image: EARRINGS4, sales: 95, bestSelling: false, createdAt: "2025-07-20" },
  { id: 37, name: "EARRINGS", title: "Rose Gold Earrings", price: "৳599", priceNumber: 699, image: EARRINGS5, sales: 110, bestSelling: true, createdAt: "2025-07-19" },
  { id: 38, name: "EARRINGS", title: "Emerald Earrings", price: "৳599", priceNumber: 599, image: EARRINGS6, sales: 70, bestSelling: false, createdAt: "2025-07-18" },
  { id: 39, name: "EARRINGS", title: "Sapphire Earrings", price: "৳599", priceNumber: 599, image: EARRINGS7, sales: 120, bestSelling: true, createdAt: "2025-07-17" },
  { id: 40, name: "EARRINGS", title: "Ruby Earrings", price: "৳599", priceNumber: 699, image: Rectangle112, sales: 90, bestSelling: false, createdAt: "2025-07-16" },
  { id: 41, name: "EARRINGS", title: "Topaz Earrings", price: "৳599", priceNumber: 599, image: EARRINGS1, sales: 140, bestSelling: true, createdAt: "2025-07-15" },
  { id: 42, name: "EARRINGS", title: "Amethyst Earrings", price: "৳599", priceNumber: 699, image: EARRINGS2, sales: 100, bestSelling: false, createdAt: "2025-07-14" },
  { id: 43, name: "EARRINGS", title: "Citrine Earrings", price: "৳599", priceNumber: 599, image: EARRINGS3, sales: 110, bestSelling: false, createdAt: "2025-07-13" },
  { id: 44, name: "EARRINGS", title: "Garnet Earrings", price: "৳599", priceNumber: 599, image: EARRINGS4, sales: 130, bestSelling: true, createdAt: "2025-07-12" },
  { id: 45, name: "EARRINGS", title: "Peridot Earrings", price: "৳599", priceNumber: 599, image: EARRINGS5, sales: 80, bestSelling: false, createdAt: "2025-07-11" },
  { id: 46, name: "EARRINGS", title: "Aquamarine Earrings", price: "৳599", priceNumber: 599, image: EARRINGS6, sales: 115, bestSelling: true, createdAt: "2025-07-10" },
  { id: 47, name: "EARRINGS", title: "Opal Earrings", price: "৳599", priceNumber: 599, image: EARRINGS7, sales: 105, bestSelling: true, createdAt: "2025-07-09" },
];

export default products;
