import TwitterSvg from '../assets/images/icons/twitter.svg';
import FacebookSvg from '../assets/images/icons/fb.svg';
import InstagramSvg from '../assets/images/icons/instagram.svg';
import GithubSvg from '../assets/images/icons/github.svg';
import VisaSvg from '../assets/images/icons/visa.svg';
import MastercardSvg from '../assets/images/icons/mastercard.svg';
import PaypalSvg from '../assets/images/icons/paypal.svg';
import ApaySvg from '../assets/images/icons/apay.svg';
import GpaySvg from '../assets/images/icons/gpay.svg';

export const footerItems = [
  {
    id: 1,
    title: 'Company',
    items: [
      { id: 1, name: 'About', link: '#' },
      { id: 2, name: 'Features', link: '#' },
      { id: 3, name: 'Works', link: '#' },
      { id: 4, name: 'Career', link: '#' },
    ],
  },
  {
    id: 2,
    title: 'Help',
    items: [
      { id: 1, name: 'Customer Support', link: '#' },
      { id: 2, name: 'Deliver Details', link: '#' },
      { id: 3, name: 'Terms & Conditipons', link: '#' },
      { id: 4, name: 'Privacy Policy', link: '#' },
    ],
  },
  {
    id: 3,
    title: 'Faq',
    items: [
      { id: 1, name: 'Account', link: '#' },
      { id: 2, name: 'Manage Deliveries', link: '#' },
      { id: 3, name: 'Orders', link: '#' },
      { id: 4, name: 'Payments', link: '#' },
    ],
  },
  {
    id: 4,
    title: 'Resources',
    items: [
      { id: 1, name: 'Free eBooks', link: '#' },
      { id: 2, name: 'Development Tutorials', link: '#' },
      { id: 3, name: 'How to...', link: '#' },
      { id: 4, name: 'Youtube', link: '#' },
    ],
  },
];

export const socialIcons = [
  { id: 1, image: TwitterSvg, name: 'X' },
  { id: 2, image: FacebookSvg, name: 'Facebook' },
  { id: 3, image: InstagramSvg, name: 'Instagram' },
  { id: 4, image: GithubSvg, name: 'Github' },
];

export const paymentsIcons = [
  { id: 1, image: VisaSvg, name: 'visa' },
  { id: 2, image: MastercardSvg, name: 'mastercard' },
  { id: 3, image: PaypalSvg, name: 'paypal' },
  { id: 4, image: ApaySvg, name: 'apay' },
  { id: 5, image: GpaySvg, name: 'gpay' },
];
