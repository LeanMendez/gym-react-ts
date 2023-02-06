import Htext from "@/shared/Htext";
import Htex from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ActionButton from "../ActionButton";
import Benefit from "./Benefit";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum assumenda soluta doloremque obcaecati cum",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum assumenda soluta doloremque obcaecati cum",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum assumenda soluta doloremque obcaecati cum",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            iste corporis quam ex consequatur sit sint, nemo dignissimos,
            ratione, ea veniam at earum dolorem nihil nam saepe explicabo
            aperiam vitae.
          </p>
        </motion.div>

        {/*BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/*GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-betweengap-20 md:mt-28 md:flex">
          {/*GRAPHIC */}
          <img 
          className="mx-auto"
          src={BenefitsPageGraphic} alt="benefits-page-graphic" />
          {/*DESCRIPTION */}
          <div>
            {/*TITLE */}
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves
              "
              >
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                  <Htext> 
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPT*/}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic quibusdam eius beatae? Debitis esse quaerat impedit voluptatem, adipisci at ut praesentium est assumenda veniam dolore placeat ad ullam laborum soluta a tempore illum optio corrupti. Blanditiis, odio obcaecati totam non magni veritatis fuga quasi, ipsa esse mollitia vel exercitationem.</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint voluptates tempore saepe perspiciatis, reiciendis quas vitae quasi explicabo voluptatibus quia ullam nesciunt. Qui tempore at nam adipisci distinctio? Voluptatum?</p>
            </motion.div>
            {/*BUTTON */}
            <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton
            setSelectedPage={setSelectedPage}
            >
              Join Now
            </ActionButton>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
