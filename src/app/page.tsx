import Image from 'next/image';
import { FaCar, FaCheck } from 'react-icons/fa';
import { IoCarOutline } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';
import { LuPhoneCall } from 'react-icons/lu';
import { FaInstagram, FaRegClock } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import Contactus from './components/menu/Contactus';
import { BsPeople, BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import Link from 'next/link';
import Aos from './components/Aos';

// components/ServiceCard.js
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div
      className="service-box col-span-1 flex flex-col items-center text-center p-4 py-8"
      data-aos="fade-up"
    >
      <img src={icon} alt="" className="h-16 w-16 mb-3" />
      <h5 className="text-gold text-2xl font-semibold">{title}</h5>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const citys = [
  'Toronto',
  'Mississauga',
  'Brampton',
  'Vaughan',
  'Markham',
  'Oakville',
  'Richmond Hill',
  'Burlington',
  'Hamilton',
  'Scarborough',
  'Ajax',
  'Milton',
  'Pickering',
  'Whitby',
  'Newmarket',
  'Aurora',
  'Caledon',
  'Halton Hills',
  'Guelph',
  'Oshawa',
  'Barrie',
  'St. Catharines',
  'Cambridge',
  'Kitchener',
  'Waterloo',
  'Orangeville',
  'Georgina',
  'East Gwillimbury',
  'Innisfil',
  'Bradford West Gwillimbury',
  'Uxbridge',
  'Stouffville',
  'King City',
  'Bolton',
  'Port Perry',
  'Niagara Falls',
  'Welland',
  'Fort Erie',
  'Grimsby',
  'Clarington',
];

const services = [
  {
    title: 'Airport Transfers',
    description:
      'Quick, reliable service for all airport journeys. Experience stress-free travel with luxury and punctuality.',
    icon: '/images/airport.svg',
  },
  {
    title: 'Wedding Limousine Service',
    description:
      'Add a touch of elegance to your wedding. Luxurious, decorated limos for your special day.',
    icon: '/images/wedding-car.svg',
  },
  {
    title: 'Corporate Car Service',
    description:
      'Professional and discreet for corporate needs. Arrive in style and comfort at your business events.',
    icon: '/images/3.png',
  },
  {
    title: 'Prom Night Limos',
    description:
      'Make your prom night memorable and safe. Stylish, fun rides for you and your friends.',
    icon: '/images/4.png',
  },
  {
    title: 'City Tours',
    description:
      "Discover the city's highlights in comfort. Personalized and informative limo tours.",
    icon: '/images/car-rental.svg',
  },
  {
    title: 'Special Events Transportation',
    description:
      'For concerts, sports, and more. Arrive in luxury, leave an impression.',
    icon: '/images/66.png',
  },
  {
    title: 'VIP Transport Services',
    description:
      'Exclusive service for discerning clients. Privacy, comfort, and elegance guaranteed.',
    icon: '/images/7.png',
  },
  {
    title: 'Night Out Limo Service',
    description:
      'Perfect for parties, dinners, or clubbing. Enjoy the night with sophistication and safety.',
    icon: '/images/8.png',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* HERO SECTION */}
      <Aos>
        <section
          id="home"
          className="welcome-hero flex items-center justify-between"
        >
          <div className="bg-[#000000ab] w-screen h-screen absolute z-0"></div>
          <div className="z-10 text-white py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1
              className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl dark:text-white"
              data-aos="fade-up"
            >
              <span className="text-gold">Elite Comfort</span> in Every Journey
            </h1>
            <p
              className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Whether it's a special occasion, corporate event, or a stylish
              ride to the airport, our premium limousine services promise
              unparalleled comfort, discretion, and style.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gold rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center gap-2 text-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gold focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <FaCar />
                <span> Book Now</span>
              </a>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="services py-28">
          <div className="container mx-auto px-4 md:pb-8">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                Our Services
              </h2>
              <p
                className="text-md text-gold mt-2"
                data-aos="fade-up"
                data-aos-delay="20"
              >
                Luxury Services For Maximum Satisfaction. Enjoy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="plans" className="plans w-full bg-gray-100 py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-start justify-between">
              <div className="md:w-2/5 w-full px-4 mb-8 md:mb-0">
                <img
                  src="/images/whyus.JPG"
                  alt=""
                  className="w-full h-auto rounded-lg"
                  data-aos="fade-up"
                />
              </div>
              <div className="md:w-1/2 w-full px-4">
                <h2
                  className="text-4xl md:text-5xl font-semibold"
                  data-aos="fade-up"
                >
                  Our Advantages
                </h2>
                <p
                  className="text-md text-gold mt-2 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  Discover the essence of luxury and reliability with SB LIMO.
                </p>
                <div
                  className="flex items-center justify-between py-4 gap-6 max-w-[600px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex-shrink-0 p-4 text-xl bg-white rounded-full border text-gold">
                    <FaCheck />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg  lg:text-2xl font-semibold text-gold py-1">
                      Unmatched Reliability
                    </h4>
                    <p className="text-sm text-gray-600">
                      We pride ourselves on punctuality and reliability. Our
                      clients trust us to deliver exceptional service with every
                      ride.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between py-4 gap-6 max-w-[600px]"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="flex-shrink-0 p-4 text-xl bg-white rounded-full border text-gold">
                    <FaCheck />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg lg:text-2xl  font-semibold py-1 text-gold">
                      Luxurious Fleet
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our fleet features a range of high-end, well-maintained
                      vehicles, ensuring a luxurious experience for every
                      journey.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between py-4 gap-6 max-w-[600px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex-shrink-0 p-4 text-xl bg-white rounded-full border text-gold">
                    <FaCheck />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg lg:text-2xl  font-semibold py-1 text-gold">
                      Professional Chauffeurs
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our chauffeurs are trained professionals, dedicated to
                      providing safe, discreet, and courteous service to all our
                      clients.
                    </p>
                  </div>
                </div>
                <button
                  className="main-button mt-7"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="reservation" className="reservation w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
                24/7 SERVICES
              </h2>
              <h5
                className="text-xl text-white mt-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                We are committed to providing our customers with quality
                services at a fair price.
              </h5>
              <h2
                className="text-3xl font-bold text-white mt-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="tel:+12363356123">+1 236-335-6123</a>
              </h2>
              <div className="mt-6">
                <button
                  className="main-button mt-4"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <span>Book Now!</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="plans w-full  py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="text-4xl md:text-5xl font-semibold"
                data-aos="fade-up"
              >
                Our Plans
              </h2>
              <p
                className="text-md text-gold mt-2"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Exclusive Cars
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="max-w-xl mx-auto w-full">
                <div
                  className="border-dotted border-2 border-gray-300 p-8 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/"
                    className="block"
                  >
                    <img
                      src="https://images.carprices.com/pricebooks_data/usa/colorized/2024/GMC/View2/Yukon_XL/SLE/TC10906_G6M.png"
                      alt="GMC Yukon"
                      className="w-full h-auto rounded"
                    />
                  </a>
                  <div className="text-3xl font-semibold mt-2">
                    $1.9<span className="text-sm font-normal"> per KM</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-3xl mt-2">
                      <a
                        href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/"
                        className="text-gold "
                      >
                        GMC Yukon
                      </a>
                    </h5>
                    <p className="text-gray-600 mt-1">
                      Insured, leather interior, air conditioning, rain sensor,
                      panoramic roof
                    </p>
                    <ul className="flex items-center space-x-2 mt-2 lg:gap-3">
                      {/* Placeholder for icons */}
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <BsPeople className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm text-nowrap">
                            7 seats
                          </span>
                        </div>
                      </li>
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <BsFuelPump className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm">Diesel</span>
                        </div>
                      </li>
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <TbManualGearbox className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm">
                            Automatic
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-2">
                      {/* Placeholder for rating stars */}
                      <div className="flex items-center space-x-1">
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                      </div>
                    </div>
                    <a href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/">
                      <button className="main-button-2 mt-5">
                        <span>Book Now!</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-xl mx-auto w-full">
                <div
                  className="border-dotted border-2 border-gray-300 p-8 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/"
                    className="block"
                  >
                    <img
                      src="/images/outlander.png"
                      alt="Mitsubishi outlander"
                      className="w-full h-auto rounded"
                    />
                  </a>
                  <div className="text-3xl font-semibold mt-2">
                    $1.7<span className="text-sm font-normal"> per KM</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-3xl mt-2">
                      <a
                        href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/"
                        className="text-gold "
                      >
                        Mitsubishi Outlander
                      </a>
                    </h5>
                    <p className="text-gray-600 mt-1">
                      Insured, leather interior, air conditioning, rain sensor,
                      panoramic roof
                    </p>
                    <ul className="flex items-center space-x-2 mt-2 lg:gap-3">
                      {/* Placeholder for icons */}
                      {/* Placeholder for icons */}
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <BsPeople className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm text-nowrap">
                            7 seats
                          </span>
                        </div>
                      </li>
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <BsFuelPump className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm">Diesel</span>
                        </div>
                      </li>
                      <li className="w-1/3 border-solid border-2 border-gray-300 p-4 my-4">
                        <div className="flex items-center flex-col  space-x-2">
                          <div className="h-6 w-6 mb-3">
                            <TbManualGearbox className="h-6 w-6 text-gold" />
                          </div>
                          <span className="text-gray-600 text-sm">
                            Automatic
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-2">
                      {/* Placeholder for rating stars */}
                      <div className="flex items-center space-x-1">
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                        <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
                      </div>
                    </div>
                    <a href="http://limme.like-themes.com/rentals/cadillac-limousine-xts-2-2/">
                      <button className="main-button-2 mt-5">
                        <span>Book Now!</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abous Us */}
        <section
          id="aboutus"
          className="aboutus flex flex-col md:flex-row bg-gradient-to-b from-custom-black to-black w-full"
        >
          <div className="w-full md:w-1/2">
            <img
              src="/images/aboutusgmc.JPG"
              alt="About Us"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-start md:max-w-md  text-white p-8 py-36 md:ps-10">
            <h2
              className="text-4xl md:text-5xl font-semibold"
              data-aos="fade-up"
            >
              About Us
            </h2>
            <p
              className="text-md text-gold mt-2"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              SB LIMO
            </p>
            <p
              className="mb-4 mt-4 text-lg font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to SB Limo, where your comfort is our highest priority. We
              are committed to providing our clients with an experience that
              transcends the standard notion of travel. Our fleet of high-end
              vehicles and professional chauffeurs ensure a journey that's as
              smooth as it is stylish.
            </p>

            <p
              className="text-lg font-normal"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              From the moment you step into one of our pristine vehicles, you'll
              understand what sets us apart. Our commitment to excellence is
              reflected in every aspect of our service.
            </p>
          </div>
        </section>

        {/* info */}
        <section id="info" className="contact  w-full ">
          <div className="container mx-auto px-4 flex flex-col relative flex-wrap w-full justify-center items-center">
            <h1
              className="pt-28 mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gold md:text-6xl lg:text-7xl dark:text-white uppercase"
              data-aos="fade-up"
            >
              Quality guaranteed
            </h1>

            <p
              className="mb-16 text-lg text-center font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              You can expect the best from our team.
            </p>

            <div className="two z-10">
              <img
                src="/images/limo.png"
                width="1535"
                height="502"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
          </div>
          <div className="w-full bg-custom-black justify-center h-36 mt-[-30px] md:mt-[-80px] xl:mt-[-110px]"></div>
        </section>
        <section className="bg-gradient-to-b from-custom-black to-black bg-custom-black flex justify-center w-full flex-col">
          <h2
            className="text-4xl md:text-5xl font-semibold text-white text-center"
            data-aos="fade-up"
          >
            We make sure that<span className="text-gold"> your every trip</span>{' '}
            is comfortable
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="col-span-1 flex flex-col items-center text-center p-4 py-8">
              <div className="h-16 w-16 mb-3">
                <IoCarOutline className="h-16 w-16 text-gold" />
              </div>
              <h5 className="text-white text-xl">Luxury Selection</h5>
            </div>

            <div className="col-span-1 flex flex-col items-center text-center p-4 py-8">
              <div className="h-16 w-16 mb-3">
                <LuPhoneCall className="h-16 w-16 text-gold" />
              </div>
              <h5 className="text-white text-xl">27/7 Order Available</h5>
            </div>

            <div className="col-span-1 flex flex-col items-center text-center p-4 py-8">
              <div className="h-16 w-16 mb-3">
                <AiOutlineSafety className="h-16 w-16 text-gold" />
              </div>
              <h5 className="text-white text-xl">High Safety and Nurity</h5>
            </div>
          </div>
          <div className="tag-list w-full mt-16 pb-4">
            <div className="loop-slider">
              <div className="inner inner-forward">
                {citys.map((city, i) => {
                  if (i < 20) {
                    return <div className="tag bg-custom-black">{city}</div>;
                  }
                })}
              </div>
            </div>
            <div className="loop-slider">
              <div className="inner inner-rev">
                {citys.map((city, i) => {
                  if (i >= 20) {
                    return <div className="tag bg-custom-black">{city}</div>;
                  }
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact us */}
        <section id="contactus" className=" w-full  py-28">
          <div className="container mx-auto px-4">
            <Contactus />
          </div>
        </section>

        {/* CTA - Optional */}
        <section id="cta" className="cta relative  bg-gold w-full">
          <div className="cta-inner relative container mx-auto px-4 py-16 z-10">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="text-center w-full md:w-3/4">
                <h3
                  className="text-2xl font-bold text-center"
                  data-aos="fade-up"
                >
                  Do You Have Questions?
                </h3>
              </div>
              <div className="w-full md:w-1/4 text-center  mt-4 md:mt-0">
                <a
                  href="mailto:sblimousine123@gmail.com"
                  className="inline-block bg-white text-gold font-semibold py-4 px-8 rounded hover:bg-gray-100 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="footer" className="footer w-full py-24">
          <div className="container mx-auto px-4 flex flex-col text-white items-center gap-3">
            <div className="w-72 h-auto mb-8">
              <Link href="/#home">
                <img src="/images/sblimologo.png" alt="LOGO" />
              </Link>
            </div>
            <div className="flex justify-center items-center w-full">
              <ul className="lte-social-icons-list w-full flex flex-wrap justify-center items-center flex-col gap-16 md:flex-row md:gap-0 -mx-2">
                <li className="w-1/4 px-6 py-4 text-center relative dotted-border min-w-60">
                  <div className="flex items-center  flex-col space-x-2">
                    <div className="h-10 w-10 mb-3">
                      <LuPhoneCall className="h-10 w-10 text-gold" />
                    </div>
                    <span className="lte-txt">
                      <a href="tel:+12363356123">+1 236-335-6123</a>
                      <br />
                      <strong className="text-gold"> Round-the-clock </strong>
                    </span>
                  </div>
                </li>
                <li className="w-1/4 px-6 py-4 text-center relative dotted-border min-w-60">
                  <div className="flex items-center flex-col  space-x-2">
                    <div className="h-10 w-10 mb-3">
                      <FaInstagram className="h-10 w-10 text-gold" />
                    </div>
                    <span className="lte-txt">
                      <a href="https://www.instagram.com/sblimo123">
                        @SBLIMO123
                      </a>
                    </span>
                  </div>
                </li>
                <li className="w-1/4 px-6 py-4 text-center relative dotted-border min-w-60">
                  <div className="flex items-center flex-col  space-x-2">
                    <div className="h-10 w-10 mb-3">
                      <MdOutlineMailOutline className="h-10 w-10 text-gold" />
                    </div>
                    <span className="lte-txt text-wrap">
                      <a
                        href="mailto:sblimousine123@gmail.com"
                        className="text-wrap"
                      >
                        sblimousine123@gmail.com
                      </a>
                      <br />
                    </span>
                  </div>
                </li>
                <li className="w-1/4 px-6 py-4 text-center min-w-60">
                  <div className="flex items-center flex-col  space-x-2">
                    <div className="h-10 w-10 mb-3">
                      <FaRegClock className="h-10 w-10 text-gold" />
                    </div>
                    <span className="lte-txt">
                      <strong className="text-gold"> Mo-Sa: </strong> 00:00 -
                      24:00
                      <br />
                      <strong className="text-gold"> Su: </strong> 00:00 - 24:00
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className=" pb-10 md:pb-1 text-center bg-black w-full h-16 flex items-center flex-col md:flex-row justify-center text-white">
          SBLIMO © All Rights Reserved - 2024 | created by{' '}
          <a href="https://www.afullstack.dev" target="_blank" className="flex">
            {' '}
            <svg
              className="w-10"
              viewBox="1.429 0.357 720.357 385"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path
                d="M 273.465 307.879 L 260.492 320.88 C 258.763 322.611 256.774 323.479 254.525 323.479 C 252.276 323.479 250.288 322.611 248.557 320.88 L 127.644 199.729 C 125.913 197.996 125.049 196.003 125.049 193.75 C 125.049 191.496 125.913 189.502 127.644 187.77 L 248.557 66.619 C 250.288 64.885 252.276 64.02 254.525 64.02 C 256.774 64.02 258.763 64.885 260.492 66.619 L 273.465 79.618 C 275.197 81.351 276.06 83.344 276.06 85.598 C 276.06 87.851 275.197 89.844 273.465 91.577 L 171.494 193.75 L 273.465 295.921 C 275.197 297.654 276.06 299.647 276.06 301.901 C 276.06 304.155 275.197 306.147 273.465 307.879 Z"
                className="animate-left"
                style={{
                  fill: '#ffffff',
                }}
              ></path>
              <path
                d="M 597.285 199.729 L 476.372 320.88 C 474.642 322.611 472.652 323.479 470.405 323.479 C 468.155 323.479 466.166 322.611 464.437 320.88 L 451.464 307.879 C 449.732 306.147 448.869 304.155 448.869 301.901 C 448.869 299.647 449.732 297.654 451.464 295.921 L 553.434 193.75 L 451.464 91.577 C 449.732 89.844 448.869 87.851 448.869 85.598 C 448.869 83.344 449.732 81.351 451.464 79.618 L 464.437 66.619 C 466.166 64.885 468.155 64.02 470.405 64.02 C 472.652 64.02 474.642 64.885 476.372 66.619 L 597.285 187.77 C 599.014 189.502 599.88 191.496 599.88 193.75 C 599.88 196.003 599.014 197.996 597.285 199.729 Z"
                className="animate-right"
                style={{
                  fill: '#ffffff',
                }}
              ></path>
              <path
                d="M 426.813 30.482 L 330.031 366.115 C 329.339 368.369 327.999 370.058 326.009 371.186 C 324.02 372.311 321.988 372.527 319.912 371.835 L 303.824 367.416 C 301.574 366.722 299.89 365.378 298.766 363.387 C 297.64 361.392 297.424 359.269 298.116 357.015 L 394.898 21.383 C 395.59 19.129 396.93 17.44 398.92 16.314 C 400.909 15.186 402.941 14.969 405.018 15.664 L 421.105 20.083 C 423.353 20.776 425.039 22.119 426.165 24.112 C 427.289 26.106 427.504 28.228 426.813 30.482 Z"
                className="animate-rotate"
                style={{
                  fill: '#D7B65D',
                  transformBox: 'fill-box',
                  transformOrigin: '50% 50%',
                }}
              ></path>
            </svg>
            <span className="underline"> aFullStack.dev</span>
          </a>
          <div
            id="getquote"
            className="sm:hidden fixed bottom-4 right-4 flex items-center z-50 rounded-full"
          >
            <div className="flex items-center justify-center bg-gold rounded-full w-14 h-14 me-[-10px] z-[60]">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center bg-gray-700 text-white rounded-r-full py-2 px-4 z-50">
              GET QUOTE
            </div>
          </div>
        </section>
      </Aos>
    </main>
  );
}
