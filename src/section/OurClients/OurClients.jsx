import React from "react";
import client1 from "../../assets/team-01.png";
import client2 from "../../assets/image-02.png";
import client3 from "../../assets/image-03.png";
import client4 from "../../assets/image-04.png";
import ClientCard from "./ClientCard";
const OurClients = () => {
  const clientData = [
    {
      id: 1,
      name: "Melissa Tatcher",
      designation: "Marketing Expert",
      imgURL: client1,
    },
    {
      id: 2,
      name: "Stuard Ferrel",
      designation: "Digital Marketer",
      imgURL: client2,
    },
    {
      id: 3,
      name: "Eva Hudson",
      designation: "Creative Designer",
      imgURL: client3,
    },
    {
      id: 4,
      name: "Jackie Sanders",
      designation: "Founder of Facebook",
      imgURL: client4,
    },
  ];
  return (
    <>
      <section className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {clientData.map((data) => (
              <ClientCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
