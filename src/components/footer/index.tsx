import { SelectedPage } from "@/shared/types";
import logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            similique eligendi facere laudantium laborum esse odio atque.
            Pariatur assumenda tempora itaque minus dolores natus nihil
            molestias aspernatur iusto, perspiciatis dignissimos.
          </p>
          <p>© EvoGym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold ">Links</h4>
          <p className="mt-5">Lorem ipsum dolor sit.</p>
          <p className="mt-5">Lorem ipsum dolor sit.</p>
          <p className="mt-5">Ullama corper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold ">Contact Us</h4>
          <p className="mt-5">Lorem ipsum dolor sit.</p>
          <p className="mt-5">+(549)011-452636</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
