import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import QuickSpecProVideo from '../assets/Quick Spec Pro Demo.mp4';
import LuxVideo from '../assets/Lux Demo.mp4';
import FlatbillVideo from '../assets/Flatbill Demo.mp4';
import MassageVideo from '../assets/Massage Demo.mp4';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-3/4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Business & Marketing Technology Solutions
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Do you have an idea you want to turn into reality? Maybe it’s a blog, app or software
            solution. Maybe you just need help growing your current business by creating better
            digital experiences for your customers. Whatever the case. ViperByte can bring your
            ideas to life.
          </p>
          <p className="mt-8 md:mt-12">
            <a href="https://forms.gle/AH4zCDnRVsmUYh4j6">
              <Button size="lg">Get Started</Button>
            </a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Websites</p>
              <p className="mt-4">Get a new website that your customers and visitors will enjoy.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Mobile Apps</p>
              <p className="mt-4">Deliver amazing experiences for your customers on any device.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Software</p>
              <p className="mt-4">Automate tedious tasks and make your company more productive.</p>
            </Card>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Data Analytics</p>
              <p className="mt-4">Better understand and how to use your companies data.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Digital Marketing</p>
              <p className="mt-4">Create better marketing strategies that accomplish your goals.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 content">
              <div className="flex justify-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-xl">Consulting</p>
              <p className="mt-4">
                Know with confidence which decisions will make lasting impacts on your business.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Projects</h2>
      </div>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Quick Spec Pro</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Mobile application that allows users to generate automated inspection reports from
              their phone.
            </p>
          </div>
        }
        secondarySlot={
          <video controls autoPlay loop muted width="auto">
            <source src={QuickSpecProVideo} type="video/mp4" />
            <track src="" />
          </video>
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">LUX LED Signs</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Ecommerce and Lead Gen site for Outdoor LED Sign company. SEO is the primary marketing
              tactic used to get more customers.
            </p>
          </div>
        }
        secondarySlot={
          <video controls autoPlay loop muted>
            <source src={LuxVideo} type="video/mp4" />
            <track src="" />
          </video>
        }
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Digital Marketing Funnel and Analytics
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We helped craft this automated email marketing campaign in ExactTarget. We also built
              the report using LucidChart.
            </p>
          </div>
        }
        secondarySlot={
          <video controls autoPlay loop muted width="auto">
            <source src={FlatbillVideo} type="video/mp4" />
            <track src="" />
          </video>
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Massage Montevallo</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Local massage business website optimized for organic search.
            </p>
          </div>
        }
        secondarySlot={
          <video controls autoPlay loop muted>
            <source src={MassageVideo} type="video/mp4" />
            <track src="" />
          </video>
        }
      />
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">Fill out the form to get your project started.</p>
      <p className="mt-8">
        <a href="https://forms.gle/AH4zCDnRVsmUYh4j6">
          <Button size="xl">Get Started Now</Button>
        </a>
      </p>
    </section>
  </Layout>
);
