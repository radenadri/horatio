const Footer = () => {
  return (
    <footer>
      <div className="px-10 py-20 sm:py-10 max-w-[1280px] mx-auto">
        <div className="flex flex-wrap sm:space-y-8">
          <div className="space-y-4 w-3/12 sm:w-full">
            <h6 className="font-['Satoshi-Bold']">Address</h6>
            <p>
              Horatio <br />
              Vault 6, Makerversity <br />
              Somerset House <br />
              Strand, London <br />
              WC2R 1LA
            </p>
          </div>
          <div className="space-y-4 w-3/12 sm:w-full">
            <h6 className="font-['Satoshi-Bold']">Get In Touch</h6>
            <ul className="space-y-4">
              <li>
                <a className="hover:underline" href="mailto:info@horatio.id">
                  info@horatio.id
                </a>
              </li>
              <li>
                <a className="hover:underline" href="tel:02081442696">
                0208 1 44-26-96
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 ml-auto w-3/12 sm:w-full">
            <h6 className="font-['Satoshi-Bold']">Follow</h6>
            <ul className="flex space-x-4">
              <li>
                <a className="hover:underline" href="#">
                  Ig
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Li
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Tw
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Be
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-10 max-w-[1280px] mx-auto pb-4 flex justify-between">
        <h6 className="text-xs font-['Satoshi-Black']">© HORATIO 2022</h6>
      </div>
    </footer>
  );
}

export default Footer;