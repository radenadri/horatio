import { Reveal, Tween } from 'react-gsap';
import dropbox from '../img/dropbox.png';
import github from '../img/github.png';
import shopify from '../img/shopify.png';
import slack from '../img/slack.png';
import stripe from '../img/stripe.png';

const Clients = () => {

  const clients = [dropbox, github, shopify, slack, stripe];

  return (
    <div className="px-10 pb-20">
      <div className="flex flex-wrap justify-center space-x-12 sm:space-x-0">
          <Reveal>
            <Tween from={{ autoAlpha: 0 }} duration="1.8" ease="power4.out">
              {clients.map((client, idx) => {
                return (
                  <div key={idx}>
                    <img src={client} alt="client" />
                  </div>
                )
              })}
            </Tween>
          </Reveal>
      </div>
    </div>
  );
}

export default Clients;