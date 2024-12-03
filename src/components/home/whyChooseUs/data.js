// import p1 from '../../../image/product_pic.jpg'
const images = [
  { url: require('./product_pic.jpg'), alt: 'product0' },
  { url: require('./product_pic1.jpg'), alt: 'product1' },
  { url: require('./product_pic2.jpg'), alt: 'product2' },
  { url: require('./product_pic3.jpg'), alt: 'product3' },
  { url: require('./product_pic4.jpg'), alt: 'product4' },
  { url: require('./product_pic5.jpg'), alt: 'product5' },
  { url: require('./product_pic6.jpg'), alt: 'product6' },
];

const doctorsData = [
  {
    name: 'Dr. John Doe',
    image: 'https://images.pexels.com/photos/4421493/pexels-photo-4421493.jpeg?auto=compress&cs=tinysrgb&w=440',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: 'Dr. Jane Smith',
    image: 'https://images.pexels.com/photos/4421493/pexels-photo-4421493.jpeg?auto=compress&cs=tinysrgb&w=440',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: 'Dr. Alex Brown',
    image: 'https://images.pexels.com/photos/4421493/pexels-photo-4421493.jpeg?auto=compress&cs=tinysrgb&w=440',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];
const facilityData = [
  {
    id:1,
    title: 'Expert Instructor',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter."
  },
  {
    id:2,
    title: 'Flexible Learning',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  },
  {
    id:3,
    title: 'Hands-On Courses',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  }
];
module.exports = { images, doctorsData, facilityData } 