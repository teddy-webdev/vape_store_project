document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		//loader
        document.querySelector(".spinner").classList.add("hidden");
		//page
        document.querySelector(".all").classList.remove("hidden");
	//}, 1000);
	}, 6000);
});




const products = [
  {
    item: "SMOK NOVO 4",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-novo-4",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.38.jpeg"
  },
  {
    item: "VAPORESSO XROS 2 1000Mah 2 ML",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/vaporesso-xros-2-1000mah-2-ml",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_01.jpg"
  },
  {
    item: "WENAX Stylus",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/wenax-stylus",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_05.jpg"
  },
  {
    item: "MINIFIT MAX",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/minifit-max",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_06.jpg"
  },
  {
    item: "Drag TPPX ",
    currency: "€",
    price: 97.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/drag-tppx",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_07.jpg"
  },
  {
    item: "Caliburn A2 POD SYSTEM",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-a2-pod-system",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_13.jpg"
  },
  {
    item: "JUSTFOG MINIFIT MAX",
    currency: "€",
    price: 32.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/justfog-minifit-max",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.38-2.jpeg"
  },
  {
    item: "VOOPOO DRAG X",
    currency: "€",
    price: 77.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/voopoo-drag-x",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.39-1.jpeg"
  },
  {
    item: "CALIBURN G",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-g",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.39-2.jpeg"
  },
  {
    item: "VOOPOO DRAG 3",
    currency: "€",
    price: 97.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/voopoo-drag-3",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.39.jpeg"
  },
  {
    item: "DRAG X PLUS",
    currency: "€",
    price: 87.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/drag-x-plus",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.40-1.jpeg"
  },
  {
    item: "VAPE PEN v2",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/vape-pen-v2",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.40-2.jpeg"
  },
  {
    item: "Liberty Busted",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-busted",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0006.jpg"
  },
  {
    item: "Liberty Amnesia",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-amnesia",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0001.jpg"
  },
  {
    item: "Liberty Fusion Cream",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-fusion-cream",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0007.jpg"
  },
  {
    item: "Liberty Fizzy Crusher",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-fizzy-crusher",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0002.jpg"
  },
  {
    item: "Liberty Tropical Oasis",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-tropical-oasis",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0008.jpg"
  },
  {
    item: "Liberty Woo Woo",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-woo-woo",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0003.jpg"
  },
  {
    item: "Strawberry Raspberyy Cherry Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/strawberry-raspberyy-cherry-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/283404841_4849448295184234_918331073210867008_n.jpg"
  },
  {
    item: "Elfbar Apple Peach 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-apple-peach-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.39-1.jpeg"
  },
  {
    item: "Elfbar Blue Raspberry Lemonade 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blue-raspberry-lemonade-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.39.jpeg"
  },
  {
    item: "Dragbar Grape Ice 5000",
    currency: "€",
    price: 19.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/dragbar-grape-ice-5000",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-17-at-19.04.41-1.jpeg"
  },
  {
    item: "Dragbar Watermelon Ice 5000",
    currency: "€",
    price: 19.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/dragbar-watermelon-ice-5000",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-17-at-19.04.41.jpeg"
  },
  {
    item: "Dragbar Banana Ice 5000",
    currency: "€",
    price: 19.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/dragbar-banana-ice-5000",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-17-at-19.04.42-1.jpeg"
  },
  {
    item: "Dragbar Mango Guava 5000 ",
    currency: "€",
    price: 19.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/dragbar-mango-guava-5000",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-17-at-19.04.42.jpeg"
  },
  {
    item: "Elfbar Pink Lemonade 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-pink-lemonade-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0008.jpg"
  },
  {
    item: "Elfbar Blueberry Sour Raspberry 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blueberry-sour-raspberry-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0007.jpg"
  },
  {
    item: "Elfbar Pineapple Peach Mango 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-pineapple-peach-mango-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0006.jpg"
  },
  {
    item: "Elfbar Cherry Lemon Peach 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-cherry-lemon-peach-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0005.jpg"
  },
  {
    item: "Elfbar Strawberry Ice Cream 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-ice-cream-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0011.jpg"
  },
  {
    item: "Elfbar 2500 Banana Milk 50 MG Nicotine",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-2500-banana-milk-50-mg-nicotine",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230322-WA0009.jpg"
  },
  {
    item: "Elfbar Grape 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-grape-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.36-2.jpeg"
  },
  {
    item: "Elfbar Mango 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-mango-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.36.jpeg"
  },
  {
    item: "Elfbar Banana Ice 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-banana-ice-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.37-1.jpeg"
  },
  {
    item: "Elfbar Blueberry 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blueberry-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.37-2.jpeg"
  },
  {
    item: "Elfbar Strawberry Ice Cream 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-ice-cream-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.37.jpeg"
  },
  {
    item: "Elfbar Strawberry Grape 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-grape-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.38.jpeg"
  },
  {
    item: "Elfbar Kivi Passion Fruit Guava 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-kivi-passion-fruit-guava-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.56.jpeg"
  },
  {
    item: "Elfbar Mango 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-mango-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.57-1.jpeg"
  },
  {
    item: "Elfbar Blueberry Sour Raspberry 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blueberry-sour-raspberry-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.57.jpeg"
  },
  {
    item: "Elfbar Watermelon 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-watermelon-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.58-1.jpeg"
  },
  {
    item: "Elfbar Blueberry 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blueberry-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.58.jpeg"
  },
  {
    item: "Elfbar Energy Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-energy-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.59-1.jpeg"
  },
  {
    item: "Elfbar Strawberry Kiwi 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-kiwi-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.02-1.jpeg"
  },
  {
    item: "Elfbar Apple Peach 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-apple-peach-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.02.jpeg"
  },
  {
    item: "Elfbar Lyche Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lyche-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.50.jpeg"
  },
  {
    item: "Elfbar Cola 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-cola-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.34-1.jpeg"
  },
  {
    item: "Elfbar Kiwi Passion Fruit Guaba 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-kiwi-passion-fruit-guaba-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.34.jpeg"
  },
  {
    item: "Elfbar Watermelon 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-watermelon-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.36-1.jpeg"
  },
  {
    item: "Elfbar Strawberry Ice Cream 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-ice-cream-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0011.jpg"
  },
  {
    item: "Elfbar 2500 Banana Milk 50 MG Nicotine",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-2500-banana-milk-50-mg-nicotine",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230322-WA0009.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Pink Lemonade",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-pink-lemonade",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_09.jpg"
  },
  {
    item: "MegaPuff 9000 Puffs Nicotinli 20 Mg",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/megapuff-9000-puffs-nicotinli-20-mg",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2022-10-21-в-14.56.58.jpg"
  },
  {
    item: "Elfbar Grape 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-grape-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0014.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Blueberry Sour Raspberry",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-blueberry-sour-raspberry",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_04.jpg"
  },
  {
    item: "Elfbar Grape 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-grape-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.59-2.jpeg"
  },
  {
    item: "Elfbar Strawberry Banana 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-banana-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.59.jpeg"
  },
  {
    item: "Elfbar Peach Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-peach-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.00-1.jpeg"
  },
  {
    item: "Elfbar Banana Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-banana-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.00.jpeg"
  },
  {
    item: "Elfbar Cola 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-cola-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.01-1.jpeg"
  },
  {
    item: "Elfbar Pink Lemonade 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-pink-lemonade-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.51.01.jpeg"
  },
  {
    item: "Dragbar Peach Ice 5000",
    currency: "€",
    price: 19.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/dragbar-peach-ice-5000",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-17-at-19.04.44.jpeg"
  },
  {
    item: "Mango Milk Ice 600 ",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/mango-milk-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-08-10-at-14.24.27.jpeg"
  },
  {
    item: "Spearmint 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/spearmint-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-08-10-at-14.24.28-1.jpeg"
  },
  {
    item: "Cherry 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/cherry-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-08-10-at-14.24.28.jpeg"
  },
  {
    item: "Strawberry Ice Cream 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/strawberry-ice-cream-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-08-10-at-14.24.29.jpeg"
  },
  {
    item: "Cotton Candy Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/cotton-candy-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-08-10-at-14.24.30.jpeg"
  },
  {
    item: "Liberty Salt Ice Grape",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-ice-grape",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.56.54-1.jpeg"
  },
  {
    item: "Liberty Salt Grape Peach",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-grape-peach",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.56.54.jpeg"
  },
  {
    item: "Liberty Salt Caramel Tobacco",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-caramel-tobacco",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.56.57.jpeg"
  },
  {
    item: "Liberty Salt Strawberry Cheesecake",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-strawberry-cheesecake",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.56.59-1.jpeg"
  },
  {
    item: "Liberty Salt Blue Slash",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-blue-slash",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.56.59.jpeg"
  },
  {
    item: "Liberty Salt Fusion Cream",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-fusion-cream",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.00-1.jpeg"
  },
  {
    item: "Liberty Salt Mango Ice",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-mango-ice",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.00-2.jpeg"
  },
  {
    item: "Liberty Salt Woo Woo",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-woo-woo",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.00.jpeg"
  },
  {
    item: "Liberty Salt Lemonberry Breeze",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-lemonberry-breeze",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.01-1.jpeg"
  },
  {
    item: "Liberty Salt Strawberry Ice Dream",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-strawberry-ice-dream",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.01-2.jpeg"
  },
  {
    item: "Liberty Salt Coffee Tobacco",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-coffee-tobacco",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.01.jpeg"
  },
  {
    item: "Liberty Salt Mentos Mint",
    currency: "€",
    price: 13.5,
    type: "salt-liquid",
    item_url: "https://vapenationcyprus.com/urun/liberty-salt-mentos-mint",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.57.02.jpeg"
  },
  {
    item: "Vaporesso XROS MINI",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/vaporesso-xros-mini",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.35-1.jpeg"
  },
  {
    item: "NFIX Pro Kit",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/nfix-pro-kit",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.35.jpeg"
  },
  {
    item: "WENAX K-1",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/wenax-k-1",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.36.jpeg"
  },
  {
    item: "Liquideo",
    currency: "€",
    price: 47.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/liquideo",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.37-1.jpeg"
  },
  {
    item: "SMOK NORD",
    currency: "€",
    price: 52.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-nord",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.37.jpeg"
  },
  {
    item: "ZERO",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/zero",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.38-1.jpeg"
  },
  {
    item: "Elfbar Blue Razz Lemonade 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-blue-razz-lemonade-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0001.jpg"
  },
  {
    item: "Elfbar Spearmint 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-spearmint-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0003.jpg"
  },
  {
    item: "Elfbar Watermelon 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-watermelon-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0004.jpg"
  },
  {
    item: "Elfbar 2500 Pink Lemonade 50 MG Nicotine",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-2500-pink-lemonade-50-mg-nicotine",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230322-WA0002.jpg"
  },
  {
    item: "Elfbar 5000 Puffs 50 MG",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-5000-puffs-50-mg",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2023-03-07-в-13.42.54.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Blueberry Sour Raspberry",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-blueberry-sour-raspberry",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_04.jpg"
  },
  {
    item: "Novo 4, NFixPro, XpoZPro Coils ",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/novo-4-nfixpro-xpozpro-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.05.jpeg"
  },
  {
    item: "Caliburn 1.4 Pods",
    currency: "€",
    price: 17.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/caliburn-1-4-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.06-1.jpeg"
  },
  {
    item: "Baby Coils ",
    currency: "€",
    price: 15.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/baby-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.06-2.jpeg"
  },
  {
    item: "Wenax K1 Coils 5 Pieces",
    currency: "€",
    price: 17.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/wenax-k1-coils-5-pieces",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.06.jpeg"
  },
  {
    item: "Smok Nucig Mini V2 S1 ",
    currency: "€",
    price: 16.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/smok-nucig-mini-v2-s1",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.07-1.jpeg"
  },
  {
    item: "Smok Tfv12 Prince Coils",
    currency: "€",
    price: 15.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/smok-tfv12-prince-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.07.jpeg"
  },
  {
    item: "Liberty Kamikaze",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-kamikaze",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0004.jpg"
  },
  {
    item: "Liberty Sixty 9",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-sixty-9",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0005.jpg"
  },
  {
    item: "Liberty Blue Slash",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-blue-slash",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0009.jpg"
  },
  {
    item: "Liberty Watermelon",
    currency: "€",
    price: 15.5,
    type: "free-base-liquids",
    item_url: "https://vapenationcyprus.com/urun/liberty-watermelon",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230111-WA0010.jpg"
  },
  {
    item: "Caliburn G2 POD SYSTEM",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-g2-pod-system",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_15.jpg"
  },
  {
    item: "SMOK NFIX KIT PRO",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-nfix-kit-pro",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_16.jpg"
  },
  {
    item: "Voopoo ARGUS PRO",
    currency: "€",
    price: 52.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/voopoo-argus-pro",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Vape-kits-1-_Страница_17.jpg"
  },
  {
    item: "Caliburn TENET ",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-tenet",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2023-03-07-в-13.43.14.jpg"
  },
  {
    item: "Caliburn TENET KOKO",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-tenet-koko",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2023-03-07-в-13.43.12.jpg"
  },
  {
    item: "CALIBURN GK2",
    currency: "€",
    price: 42.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/caliburn-gk2",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.29.jpeg"
  },
  {
    item: "Elfbar Watermelon 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-watermelon-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0004.jpg"
  },
  {
    item: "Elfbar 5000 Puffs ",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-5000-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2023-01-03-в-14.54.50.jpg"
  },
  {
    item: "Elfbar Strawberry Kiwi 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-kiwi-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0002.jpg"
  },
  {
    item: "Elfbar Cherry Lemon Peach 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-cherry-lemon-peach-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0005.jpg"
  },
  {
    item: "Elfbar 2500 Banana Milk 50 MG Nicotine",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-2500-banana-milk-50-mg-nicotine",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20230322-WA0009.jpg"
  },
  {
    item: "Elfbar Spearmint 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-spearmint-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0003.jpg"
  },
  {
    item: "Elfbar Strawberry Ice Cream 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-ice-cream-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0011.jpg"
  },
  {
    item: "Elfbar Strawberry Grape 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-grape-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0010.jpg"
  },
  {
    item: "Elfbar Peach Ice 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-peach-ice-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0009.jpg"
  },
  {
    item: "MegaPuff 9000 Puffs Nicotinli 20 Mg",
    currency: "€",
    price: 18.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/megapuff-9000-puffs-nicotinli-20-mg",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Изображение-WhatsApp-2022-10-21-в-14.56.58.jpg"
  },
  {
    item: "Elfbar Grape 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-grape-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0014.jpg"
  },
  {
    item: "Elfbar Pineapple Peach Mango 1500 Puffs",
    currency: "€",
    price: 16.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-pineapple-peach-mango-1500-puffs",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/IMG-20220908-WA0006.jpg"
  },
  {
    item: "XRos Pods ",
    currency: "€",
    price: 12.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/xros-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.13-1.jpeg"
  },
  {
    item: "Cotton Bacon",
    currency: "€",
    price: 10.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/cotton-bacon",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.13.jpeg"
  },
  {
    item: "RPM 1.0 Coils ",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/rpm-1-0-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.14-1.jpeg"
  },
  {
    item: "NFix Pods ",
    currency: "€",
    price: 16.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/nfix-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.14.jpeg"
  },
  {
    item: "Smok Nord Coil",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/smok-nord-coil",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.07-2.jpeg"
  },
  {
    item: "Zero Pods ",
    currency: "€",
    price: 12.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/zero-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.08-1.jpeg"
  },
  {
    item: "1.2 PnP Metal Coils",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/1-2-pnp-metal-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.08-2.jpeg"
  },
  {
    item: "Minifit Pods",
    currency: "€",
    price: 15.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/minifit-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.08.jpeg"
  },
  {
    item: "0.3 PnP Coils ",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/0-3-pnp-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.09-1.jpeg"
  },
  {
    item: "0.15 PnP Coils",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/0-15-pnp-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.09.jpeg"
  },
  {
    item: "ElfBar Lost Mary 600 Tripple Mango",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-tripple-mango",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_07.jpg"
  },
  {
    item: "Elfbar Spearmint 600 ",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-spearmint-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.53-1.jpeg"
  },
  {
    item: "Elfbar Pineapple Peach Mango 600 ",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-pineapple-peach-mango-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.53.jpeg"
  },
  {
    item: "Elfbar Strawberry Ice 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-ice-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.54.jpeg"
  },
  {
    item: "Elfbar Strawberry Energy 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-strawberry-energy-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.55-1.jpeg"
  },
  {
    item: "Elfbar Cream Tobacco 600",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-cream-tobacco-600",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.50.55.jpeg"
  },
  {
    item: "ElfBar Lost Mary 600 Tripple Mango",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-tripple-mango",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_07.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Cotton Candy Ice",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-cotton-candy-ice",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_06.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Blue Razz Ice",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-blue-razz-ice",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_05.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Blueberry Sour Raspberry",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-blueberry-sour-raspberry",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_04.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 KIWI PASSION FRUIT GUAVA",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-kiwi-passion-fruit-guava",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_03.jpg"
  },
  {
    item: "ElfBar Lost Mary 600 Blueberry",
    currency: "€",
    price: 10.5,
    type: "disposable-vapes",
    item_url: "https://vapenationcyprus.com/urun/elfbar-lost-mary-600-blueberry",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/Elfbar-lost-600-20mg-170₺-1-_Страница_02.jpg"
  },
  {
    item: "Caliburn A2 Pods",
    currency: "€",
    price: 17.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/caliburn-a2-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.00.jpeg"
  },
  {
    item: "Caliburn G Coils",
    currency: "€",
    price: 17.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/caliburn-g-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.03-1.jpeg"
  },
  {
    item: "GTX Go Coils 5 Pieces",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/gtx-go-coils-5-pieces",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.03.jpeg"
  },
  {
    item: "Drag 3 Coils ",
    currency: "€",
    price: 15.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/drag-3-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.04-1.jpeg"
  },
  {
    item: "Caliburn G Pod ",
    currency: "€",
    price: 14.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/caliburn-g-pod",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.04.jpeg"
  },
  {
    item: "Wenax K1 Pods ",
    currency: "€",
    price: 16.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/wenax-k1-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.05-1.jpeg"
  },
  {
    item: "SMOK NFIX KIT",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-nfix-kit",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.40.jpeg"
  },
  {
    item: "SMOK NORD 4 KIT",
    currency: "€",
    price: 57.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-nord-4-kit",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.41-1.jpeg"
  },
  {
    item: "SMOK NORD 2",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/smok-nord-2",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.41-2.jpeg"
  },
  {
    item: "VAPORESSO OSMALL",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/vaporesso-osmall",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.41.jpeg"
  },
  {
    item: "Uwell Caliburn A2 Pod Kit",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/uwell-caliburn-a2-pod-kit",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.42-1.jpeg"
  },
  {
    item: "VAPORESSO GTX GO",
    currency: "€",
    price: 37.5,
    type: "rechargeable-vapes",
    item_url: "https://vapenationcyprus.com/urun/vaporesso-gtx-go",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-15-at-15.53.42.jpeg"
  },
  {
    item: "Smok Novo X Pods ",
    currency: "€",
    price: 15.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/smok-novo-x-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.11-1.jpeg"
  },
  {
    item: "RPM 2 Coils",
    currency: "€",
    price: 17.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/rpm-2-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.11-2.jpeg"
  },
  {
    item: "Vaporesso OSmall Pods",
    currency: "€",
    price: 12.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/vaporesso-osmall-pods",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.11-3.jpeg"
  },
  {
    item: "RPM Mesh 0.4 Coil",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/rpm-mesh-0-4-coil",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.11.jpeg"
  },
  {
    item: "Vape Pen Coils ",
    currency: "€",
    price: 20.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/vape-pen-coils",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.12-1.jpeg"
  },
  {
    item: "Samsung Battery",
    currency: "€",
    price: 12.5,
    type: "coils-pods",
    item_url: "https://vapenationcyprus.com/urun/samsung-battery",
    item_image: "https://vapenationcyprus.com/tema/genel/uploads/urunler/WhatsApp-Image-2022-06-28-at-18.10.12-2.jpeg"
  }
]

// array structure
// item
// currency
// price
// type
// item_url
// item_image



console.log('total items:' + products.length);


const item_list = document.getElementById('item_list');
const searchInput = document.getElementById('search_bar');
searchInput.addEventListener('input', filterProducts);

let pop_up = document.getElementById("pop_up")
let cart_btn = document.getElementById("cart_btn")
let close_cart_btn = document.getElementById("close_cart_btn")

cart_btn.addEventListener("click", () => {
  pop_up.classList.remove("hidden");
  close_cart_btn.classList.remove("hidden");
  cart_btn.classList.add("hidden");
})
close_cart_btn.addEventListener("click", () => {
  pop_up.classList.add("hidden");
  close_cart_btn.classList.add("hidden");
  cart_btn.classList.remove("hidden");
})

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredProducts;

    if (searchTerm === '') {
        filteredProducts = products; // Show all products when search term is empty
    } else {
        filteredProducts = products.filter(item => item.item.toLowerCase().includes(searchTerm));
    }

    renderProducts(filteredProducts);
}

function renderProducts(products) {
    item_list.innerHTML = ''; // Clear the existing products

    products.forEach(item => {
        let product = document.createElement('div');
        product.setAttribute('class', 'h-[15rem] w-[10.5rem] sm:h-[15rem] sm:w-[11.5rem] cursor-pointer flex flex-col items-center justify-start bg-gray-800 text-gray-200 font-semibold text-sm p-[0.15rem] rounded');
        product.setAttribute('onclick', 'addToCart(\'' + item.item + '\', \'' + item.currency + '\', ' + item.price + ', \'' + item.item_image + '\')');
        //
        let productImage = document.createElement('div');
        productImage.setAttribute('class', 'image border border-slate-800 rounded');
        // //
        let imageData = document.createElement('img');
        imageData.setAttribute('class', 'h-[10.5rem] rounded');
        imageData.setAttribute('src', item.item_image);


        //
        let description = document.createElement('div');
        description.setAttribute('class', 'w-full flex flex-col items-center justify-center h-[4rem]');
        // //
        let descName = document.createElement('span');
        descName.setAttribute('class', 'title');
        descName.innerHTML = item.item;
        let descPrice = document.createElement('span');
        descPrice.setAttribute('class', 'price flex flex-row');
        descPrice.innerHTML = item.currency + item.price;

        description.appendChild(descName); // first fırst child
        description.appendChild(descPrice); // fırst second child


        productImage.appendChild(imageData); //second child

        product.appendChild(productImage); // first parent
        product.appendChild(description); // fırst parent

        item_list.appendChild(product);
    });
}

var cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Function to add item to cart
function addToCart(item, currency, price, image) {
  // Find the item in the cart
  var cartItem = cart.find(cartItem => cartItem.item === item);

  if (cartItem) {
      // Increment the click count if the item already exists in the cart
      cartItem.qantity++;
  } else {
      // Add the item to the cart with initial click count of 1
      cart.push({ item: item, currency: currency, price: price, image: image, qantity: 1 });
  }

  // Update the cart count
  cartCount++;
  updateCartCount();

  // Save the updated cart and cart count to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartCount', cartCount.toString());
  location.reload();

}

function updateCartCount() {
    // Update the cart count display
    document.getElementById('cart_count').innerHTML = cartCount;
    console.log(cart);
}


// Initial rendering of all products
renderProducts(products);

// Update the cart count display on page load
updateCartCount();// Initial rendering of all products



/* render cart items */
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart_details');
  cartItemsContainer.innerHTML = ''; // Clear the existing cart items

  cart.forEach((item, index) => {
    if (item.qantity === 0) {
      return; // Skip rendering items with qantity 0
    }

    let cartItem = document.createElement('div');
    cartItem.setAttribute('class', 'w-[21rem] h-[2.5rem] overflow-none flex flex-row items-center justify-start pl-1 pr-1 mb-1 glass rounded');
    let CartitemImage = document.createElement('img');
    CartitemImage.setAttribute('src', item.image);
    CartitemImage.setAttribute('class', 'w-[2.15rem] h-[2.15rem] rounded');

    let itemName = document.createElement('h1');
    itemName.setAttribute('class', 'w-[9rem] pl-2 font-bold text-sm flex item-center justify-center overflow-x-hidden h-[2.5rem] ')
    itemName.textContent = item.item;

    let itemPrice = document.createElement('h3');
    itemPrice.setAttribute('class', 'w-[3.5rem] pl-1');
    itemPrice.textContent = item.currency + item.price;

    let itemQty = document.createElement('input');
    itemQty.type = 'number';
    itemQty.setAttribute('class', 'w-[2.25rem] pl-2');
    itemQty.value = item.qantity;

    // Add event listener to update the qantity
    itemQty.addEventListener('input', function (event) {
      const newQantity = parseInt(event.target.value);
      if (newQantity === 0) {
        cart.splice(index, 1); // Remove the item from the 'cart' array
      } else {
        item.qantity = newQantity; // Update the qantity in the 'cart' array
      }
      renderCartItems(); // Render the cart items again to reflect the changes
    });

    let itemTotal = document.createElement('h3');
    itemTotal.setAttribute('class', 'w-[3.5rem] pl-2');
    itemTotal.textContent = item.currency + (item.price * item.qantity);

    cartItem.appendChild(CartitemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(itemQty);
    cartItem.appendChild(itemTotal);

    cartItemsContainer.appendChild(cartItem);
  });
  function calculateTotalPrice() {
    let totalPrice = 0;
  
    cart.forEach(item => {
      const itemPrice = item.price * item.qantity;
      totalPrice += itemPrice;
    });
  
    return totalPrice;
  }
  
  
  const totalPrice = calculateTotalPrice();
  console.log('totalPrice : ' + totalPrice);
  let totalCartPrice = document.getElementById('totalCartPrice');
  totalCartPrice.textContent = "€ " + totalPrice;
}

renderCartItems();
 

document.getElementById('clear_cart_btn').addEventListener('click', clearCart);
function clearCart() {
  cart = []; // Clear the cart array
  cartCount = 0; // Reset the cart count
  updateCartCount(); // Update the cart count display

  // Remove cart and cartCount from local storage
  localStorage.removeItem('cart');
  localStorage.removeItem('cartCount');
  location.reload();  //reload the page
}



document.getElementById("cash_out").addEventListener("click", function() {
  var printContents = document.getElementById('pop_up_inner').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
});