const backgrounds = {
    1: "src/assets/backgrounds/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    2: "src/assets/backgrounds/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
    3: "src/assets/backgrounds/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg",
    4: "src/assets/backgrounds/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
    5: "src/assets/backgrounds/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
    6: "src/assets/backgrounds/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
}

export default function getBg() {
    const rand_number = Math.floor(Math.random() * 6 + 1);
    const randomBg = backgrounds[rand_number];
    return randomBg;
}
