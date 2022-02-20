import { v4 as uuidv4 } from 'uuid';
import DealFinderImg from '../Images/dealfinderImg.jpg';
import MonitoringSysImg from '../Images/monitoringsysImg.gif';
import LogicDesignImg from '../Images/logicdesignImg.jpg';
import ResumeImg from '../Images/resumeprojectimg.PNG';
import GreenLtImg from '../Images/greenlight.jpg';
import BinomiHeapImg from '../Images/binomialheapImg.jpg';

const project = [
  {
    id: uuidv4(),
    name: 'Real Time Monitoring and Control Process of Biofuel Production Using Biodegradable Waste',
    desc:
      'Waste management is one of the most instant and serious problems of Bangladesh. Another problem to be concerned about is that, the conventional energy resources are declining now a days. With this project, we can cover up the shortage of cooking gas by producing biogas with kitchen waste. Also, by our device we can always monitor the biogas plant and provide raw materials according to the received data from the device. The whole project idea is cost effective and environment friendly.',
    img: MonitoringSysImg,
  },
  {
    id: uuidv4(),
    name: 'Digital Logic Design',
    desc:
      'It is an hardware project which was implemented with universal gate,decoder and mux.',
    img: LogicDesignImg,
  },
  {
    id: uuidv4(),
    name: '	Resume website',
    desc:
      'This is my own responsive resume website which I created by using only Html and CSS. https://konicaresume.000webhostapp.com/',
    img: ResumeImg,
  },
  {
    id: uuidv4(),
    name: "	Greenlight",
    desc:
      'This is a little software base project which is an app. In this app we can call the nearby pharmacy for medicine in sudden need when no stores are open. We have also implemented some doctors information using a database who can be available at night hour  for an online meeting with patients in need. ',
    img: GreenLtImg,
  },
  {
    id: uuidv4(),
    name: '	Deal Finder',
    desc:
      'This is an website where discount from different stores can be shown serially. The main purpose of this website is to deliver deals, special offers, Coupons to a large audience. User can find latest offers, discount of their favorite store by just one click. The store/shops/hotels can also give the information to post some discounts. We have used Xampp ,mySql, Html, CSS, Bootstrap, Javascript to create the website.',
    img: DealFinderImg,
  },
  {
    id: uuidv4(),
    name: 'Binomial Heap',
    desc:
      'In this project we had implemented some operations in Binomial Heap using C++ object oriented language. The operations were insert, find minimum value, decrease key, delete node, display etc. Finally we had implemented a little bit of it in GUI interface. ',
    img: BinomiHeapImg,
  }
];

export default project;